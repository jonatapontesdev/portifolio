import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { APP_TITLE, getLoginUrl, SERVICES } from "@/const";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();
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
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <span className="text-sm hidden sm:inline">Ola, {user?.name}</span>
                <Button variant="outline" size="sm" onClick={logout}>
                  Sair
                </Button>
              </>
            ) : (
              <Button size="sm" onClick={() => (window.location.href = getLoginUrl())}>
                Entrar
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforme sua visao em realidade com tecnologia
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Automatizacao inteligente, videos com IA, desenvolvimento web e muito mais. Solucoes completas para impulsionar seu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
                Conhecer Servicos <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Servicos</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Oferecemos solucoes completas em tecnologia, desde automacao inteligente ate desenvolvimento web profissional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Card key={service.id} className="p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre JP Digital Solutions</h2>
              <p className="text-muted-foreground mb-4">
                Desde 2023, ajudamos empresas a transformar suas operacoes atraves de tecnologia inteligente e inovadora.
              </p>
              <p className="text-muted-foreground mb-6">
                Nosso time especializado em IA, automacao e desenvolvimento web trabalha para entregar solucoes que realmente fazem diferenca.
              </p>
              <Button>Saiba Mais</Button>
            </div>
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <span className="text-muted-foreground">Foto do fundador</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos Recentes</h2>
          <p className="text-muted-foreground mb-12">
            Veja alguns dos projetos que desenvolvemos para nossos clientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <span className="text-muted-foreground">Projeto {i}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">Projeto {i}</h3>
                  <p className="text-sm text-muted-foreground">Descricao do projeto</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Ver Todos os Projetos
            </Button>
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
          <Button size="lg" variant="secondary">
            Entrar em Contato
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">JP Digital Solutions</h4>
              <p className="text-sm text-muted-foreground">
                Transformando ideias em solucoes tecnologicas.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">IA & Videos</a></li>
                <li><a href="#" className="hover:text-foreground transition">Automacao</a></li>
                <li><a href="#" className="hover:text-foreground transition">Web</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 JP Digital Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
