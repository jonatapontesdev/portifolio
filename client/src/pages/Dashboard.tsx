import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Eye, Heart, LogOut } from "lucide-react";
import { useLocation } from "wouter";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogout = async () => {
    await logout();
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Bem-vindo, {user?.name}!</h1>
          <p className="text-muted-foreground">Gerencie seu portfolio e configuracoes aqui.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Projetos</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary opacity-50" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Visualizacoes</p>
                <p className="text-3xl font-bold">2.4K</p>
              </div>
              <Eye className="w-8 h-8 text-primary opacity-50" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Curtidas</p>
                <p className="text-3xl font-bold">156</p>
              </div>
              <Heart className="w-8 h-8 text-primary opacity-50" />
            </div>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Meus Projetos</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Projeto</th>
                  <th className="text-left py-3 px-4 font-semibold">Categoria</th>
                  <th className="text-left py-3 px-4 font-semibold">Data</th>
                  <th className="text-left py-3 px-4 font-semibold">Acoes</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/50 transition">
                    <td className="py-3 px-4">Projeto {i}</td>
                    <td className="py-3 px-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Web
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {new Date(2025, 0, i).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        Editar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6">
            <h3 className="font-bold mb-4">Adicionar Novo Projeto</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Compartilhe seu trabalho com o mundo.
            </p>
            <Button>Novo Projeto</Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-4">Configuracoes da Conta</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Atualize suas informacoes pessoais.
            </p>
            <Button variant="outline">Editar Perfil</Button>
          </Card>
        </div>

        {/* Logout Button */}
        <div className="flex justify-end">
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
}
