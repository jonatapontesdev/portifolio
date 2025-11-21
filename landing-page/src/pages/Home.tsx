import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ExternalLink, Code2, Zap, Database, Globe, Brain, Cpu } from "lucide-react";
import { useState } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Home() {
  const { displayedText, isComplete } = useTypewriter({
    text: "Jonata Pontes",
    speed: 80,
    delay: 300,
  });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const skills = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Criação de roteiros, imagens e vídeos com IA. Geração automatizada de vídeos curtos com corte, legendas e hashtags.",
      techs: ["ChatGPT", "DALL·E", "Whisper", "OpenAI API", "LSTM", "RL"]
    },
    {
      icon: Zap,
      title: "RPA & Automação",
      description: "Desenvolvimento de automações completas com Python, Node.js e C#. Execução automatizada de fluxos com logs e múltiplos usuários.",
      techs: ["Python", "Selenium", "Puppeteer", "C#", "Node.js"]
    },
    {
      icon: Code2,
      title: "Web Backend & APIs",
      description: "Criação de sistemas completos com Laravel, Django, FastAPI e Node.js. APIs REST robustas com integrações complexas.",
      techs: ["Laravel", "Django", "FastAPI", "Express", "Flask"]
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Modelagem avançada e otimização de performance. Experiência com MySQL, PostgreSQL, Oracle e SQLite.",
      techs: ["MySQL", "PostgreSQL", "Oracle", "SQLite", "ORM"]
    },
    {
      icon: Globe,
      title: "Front-end & Interfaces",
      description: "Landing pages modernas, dashboards administrativos e SPAs. Bootstrap, Vue.js, React e Tailwind.",
      techs: ["React", "Vue.js", "Bootstrap", "Tailwind", "Next.js"]
    },
    {
      icon: Cpu,
      title: "DevOps & Infraestrutura",
      description: "Gerenciamento de servidores, deploy de APIs e versionamento Git. Scripts Bash e automação de ambientes.",
      techs: ["Git", "Bash", "AlmaLinux", "Docker", "CI/CD"]
    }
  ];

  const stacks = [
    { category: "Backend", items: ["Python", "Node.js", "PHP", "Laravel", "Django", "FastAPI", "C#"] },
    { category: "Frontend", items: ["React", "Vue.js", "JavaScript", "Bootstrap", "Tailwind", "Next.js"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "SQLite", "MariaDB"] },
    { category: "Automação", items: ["Selenium", "Puppeteer", "FFmpeg", "Whisper", "OpenAI"] },
    { category: "DevOps", items: ["Git", "Bash", "Docker", "AlmaLinux", "Webhooks"] },
    { category: "IA/ML", items: ["LSTM", "RL", "Prompt Engineering", "ChatGPT", "DALL·E"] }
  ];

  const cases = [
    {
      title: "RPA Hospitalar Completo",
      description: "Sistema de automação para hospitais e operadoras médicas. Integração com portais complexos, emissão de notas e auditoria financeira.",
      tags: ["Python", "Selenium", "RPA", "Healthcare"],
      impact: "Reduziu processamento manual em 80%"
    },
    {
      title: "Plataforma de Vídeos com IA",
      description: "Sistema completo de geração automatizada de vídeos curtos a partir de vídeos longos. Corte inteligente, legendas e hashtags com IA.",
      tags: ["Python", "FFmpeg", "OpenAI", "FastAPI"],
      impact: "Produção de 50+ vídeos/dia automaticamente"
    },
    {
      title: "Sistema de Loja para Ragnarok",
      description: "Desenvolvimento completo de loja (market) com ranking, histórico e filtros. Customização de NPCs e eventos personalizados.",
      tags: ["PHP", "MySQL", "eAthena", "JavaScript"],
      impact: "Gerou receita recorrente para servidor"
    },
    {
      title: "Dashboard de Auditoria Financeira",
      description: "Visualizador de logs e dados para análise de divergências. Comparação entre pastas e conciliação automatizada.",
      tags: ["React", "Python", "PostgreSQL", "Pandas"],
      impact: "Identificou inconsistências em tempo real"
    },
    {
      title: "Integração com APIs Médicas",
      description: "Integração com portais governamentais e APIs SOAP/XML. Consultas de elegibilidade e emissão de notas com padrão ANS.",
      tags: ["Node.js", "SOAP", "XML", "REST"],
      impact: "Processou 10k+ transações/mês"
    },
    {
      title: "Sistema de Análise Financeira com RL",
      description: "Plataforma de análise financeira com agentes de aprendizagem por reforço para prever fechamento de velas (trade/finance).",
      tags: ["Python", "LSTM", "RL", "FastAPI"],
      impact: "Modelo com 75%+ de acurácia"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            JP
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#stacks" className="hover:text-primary transition-colors">Stacks</a>
            <a href="#cases" className="hover:text-primary transition-colors">Cases</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        <div className="container relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight min-h-[1.2em]">
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full-Stack Developer • RPA Specialist • AI Enthusiast
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Especialista em soluções completas: automação robótica, desenvolvimento backend robusto, integrações complexas e inteligência artificial aplicada. Transformo desafios em código.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Ver Meus Projetos
            </Button>
            <Button size="lg" variant="outline">
              Entrar em Contato
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a href="#" className="p-3 rounded-full bg-card hover:bg-accent/20 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-full bg-card hover:bg-accent/20 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 rounded-full bg-card hover:bg-accent/20 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/30">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Especialidades</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Domínio profundo em múltiplas áreas de desenvolvimento e automação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <Card key={idx} className="p-6 bg-background border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {skill.techs.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stacks Section */}
      <section id="stacks" className="py-20">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Stacks & Tecnologias</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ferramentas e tecnologias que domino para criar soluções robustas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stacks.map((stack, idx) => (
              <Card key={idx} className="p-6 bg-background border-border hover:border-accent/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-accent">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, i) => (
                    <span key={i} className="px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-accent/50 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-card/30">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Projetos & Cases</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções reais que transformaram processos e geraram resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="p-6 bg-background border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold flex-1">{caseItem.title}</h3>
                    <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground">{caseItem.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-accent font-semibold">{caseItem.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Entre em Contato</h2>
              <p className="text-muted-foreground text-lg">
                Vamos conversar sobre seu próximo projeto
              </p>
            </div>

            <Card className="p-8 bg-background border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nome</label>
                    <Input
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensagem</label>
                  <Textarea
                    placeholder="Conte-me sobre seu projeto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-card border-border min-h-32 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Enviar Mensagem
                </Button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-primary/20 border border-primary/50 text-primary text-center">
                    ✓ Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </div>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Jonata Pontes</h3>
              <p className="text-muted-foreground">Full-Stack Developer & RPA Specialist</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#cases" className="hover:text-primary transition-colors">Projetos</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Email</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Jonata Pontes. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
