import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_TITLE, SERVICES } from "@/const";
import { ArrowRight, Github, Linkedin, Mail, Code2, Zap, Cpu, Rocket } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">
              JP
            </div>
            <span className="font-bold text-lg hidden sm:inline">{APP_TITLE}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm hover:text-primary transition">
              Servicos
            </a>
            <a href="#portfolio" className="text-sm hover:text-primary transition">
              Portfolio
            </a>
            <a href="#sobre" className="text-sm hover:text-primary transition">
              Sobre
            </a>
            <a href="#contato" className="text-sm hover:text-primary transition">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-40 bg-gradient-to-br from-primary via-primary/80 to-background text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">Jonata Pontes - Desenvolvedor Full Stack</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-6 leading-tight">
              Automação com IA, RPA e Processamento de Vídeos
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Crio soluções completas que vão da camada visual ao processamento profundo com IA, com foco em automação de tarefas, integrações complexas e desenvolvimento web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
                Conheça minhas skills <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver meus projetos
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2"><Code2 className="w-4 h-4" /> React + TypeScript</div>
              <div className="flex items-center gap-2"><Cpu className="w-4 h-4" /> tRPC + Express</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> MySQL + Drizzle</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 bg-card/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Competências</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Crio soluções completas — da camada visual ao processamento profundo com IA.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition duration-300 group cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">🧠</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">Inteligência Artificial</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Criação de roteiros, imagens e vídeos com IA, modelos LSTM, pipelines de treino e validação, e construção de prompts avançados.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition duration-300 group cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">🤖</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">RPA - Robotic Process Automation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Desenvolvimento de automações completas em Python, Node.js e C#, com extração de dados, leitura de planilhas e navegação multi-janela.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg hover:border-primary/50 transition duration-300 group cursor-pointer">
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">🎥</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">Processamento de Vídeos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Sistema completo de corte automático de vídeos com IA, geração de vídeos do zero, e uso de FFmpeg, Whisper, DALL·E e OpenAI GPT.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-muted-foreground mb-4">
                Sou um desenvolvedor e automador full stack com forte foco em RPA, IA, backend, automação de tarefas, processamento de vídeos, sistemas web, integrações complexas e aprendizagem contínua.
              </p>
              <p className="text-muted-foreground mb-6">
                Atuo criando soluções completas — da camada visual ao processamento profundo com IA. Trabalho com projetos robustos envolvendo Python, Node.js, Laravel, Django, FastAPI, C#, Selenium, Integrações financeiras, automação de servidores e inteligência artificial aplicada.
              </p>
              <Button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>Entre em contato</Button>
            </div>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <span className="text-muted-foreground">Sua foto aqui</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos que Costumo Desenvolver</h2>
          <p className="text-muted-foreground mb-12">
            Abaixo alguns exemplos dos tipos de projetos que desenvolvo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition">
              <div className="bg-muted h-48 flex items-center justify-center">
                <span className="text-muted-foreground">Sistema Full-Stack</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Sistemas Full-Stack Completos</h3>
                <p className="text-sm text-muted-foreground">Front-end, back-end e banco de dados, com dashboards administrativos avançados.</p>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition">
              <div className="bg-muted h-48 flex items-center justify-center">
                <span className="text-muted-foreground">Aplicações de IA</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Aplicações de IA para Mídias Sociais</h3>
                <p className="text-sm text-muted-foreground">Criação de vídeos automáticos a partir de texto para TikTok, YouTube e Instagram.</p>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition">
              <div className="bg-muted h-48 flex items-center justify-center">
                <span className="text-muted-foreground">RPA Profissional</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">RPA Profissional</h3>
                <p className="text-sm text-muted-foreground">Automação de processos empresariais, com integração com APIs de pagamento.</p>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Vamos Conversar</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Tem um projeto em mente? Preencha o formulario abaixo e entraremos em contato em breve.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para comeca?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Vamos trabalhar juntos para transformar sua visao em realidade.
          </p>
          <Button size="lg" variant="secondary" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
            Entrar em Contato
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Jonata Pontes</h4>
              <p className="text-sm text-muted-foreground">
                Desenvolvedor Full Stack e Automação
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Seções</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#servicos" className="hover:text-foreground transition">Skills</a></li>
                <li><a href="#portfolio" className="hover:text-foreground transition">Projetos</a></li>
                <li><a href="#sobre" className="hover:text-foreground transition">Sobre</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#contato" className="hover:text-foreground transition">Formulário de Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://github.com/jonatansp" className="text-muted-foreground hover:text-foreground transition" target="_blank">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/jonatansp/" className="text-muted-foreground hover:text-foreground transition" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:jonatansp@hotmail.com" className="text-muted-foreground hover:text-foreground transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Jonata Pontes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
