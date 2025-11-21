import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Sistema de Automacao RPA",
    category: "automacao",
    description: "Automacao de processos com Selenium para empresa de logistica",
    image: "https://placehold.co/400x300/2D1B69/FFFFFF?text=Projeto+1",
  },
  {
    id: 2,
    title: "Geracao de Videos com IA",
    category: "ia-videos",
    description: "Plataforma de geracao automatica de videos para redes sociais",
    image: "https://placehold.co/400x300/7C3AED/FFFFFF?text=Projeto+2",
  },
  {
    id: 3,
    title: "Dashboard Web Interativo",
    category: "web",
    description: "Dashboard de analytics com React e Node.js",
    image: "https://placehold.co/400x300/1A3A52/FFFFFF?text=Projeto+3",
  },
  {
    id: 4,
    title: "Analise de Dados em Tempo Real",
    category: "dados",
    description: "Pipeline de processamento de dados com Python e ML",
    image: "https://placehold.co/400x300/3B82F6/FFFFFF?text=Projeto+4",
  },
  {
    id: 5,
    title: "Integracao com APIs Externas",
    category: "integracao",
    description: "Sistema de integracao com TikTok, YouTube e Stripe",
    image: "https://placehold.co/400x300/2D1B69/FFFFFF?text=Projeto+5",
  },
  {
    id: 6,
    title: "Edicao de Videos em Lote",
    category: "videos",
    description: "Ferramenta de edicao automatica com efeitos e transicoes",
    image: "https://placehold.co/400x300/7C3AED/FFFFFF?text=Projeto+6",
  },
  {
    id: 7,
    title: "Plataforma E-commerce",
    category: "web",
    description: "E-commerce completo com Laravel e Bootstrap",
    image: "https://placehold.co/400x300/1A3A52/FFFFFF?text=Projeto+7",
  },
  {
    id: 8,
    title: "Bot de Automacao Inteligente",
    category: "automacao",
    description: "Bot para automacao de tarefas repetitivas",
    image: "https://placehold.co/400x300/3B82F6/FFFFFF?text=Projeto+8",
  },
];

const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "ia-videos", label: "IA & Videos" },
  { id: "automacao", label: "Automacao" },
  { id: "web", label: "Web" },
  { id: "dados", label: "Dados" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredProjects =
    selectedCategory === "todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <div className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosso Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Conheca os projetos que desenvolvemos para nossos clientes.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="py-8 border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 flex-1">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition cursor-pointer group"
              >
                <div className="relative overflow-hidden bg-muted h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-primary mb-2 uppercase">
                    {CATEGORIES.find((c) => c.id === project.category)?.label}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" size="sm">
                    Ver Detalhes
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-card border-t border-border">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Tem um projeto em mente?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos ajudar seu negocio a crescer.
          </p>
          <Button size="lg">Solicitar Orcamento</Button>
        </div>
      </section>
    </div>
  );
}
