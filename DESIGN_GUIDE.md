# JP Digital Solutions - Guia de Design

## 📋 Informações Gerais
- **Marca:** JP Digital Solutions
- **Proprietário:** Jonata Pontes
- **Desde:** 2023
- **Foco:** Automação, IA, Edição de Vídeos, Desenvolvimento Web

---

## 🎨 Paleta de Cores

### Cores Primárias
| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| Roxo Escuro | `#2D1B69` | rgb(45, 27, 105) | Fundo principal, headers |
| Azul Escuro | `#1A3A52` | rgb(26, 58, 82) | Seções secundárias, cards |
| Roxo Claro | `#7C3AED` | rgb(124, 58, 237) | Botões, destaque, hover |
| Azul Claro | `#3B82F6` | rgb(59, 130, 246) | Links, accent secundário |

### Cores Neutras
| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| Branco | `#FFFFFF` | rgb(255, 255, 255) | Texto principal, backgrounds |
| Cinza Claro | `#F3F4F6` | rgb(243, 244, 246) | Backgrounds secundários |
| Cinza Médio | `#9CA3AF` | rgb(156, 163, 175) | Texto secundário |
| Cinza Escuro | `#374151` | rgb(55, 65, 81) | Borders, dividers |

### Cores de Destaque
| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| Verde | `#10B981` | rgb(16, 185, 129) | Sucesso, status ativo |
| Laranja | `#F97316` | rgb(249, 115, 22) | Aviso, destaque especial |
| Vermelho | `#EF4444` | rgb(239, 68, 68) | Erro, alerta |

---

## 📐 Estrutura de Páginas

### 1. **Landing Page (Home)**
- **Header:** Logo + Navegação + Botão Login/Dashboard
- **Hero Section:** Título impactante, subtítulo, CTA
- **Serviços em Destaque:** 3 cards principais (IA, Automação, Edição de Vídeos)
- **Sobre:** Breve apresentação pessoal
- **Sistemas Existentes:** Galeria de projetos/sistemas
- **CTA Final:** Chamar para ação
- **Footer:** Links, contato, redes sociais

### 2. **Página de Login**
- **Formulário simples:** Email + Senha
- **Links:** Cadastro, Recuperar Senha
- **Design minimalista:** Foco no formulário

### 3. **Painel de Usuário (Dashboard)**
- **Sidebar:** Navegação lateral
- **Perfil:** Dados do usuário
- **Meus Projetos:** Listagem de projetos salvos
- **Configurações:** Preferências de usuário

### 4. **Página de Portfólio**
- **Galeria de Projetos:** Grid com filtros
- **Detalhes do Projeto:** Modal/página individual
- **Upload de Preview:** Imagem, vídeo ou screenshot

### 5. **Página de Serviços**
- **Descrição detalhada** de cada serviço
- **Casos de uso**
- **Diferenciais**

---

## 🎯 Serviços Principais a Destacar

1. **Geração de Vídeos com IA**
   - Criação automática de conteúdo
   - Integração com TikTok e YouTube

2. **Automação com Selenium**
   - Bots para automação de tarefas
   - Scraping e integração de dados

3. **Edição de Vídeos**
   - Processamento em lote
   - Efeitos e transições

4. **Desenvolvimento Web**
   - Django, Laravel, Flask, Node.js
   - React, Bootstrap, FastAPI

5. **Integrações com APIs**
   - TikTok, YouTube, sistemas externos
   - RPA e automações

6. **Análise de Dados**
   - Processamento e visualização
   - Aprendizagem por reforço

---

## 📱 Componentes Principais

### Navbar
- Logo à esquerda
- Menu de navegação centralizado
- Botões de Login/Dashboard à direita
- Responsivo com menu hamburger

### Cards de Serviço
- Ícone + Título + Descrição
- Hover: Elevação e mudança de cor
- Cores alternadas (roxo e azul)

