# JP Digital Solutions - Portfólio Profissional

**Marca:** JP Digital Solutions  
**Proprietário:** Jonata Pontes  
**Desde:** 2023  
**Tecnologia:** React 19 + Express + tRPC + MySQL + Tailwind CSS

---

## 📋 Visão Geral

Site profissional completo para a marca **JP Digital Solutions**, apresentando serviços de automação, inteligência artificial, edição de vídeos, desenvolvimento web e integrações com APIs. O projeto inclui landing page, portfólio, autenticação de usuários, dashboard e painel de gerenciamento.

---

## 🎨 Design

### Paleta de Cores

| Elemento | Cor | Hex | Uso |
|----------|-----|-----|-----|
| Roxo Escuro (Primário) | ![#2D1B69](https://via.placeholder.com/20/2D1B69/2D1B69) | `#2D1B69` | Fundo principal, headers |
| Azul Escuro (Secundário) | ![#1A3A52](https://via.placeholder.com/20/1A3A52/1A3A52) | `#1A3A52` | Seções secundárias |
| Roxo Claro (Destaque) | ![#7C3AED](https://via.placeholder.com/20/7C3AED/7C3AED) | `#7C3AED` | Botões, destaque |
| Azul Claro (Accent) | ![#3B82F6](https://via.placeholder.com/20/3B82F6/3B82F6) | `#3B82F6` | Links, accent |
| Branco | ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF) | `#FFFFFF` | Texto principal |

### Tipografia

- **Font Principal:** Inter, Segoe UI, sans-serif
- **Headings:** Bold, 2rem a 3.5rem
- **Body:** Regular, 1rem
- **Small:** Regular, 0.875rem

---

## 📁 Estrutura do Projeto

```
jp-digital-portfolio/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   └── NotFound.tsx
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── const.ts
│   │   └── index.css
│   └── public/
├── server/
│   ├── routers.ts
│   ├── db.ts
│   └── _core/
├── drizzle/
│   ├── schema.ts
│   └── migrations/
├── shared/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Funcionalidades

### Landing Page
- Hero section com CTA
- Serviços em destaque (6 serviços: IA, Automação, Web, Dados, Integrações, Processamento)
- Seção "Sobre" com apresentação pessoal
- Portfólio com projetos recentes
- **Formulário de Contato** com validação e envio de e-mails
- CTA final para ação

### Portfólio
- Grid de projetos com filtros por categoria
- Categorias: IA & Vídeos, Automação, Web, Dados
- Detalhes de cada projeto
- Responsivo e interativo

### Autenticação
- Login com Manus OAuth
- Middleware de autenticação
- Sessões seguras

### Dashboard
- Bem-vindo personalizado
- Estatísticas (projetos, visualizações, curtidas)
- Gerenciamento de projetos
- Acesso rápido a configurações

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| React | 19 | Frontend framework |
| Express | 4 | Backend framework |
| tRPC | 11 | API layer |
| MySQL | 5.7+ | Banco de dados |
| Tailwind CSS | 4 | Framework CSS |
| Drizzle ORM | - | Database ORM |
| Node.js | 18+ | Runtime |

---

## 📦 Instalação

### Pré-requisitos
- Node.js 18+
- pnpm ou npm
- MySQL 5.7+

### Passos

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/jonatapontesdev/portifolio.git
   cd jp-digital-portfolio
   ```

2. **Instalar dependências**
   ```bash
   pnpm install
   ```

3. **Configurar banco de dados**
   ```bash
   pnpm db:push
   ```

4. **Iniciar servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

   Acesse: `http://localhost:3000`

---

## 🚀 Deployment

Para instruções detalhadas de deployment em ambiente de produção, consulte o arquivo **`DEPLOYMENT.md`**.

**Resumo dos passos:**

1. Preparar variáveis de ambiente para produção
2. Build dos assets (`pnpm build`)
3. Executar migrações (`pnpm db:push`)
4. Deploy em servidor (Vercel, Heroku, etc.)

---

## 📄 Páginas

### Públicas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page |
| `/portfolio` | Página de portfólio |

### Autenticadas

| Rota | Descrição |
|------|-----------|
| `/dashboard` | Dashboard do usuário |

---

## 🔐 Autenticação

O projeto utiliza **Manus OAuth** para autenticação. Funcionalidades incluem:

- Login com Manus OAuth
- Middleware de autenticação
- Sessões seguras com cookies HTTP-only

---

## 📊 Banco de Dados

### Tabelas Principais

**users**
- id (PK)
- openId (UNIQUE)
- name
- email
- loginMethod
- role (user | admin)
- createdAt
- updatedAt
- lastSignedIn

**projects**
- id (PK)
- userId (FK)
- title
- description
- category
- imageUrl
- createdAt
- updatedAt

**contacts**
- id (PK)
- name
- email
- phone
- subject
- message
- status (novo | respondido | arquivado)
- createdAt
- updatedAt

---

## 🎯 Serviços Apresentados

1. **IA & Vídeos** - Geração automática de vídeos, edição profissional, roteiros inteligentes
2. **Automação** - Selenium RPA, bots inteligentes, integração com APIs
3. **Desenvolvimento Web** - Django, Laravel, Flask, Node.js, React
4. **Análise de Dados** - Processamento avançado, aprendizagem por reforço
5. **Integrações** - APIs externas, TikTok, YouTube, sistemas de pagamento
6. **Processamento de Vídeos** - Edição em lote, efeitos, transições

---

## 🔧 Configuração

### Variu00e1veis de Ambiente

```env
# Database
DATABASE_URL=mysql://usuario:senha@localhost:3306/jp_digital

# Application
VITE_APP_TITLE=JP Digital Solutions
VITE_APP_ID=seu_app_id
VITE_OAUTH_PORTAL_URL=https://auth.manus.im
OAUTH_SERVER_URL=https://api.manus.im

# Email Configuration (para formulario de contato)
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_de_app
EMAIL_FROM=noreply@jpdigital.com
OWNER_EMAIL=jonata@jpdigital.com
```

**Nota:** Para Gmail, use uma [Senha de App](https://support.google.com/accounts/answer/185833) em vez de sua senha regular.
---

## 📝 Desenvolvimento

### Adicionar Nova Página

1. Criar componente em `client/src/pages/`
2. Adicionar rota em `client/src/App.tsx`
3. Adicionar link na navegação (se necessário)

### Adicionar Novo Serviço

1. Editar `client/src/const.ts` (array SERVICES)
2. Atualizar `client/src/pages/Home.tsx`
3. Atualizar documentação

### Customizar Cores

Edite `client/src/index.css` na seção `:root` para alterar as cores CSS.

---

## 🐛 Troubleshooting

### Erro de conexão com banco de dados
- Verifique se MySQL está rodando
- Verifique credenciais em `.env`
- Execute `pnpm db:push` para criar tabelas

### Erro de autenticação
- Verifique `VITE_APP_ID` e `OAUTH_SERVER_URL`
- Limpe cookies do navegador
- Verifique logs no console

---

## 📚 Documentação Adicional

- `DESIGN_GUIDE.md` - Guia completo de design
- `DEPLOYMENT.md` - Guia de deployment em produção

---

## 📞 Contato

**Jonata Pontes**  
GitHub: [@jonatapontesdev](https://github.com/jonatapontesdev)  
Email: [seu-email@exemplo.com]

---

## 📄 Licença

Este projeto é de propriedade de JP Digital Solutions. Todos os direitos reservados.

---

**Versão:** 1.0  
**Data de Criação:** Novembro 2025  
**Última Atualização:** Novembro 2025
