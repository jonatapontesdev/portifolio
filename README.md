# JP Digital Solutions - Portfólio Profissional

Portfólio digital moderno com landing page, portfólio interativo, dashboard de usuário e formulário de contato.

## 🚀 Quick Start

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev
```

Acesse: `http://localhost:3000`

## 🛠️ Stack

- **Frontend:** React 19 + TypeScript + Tailwind CSS
- **Backend:** Express + tRPC
- **Database:** MySQL + Drizzle ORM
- **Auth:** Manus OAuth
- **Email:** Nodemailer

## 📁 Estrutura

```
├── client/          # Frontend React
├── server/          # Backend Express + tRPC
├── drizzle/         # Database schema & migrations
└── shared/          # Código compartilhado
```

## 🌐 Funcionalidades

- ✅ Landing page com hero section
- ✅ Portfólio com filtros por categoria
- ✅ Dashboard de usuário autenticado
- ✅ Formulário de contato com envio de e-mails
- ✅ Tema escuro/claro switchável
- ✅ Responsivo para mobile

## 📧 Configurar E-mails

Crie um arquivo `.env.local` com:

```
DATABASE_URL=mysql://user:password@localhost:3306/jp_digital
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_app_password
OWNER_EMAIL=seu_email@jpdigital.com
```

## 📝 Comandos

```bash
pnpm dev              # Desenvolvimento
pnpm build            # Build para produção
pnpm db:push          # Aplicar migrations
pnpm test             # Rodar testes
```

## 👨‍💻 Autor

**Jonata Pontes**  
[GitHub](https://github.com/jonatapontesdev)

---

**Versão:** 1.0 | **Última Atualização:** Novembro 2025
