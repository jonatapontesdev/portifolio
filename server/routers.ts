import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getAllProjects, getUserProjects, createContact } from "./db";
import { sendContactEmail } from "./_core/email";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  projects: router({
    list: publicProcedure.query(() => getAllProjects()),
    userProjects: publicProcedure.query(({ ctx }) => {
      if (!ctx.user) return [];
      return getUserProjects(ctx.user.id);
    }),
  }),

  contact: router({
    send: publicProcedure
      .input(
        z.object({
          name: z.string().min(2).max(255),
          email: z.string().email(),
          phone: z.string().max(20).optional(),
          subject: z.string().min(5).max(255),
          message: z.string().min(10).max(5000),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Save to database
          await createContact({
            name: input.name,
            email: input.email,
            phone: input.phone,
            subject: input.subject,
            message: input.message,
            status: "novo",
          });

          // Send email
          const emailSent = await sendContactEmail(input);

          return {
            success: true,
            message: "Mensagem enviada com sucesso!",
            emailSent,
          };
        } catch (error) {
          console.error("[Contact] Error sending contact form:", error);
          return {
            success: false,
            message: "Erro ao enviar mensagem. Tente novamente.",
            emailSent: false,
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
