import nodemailer from "nodemailer";

/**
 * Email configuration for sending contact form submissions
 * Supports Gmail, Outlook, and custom SMTP servers
 */

const EMAIL_USER = process.env.EMAIL_USER || "";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
const EMAIL_FROM = process.env.EMAIL_FROM || "noreply@jpdigital.com";
const OWNER_EMAIL = process.env.OWNER_EMAIL || "jonata@jpdigital.com";

let transporter: nodemailer.Transporter | null = null;

/**
 * Initialize the email transporter
 * Uses Gmail SMTP by default, but can be configured for other providers
 */
function getTransporter() {
  if (transporter) return transporter;

  if (!EMAIL_USER || !EMAIL_PASSWORD) {
    console.warn("[Email] Email credentials not configured. Email sending disabled.");
    return null;
  }

  transporter = nodemailer.createTransport({
    service: "gmail", // Change to your email provider
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD, // Use app password for Gmail
    },
  });

  return transporter;
}

/**
 * Send contact form email to owner
 */
export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const transport = getTransporter();
  if (!transport) {
    console.warn("[Email] Transporter not available");
    return false;
  }

  try {
    // Email to owner
    await transport.sendMail({
      from: EMAIL_FROM,
      to: OWNER_EMAIL,
      subject: `Novo Contato: ${data.subject}`,
      html: `
        <h2>Novo Contato Recebido</h2>
        <p><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        ${data.phone ? `<p><strong>Telefone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
        <p><strong>Assunto:</strong> ${escapeHtml(data.subject)}</p>
        <h3>Mensagem:</h3>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
      `,
      replyTo: data.email,
    });

    // Confirmation email to user
    await transport.sendMail({
      from: EMAIL_FROM,
      to: data.email,
      subject: "Recebemos sua mensagem - JP Digital Solutions",
      html: `
        <h2>Obrigado por entrar em contato!</h2>
        <p>Olá ${escapeHtml(data.name)},</p>
        <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
        <hr>
        <h3>Resumo da sua mensagem:</h3>
        <p><strong>Assunto:</strong> ${escapeHtml(data.subject)}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Atenciosamente,<br>JP Digital Solutions</p>
      `,
    });

    return true;
  } catch (error) {
    console.error("[Email] Failed to send email:", error);
    return false;
  }
}

/**
 * Escape HTML special characters to prevent injection
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