### Botões
- **Primário:** Roxo claro (#7C3AED)
- **Secundário:** Azul claro (#3B82F6)
- **Outline:** Bordas com cores primárias
- **Hover:** Escurecimento e sombra

### Formulários
- Inputs com bordas sutis
- Labels acima dos campos
- Validação em tempo real
- Mensagens de erro em vermelho

### Footer
- Links úteis
- Redes sociais
- Informações de contato
- Copyright

---

## 🎬 Wireframes

### Landing Page (Home)
```
┌─────────────────────────────────────┐
│  Logo    Menu    Login/Dashboard    │  ← Navbar
├─────────────────────────────────────┤
│                                     │
│     Título Principal Grande         │
│     Subtítulo + CTA                 │
│                                     │  ← Hero Section
│     [Botão Começar]                 │
│                                     │
├─────────────────────────────────────┤
│  Serviço 1  │  Serviço 2  │ Serviço 3 │  ← Cards de Serviços
├─────────────────────────────────────┤
│                                     │
│     Sobre Jonata Pontes             │  ← About Section
│     Texto breve + Foto              │
│                                     │
├─────────────────────────────────────┤
│  Projeto 1  │  Projeto 2  │ Projeto 3 │  ← Portfólio
│  Projeto 4  │  Projeto 5  │ Projeto 6 │
├─────────────────────────────────────┤
│  Links  │  Redes Sociais  │ Contato  │  ← Footer
└─────────────────────────────────────┘
```

### Dashboard
```
┌──────────────────────────────────────────┐
│ ☰ Logo    Menu    Perfil    Logout      │  ← Navbar
├──────┬───────────────────────────────────┤
│      │                                   │
│ Nav  │  Bem-vindo, Usuário!             │
│ Lat  │                                   │  ← Main Content
│      │  [Cards de Estatísticas]         │
│      │                                   │
│      │  Meus Projetos                   │
│      │  [Tabela/Grid de Projetos]       │
│      │                                   │
└──────┴───────────────────────────────────┘
```

---

## 🚀 Navegação

### Menu Principal
- Home
- Serviços
- Portfólio
- Sobre
- Contato
- Login/Dashboard (dinâmico)

### Menu Autenticado (Dashboard)
- Dashboard
- Meus Projetos
- Perfil
- Configurações
- Logout

---

## 📝 Tipografia

- **Font:** Inter, Segoe UI, sans-serif
- **Headings:** Bold, tamanho 2rem a 3.5rem
- **Body:** Regular, tamanho 1rem
- **Small:** Regular, tamanho 0.875rem

---

## ✨ Efeitos e Transições

- **Hover em cards:** Elevação (box-shadow) + mudança de cor
- **Botões:** Transição suave de cor (200ms)
- **Links:** Underline animado
- **Modais:** Fade-in com backdrop
- **Scroll:** Animações suaves (fade-in ao entrar na viewport)

---

## 📦 Estrutura de Arquivos Laravel

```
portifolio/
├── app/
│   ├── Http/Controllers/
│   │   ├── HomeController.php
│   │   ├── AuthController.php
│   │   ├── DashboardController.php
│   │   ├── PortfolioController.php
│   │   └── ProjectController.php
│   ├── Models/
│   │   ├── User.php
│   │   ├── Project.php
│   │   └── ProjectPreview.php
│   └── ...
├── resources/
│   ├── views/
│   │   ├── layouts/
│   │   │   ├── app.blade.php
│   │   │   └── auth.blade.php
│   │   ├── pages/
│   │   │   ├── home.blade.php
│   │   │   ├── login.blade.php
│   │   │   ├── dashboard.blade.php
│   │   │   ├── portfolio.blade.php
│   │   │   └── services.blade.php
│   │   ├── components/
│   │   │   ├── navbar.blade.php
│   │   │   ├── footer.blade.php
│   │   │   ├── service-card.blade.php
│   │   │   └── project-card.blade.php
│   │   └── ...
│   ├── css/
│   │   └── app.css (Tailwind + Custom)
│   └── js/
│       └── app.js
├── routes/
│   ├── web.php
│   └── api.php
├── database/
│   ├── migrations/
│   └── seeders/
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── ...
└── ...
```

---

## 🔒 Autenticação

- **Sistema:** Laravel Breeze ou Sanctum
- **Métodos:** Email/Senha
- **Recuperação:** Link de reset por email
- **Sessão:** Cookies HTTP-only

---

## 📊 Banco de Dados

### Tabelas Principais
- **users:** Usuários registrados
- **projects:** Projetos do portfólio
- **project_previews:** Imagens/vídeos de preview
- **services:** Serviços oferecidos

---

## 🎯 Checklist de Implementação

- [ ] Estrutura Laravel criada
- [ ] Navbar e Footer responsivos
- [ ] Landing page com hero section
- [ ] Cards de serviços
- [ ] Autenticação (Login/Registro)
- [ ] Dashboard de usuário
- [ ] Página de portfólio
- [ ] Upload de previews
- [ ] Responsividade mobile
- [ ] SEO básico
- [ ] Deploy em public_html

---

## 🌐 Hospedagem (public_html)

**Estrutura esperada:**
```
public_html/
├── public/          ← Apontado pelo servidor
│   ├── index.php
│   ├── css/
│   ├── js/
│   └── images/
├── app/
├── resources/
├── routes/
├── config/
├── .env
└── ...
```

**Configuração:** O servidor aponta para `public_html/public/`, então o Laravel funcionará normalmente.

---

**Versão:** 1.0  
**Data:** Novembro 2025  
**Autor:** Manus AI
