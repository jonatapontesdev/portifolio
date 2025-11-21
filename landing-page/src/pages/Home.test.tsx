import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "./Home";

describe("Home Page", () => {
  it("renders the hero section with main heading", () => {
    render(<Home />);
    const headings = screen.getAllByText("Jonata Pontes");
    expect(headings.length > 0).toBe(true);
    const subtitles = screen.getAllByText(/Full-Stack Developer/);
    expect(subtitles.length > 0).toBe(true);
  });

  it("renders navigation links", () => {
    render(<Home />);
    expect(screen.getAllByText("Skills").length > 0).toBe(true);
    expect(screen.getAllByText("Stacks").length > 0).toBe(true);
    expect(screen.getAllByText("Cases").length > 0).toBe(true);
    expect(screen.getAllByText("Contato").length > 0).toBe(true);
  });

  it("renders skills section with all specialties", () => {
    render(<Home />);
    expect(screen.getByText("Especialidades")).toBeTruthy();
    expect(screen.getByText("Inteligência Artificial")).toBeTruthy();
    expect(screen.getByText("RPA & Automação")).toBeTruthy();
    expect(screen.getByText("Web Backend & APIs")).toBeTruthy();
    expect(screen.getAllByText("Banco de Dados").length > 0).toBe(true);
    expect(screen.getByText("Front-end & Interfaces")).toBeTruthy();
    expect(screen.getByText("DevOps & Infraestrutura")).toBeTruthy();
  });

  it("renders stacks section with technology categories", () => {
    render(<Home />);
    expect(screen.getByText("Stacks & Tecnologias")).toBeTruthy();
    expect(screen.getAllByText("Backend").length > 0).toBe(true);
    expect(screen.getAllByText("Frontend").length > 0).toBe(true);
    expect(screen.getAllByText("Databases").length > 0).toBe(true);
    expect(screen.getAllByText("Automação").length > 0).toBe(true);
    expect(screen.getAllByText("DevOps").length > 0).toBe(true);
    expect(screen.getAllByText("IA/ML").length > 0).toBe(true);
  });

  it("renders cases section with project examples", () => {
    render(<Home />);
    expect(screen.getByText("Projetos & Cases")).toBeTruthy();
    expect(screen.getByText("RPA Hospitalar Completo")).toBeTruthy();
    expect(screen.getByText("Plataforma de Vídeos com IA")).toBeTruthy();
    expect(screen.getByText("Sistema de Loja para Ragnarok")).toBeTruthy();
  });

  it("renders contact section with form", () => {
    render(<Home />);
    expect(screen.getByText("Entre em Contato")).toBeTruthy();
    expect(screen.getByPlaceholderText("Seu nome")).toBeTruthy();
    expect(screen.getByPlaceholderText("seu@email.com")).toBeTruthy();
    expect(screen.getByPlaceholderText("Conte-me sobre seu projeto...")).toBeTruthy();
  });

  it("handles form submission correctly", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const nameInput = screen.getByPlaceholderText("Seu nome");
    const emailInput = screen.getByPlaceholderText("seu@email.com");
    const messageInput = screen.getByPlaceholderText("Conte-me sobre seu projeto...");
    const submitButton = screen.getByText("Enviar Mensagem");

    await user.type(nameInput, "Test User");
    await user.type(emailInput, "test@example.com");
    await user.type(messageInput, "Test message");
    await user.click(submitButton);

    // Check if success message appears
    expect(screen.getByText(/Mensagem enviada com sucesso/)).toBeTruthy();

    // Check if form is cleared
    expect((nameInput as HTMLInputElement).value).toBe("");
    expect((emailInput as HTMLInputElement).value).toBe("");
    expect((messageInput as HTMLTextAreaElement).value).toBe("");
  });

  it("renders footer with links", () => {
    render(<Home />);
    const footerHeadings = screen.getAllByText("Jonata Pontes");
    expect(footerHeadings.length > 0).toBe(true);
    expect(screen.getByText(/Full-Stack Developer & RPA Specialist/)).toBeTruthy();
    expect(screen.getByText(/Todos os direitos reservados/)).toBeTruthy();
  });

  it("renders social media links", () => {
    render(<Home />);
    const githubLinks = screen.queryAllByText(/GitHub/);
    const linkedinLinks = screen.queryAllByText(/LinkedIn/);
    const emailLinks = screen.queryAllByText(/Email/);
    const totalLinks = githubLinks.length + linkedinLinks.length + emailLinks.length;
    expect(totalLinks > 0).toBe(true);
  });

  it("contains all required technology tags", () => {
    render(<Home />);
    expect(screen.getAllByText("Python").length > 0).toBe(true);
    expect(screen.getAllByText("React").length > 0).toBe(true);
    expect(screen.getAllByText("Node.js").length > 0).toBe(true);
    expect(screen.getAllByText("FastAPI").length > 0).toBe(true);
    expect(screen.getAllByText("PostgreSQL").length > 0).toBe(true);
  });
});
