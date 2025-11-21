# 🚀 Como Rodar o Projeto JP Digital Solutions

## Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)
- MySQL rodando localmente ou remoto
- Git instalado

## Passos para Configurar

### 1. Clonar o Repositório
```bash
git clone https://github.com/jonatapontesdev/portifolio.git
cd portifolio
```

### 2. Instalar Dependências
```bash
pnpm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
DATABASE_URL=mysql://usuario:senha@localhost:3306/jp_digital
VITE_APP_TITLE=JP Digital Solutions
VITE_APP_ID=seu_app_id
VITE_OAUTH_PORTAL_URL=https://auth.manus.im
OAUTH_SERVER_URL=https://api.manus.im
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_de_app
EMAIL_FROM=noreply@jpdigital.com
OWNER_EMAIL=seu_email@jpdigital.com
JWT_SECRET=sua_chave_secreta_jwt
```

### 4. Criar o Banco de Dados

```bash
mysql -u root -p -e "CREATE DATABASE jp_digital CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

### 5. Executar Migrations

```bash
pnpm db:push
```

### 6. Iniciar o Servidor de Desenvolvimento

```bash
pnpm dev
```

O projeto estará disponível em: `http://localhost:3000`

## 📁 Estrutura do Projeto

```
├── client/              # Frontend React
│   ├── src/
│   │   ├── pages/      # Páginas (Home, Portfolio, Dashboard)
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── App.tsx     # Roteador principal
│   │   └── index.css   # Estilos globais
│   └── public/         # Assets estáticos
├── server/             # Backend Express + tRPC
│   ├── routers.ts      # Rotas tRPC
│   ├── db.ts           # Queries do banco
│   └── _core/          # Configurações core
├── drizzle/            # Schema e migrations
├── shared/             # Código compartilhado
└── package.json        # Dependências
```

## 🔧 Comandos Úteis

```bash
pnpm dev              # Desenvolvimento
pnpm build            # Build para produção
pnpm test             # Rodar testes
pnpm db:push          # Aplicar migrations
pnpm db:studio        # UI do banco de dados
pnpm lint             # Linting
```

## 🌐 Funcionalidades

- ✅ Landing page com hero section
- ✅ Portfólio com filtros por categoria
- ✅ Dashboard de usuário autenticado
- ✅ Formulário de contato com envio de e-mails
- ✅ Tema escuro/claro switchável
- ✅ Autenticação com Manus OAuth
- ✅ Banco de dados MySQL com Drizzle ORM

## 📝 Documentação

- `README.md` - Documentação principal
- `DESIGN_GUIDE.md` - Guia de design e cores
- `DEPLOYMENT.md` - Guia de deployment em produção

## 🐛 Troubleshooting

### Erro de conexão com banco de dados
```bash
mysql -u root -p -e "SELECT 1;"
```

### Erro de módulos não encontrados
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Porta 3000 já em uso
```bash
PORT=3001 pnpm dev
```

---

**Versão:** 1.0  
**Última Atualização:** Novembro 2025
