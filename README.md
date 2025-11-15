# JP Digital Solutions - Portfólio Profissional

**Marca:** JP Digital Solutions  
**Proprietário:** Jonata Pontes  
**Desde:** 2023  
**Tecnologia:** Laravel 11 + Bootstrap 5 + Blade Templates

---

## 📋 Visão Geral

Site profissional completo para a marca **JP Digital Solutions**, apresentando serviços de automação, inteligência artificial, edição de vídeos, desenvolvimento web e integrações com APIs. O projeto inclui landing page, portfólio, autenticação de usuários, dashboard e painel de gerenciamento.

---

## 🎨 Design

### Paleta de Cores

| Elemento | Cor | Hex | RGB |
|----------|-----|-----|-----|
| Roxo Escuro (Primário) | ![#2D1B69](https://via.placeholder.com/20/2D1B69/2D1B69) | `#2D1B69` | rgb(45, 27, 105) |
| Azul Escuro (Secundário) | ![#1A3A52](https://via.placeholder.com/20/1A3A52/1A3A52) | `#1A3A52` | rgb(26, 58, 82) |
| Roxo Claro (Destaque) | ![#7C3AED](https://via.placeholder.com/20/7C3AED/7C3AED) | `#7C3AED` | rgb(124, 58, 237) |
| Azul Claro (Accent) | ![#3B82F6](https://via.placeholder.com/20/3B82F6/3B82F6) | `#3B82F6` | rgb(59, 130, 246) |
| Branco | ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF) | `#FFFFFF` | rgb(255, 255, 255) |

### Tipografia

- **Font Principal:** Inter, Segoe UI, sans-serif
- **Headings:** Bold, 2rem a 3.5rem
- **Body:** Regular, 1rem
- **Small:** Regular, 0.875rem

---

## 📁 Estrutura do Projeto

```
portifolio/
├── app/
│   ├── Http/Controllers/
│   │   ├── HomeController.php
│   │   ├── PortfolioController.php
│   │   └── DashboardController.php
│   ├── Models/
│   │   └── User.php
│   └── ...
├── resources/
│   ├── views/
│   │   ├── layouts/
│   │   │   └── app.blade.php
│   │   ├── pages/
│   │   │   ├── home.blade.php
│   │   │   ├── portfolio.blade.php
│   │   │   ├── login.blade.php
│   │   │   ├── register.blade.php
│   │   │   ├── dashboard.blade.php
│   │   │   └── profile.blade.php
│   │   ├── components/
│   │   │   ├── navbar.blade.php
│   │   │   └── footer.blade.php
│   │   ├── css/
│   │   │   └── app.css
│   │   └── js/
│   │       └── app.js
│   └── ...
├── routes/
│   └── web.php
├── public/
│   ├── index.php
│   ├── .htaccess
│   ├── css/
│   ├── js/
│   └── images/
├── .htaccess
├── .env
├── artisan
├── composer.json
├── package.json
└── vite.config.js
```

---

## 🚀 Funcionalidades

### Landing Page
- Hero section com CTA
- Serviços em destaque (IA, Automação, Desenvolvimento Web)
- Seção "Sobre" com apresentação pessoal
- Portfólio com projetos recentes
- CTA final para ação

### Portfólio
- Grid de projetos com filtros
- Categorias: IA & Vídeos, Automação, Web, Dados
- Upload de previews (imagem, vídeo, screenshot)
- Detalhes de cada projeto

### Autenticação
- Login com email e senha
- Registro de novos usuários
- Recuperação de senha
- Middleware de autenticação

### Dashboard
- Bem-vindo personalizado
- Estatísticas (projetos, visualizações, curtidas)
- Gerenciamento de projetos
- Acesso rápido a configurações

### Perfil do Usuário
- Edição de informações pessoais
- Alteração de senha
- Autenticação em dois fatores
- Gerenciamento de sessões
- Opção de deletar conta

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| Laravel | 11 | Framework backend |
| Bootstrap | 5 | Framework CSS |
| Blade | - | Template engine |
| Vite | 5 | Build tool |
| PHP | 8.1+ | Linguagem backend |
| MySQL | 5.7+ | Banco de dados |
| Composer | 2.x | Gerenciador de pacotes PHP |
| npm | - | Gerenciador de pacotes JS |

---

## 📦 Instalação

### Pré-requisitos
- PHP 8.1 ou superior
- Composer
- Node.js e npm
- MySQL 5.7 ou superior

### Passos

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/jonatapontesdev/portifolio.git
   cd portifolio
   ```

2. **Instalar dependências PHP**
   ```bash
   composer install
   ```

3. **Instalar dependências JavaScript**
   ```bash
   npm install
   ```

4. **Configurar arquivo .env**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configurar banco de dados**
   - Edite `.env` com suas credenciais MySQL
   - Execute: `php artisan migrate`

6. **Build dos assets**
   ```bash
   npm run build
   ```

7. **Iniciar servidor de desenvolvimento**
   ```bash
   php artisan serve
   ```

   Acesse: `http://localhost:8000`

---

## 🚀 Deployment

### Hospedagem em public_html (cPanel)

Consulte o arquivo `DEPLOYMENT.md` para instruções completas de deployment em ambiente de produção com cPanel.

**Resumo rápido:**

1. Clone o repositório em `public_html/`
2. Execute `composer install --no-dev --optimize-autoloader`
3. Execute `npm install && npm run build`
4. Configure permissões: `chmod -R 755 storage bootstrap/cache`
5. Execute `php artisan key:generate`
6. Configure `.env` com credenciais de produção
7. Execute `php artisan migrate --force`
8. Execute `php artisan config:cache && php artisan route:cache`

---

## 📄 Páginas

### Públicas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page |
| `/portfolio` | Página de portfólio |
| `/login` | Página de login |
| `/register` | Página de registro |

### Autenticadas

| Rota | Descrição |
|------|-----------|
| `/dashboard` | Dashboard do usuário |
| `/profile` | Perfil do usuário |

---

## 🔐 Autenticação

O projeto utiliza **Laravel Breeze** para autenticação. Funcionalidades incluem:

- Login com email e senha
- Registro de novos usuários
- Recuperação de senha por email
- Middleware de autenticação
- Sessões seguras com cookies HTTP-only

---

## 📊 Banco de Dados

### Tabelas Principais

**users**
- id (PK)
- name
- email (UNIQUE)
- password
- email_verified_at
- created_at
- updated_at

**Extensível para:**
- projects
- project_previews
- services
- etc.

---

## 🎯 Serviços Apresentados

1. **IA & Vídeos**
   - Geração automática de vídeos
   - Edição profissional
   - Roteiros inteligentes
   - Integração TikTok/YouTube

2. **Automação**
   - Selenium RPA
   - Bots inteligentes
   - Integração com APIs
   - Fila de processamento

3. **Desenvolvimento Web**
   - Django, Laravel, Flask, Node.js
   - React, Bootstrap, FastAPI
   - Sistemas escaláveis

4. **Análise de Dados**
   - Processamento avançado
   - Aprendizagem por reforço
   - Visualizações

5. **Integrações**
   - APIs externas
   - TikTok, YouTube
   - Sistemas de pagamento

6. **Processamento de Vídeos**
   - Edição em lote
   - Efeitos e transições
   - Otimização para plataformas

---

## 🎨 Componentes

### Navbar
- Logo com ícone
- Menu de navegação responsivo
- Botões de login/dashboard
- Menu hamburger em mobile

### Cards de Serviço
- Ícone + Título + Descrição
- Efeito hover com elevação
- Cores alternadas

### Footer
- Links úteis
- Redes sociais
- Informações de contato
- Copyright

### Formulários
- Inputs customizados
- Labels acima dos campos
- Validação em tempo real
- Mensagens de erro

---

## 🔧 Configuração

### Variáveis de Ambiente (.env)

```env
APP_NAME="JP Digital Solutions"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://seu-dominio.com

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=seu_banco
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha

MAIL_MAILER=smtp
MAIL_HOST=seu_smtp
MAIL_PORT=587
MAIL_USERNAME=seu_email
MAIL_PASSWORD=sua_senha
MAIL_ENCRYPTION=tls
```

---

## 📝 Desenvolvimento

### Adicionar Nova Página

1. Criar view em `resources/views/pages/`
2. Criar controller em `app/Http/Controllers/`
3. Adicionar rota em `routes/web.php`
4. Adicionar link na navbar (se necessário)

### Adicionar Novo Serviço

1. Editar `resources/views/pages/home.blade.php`
2. Adicionar card na seção de serviços
3. Atualizar `DESIGN_GUIDE.md`

### Customizar Cores

Edite `resources/css/app.css` na seção `:root` para alterar as cores CSS.

---

## 🐛 Troubleshooting

### Erro 500
- Verifique permissões de `storage/` e `bootstrap/cache/`
- Verifique logs em `storage/logs/laravel.log`
- Execute `php artisan config:cache`

### Erro 404
- Verifique se o `.htaccess` está configurado
- Verifique se `mod_rewrite` está ativado
- Limpe o cache de rotas: `php artisan route:cache`

### Banco de dados não conecta
- Verifique credenciais em `.env`
- Verifique se MySQL está rodando
- Verifique permissões do usuário MySQL

---

## 📚 Documentação Adicional

- `DESIGN_GUIDE.md` - Guia completo de design
- `DEPLOYMENT.md` - Guia de deployment em produção
- `TODO.md` - Checklist de funcionalidades

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
