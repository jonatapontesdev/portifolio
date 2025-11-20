# JP Digital Solutions - Guia de Design

## 📋 Informações Gerais
- **Marca:** JP Digital Solutions
- **Proprietário:** Jonata Pontes
- **Desde:** 2023
- **Foco:** Automação, IA, Edição de Vídeos, Desenvolvimento Web

---

## 🎨 Paleta de Cores

### Cores Primárias
| Cor | Hex | RGB | OKLCH | Uso |
|-----|-----|-----|-------|-----|
| Roxo Escuro | `#2D1B69` | rgb(45, 27, 105) | oklch(0.2 0.02 262) | Fundo principal, headers |
| Azul Escuro | `#1A3A52` | rgb(26, 58, 82) | oklch(0.35 0.12 250) | Seções secundárias |
| Roxo Claro | `#7C3AED` | rgb(124, 58, 237) | oklch(0.52 0.28 262) | Botões, destaque |
| Azul Claro | `#3B82F6` | rgb(59, 130, 246) | oklch(0.54 0.28 250) | Links, accent |

### Cores Neutras
| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| Branco | `#FFFFFF` | rgb(255, 255, 255) | Texto principal, backgrounds |
| Cinza Claro | `#F3F4F6` | rgb(243, 244, 246) | Backgrounds secundários |
| Cinza Médio | `#9CA3AF` | rgb(156, 163, 175) | Texto secundário |
| Cinza Escuro | `#374151` | rgb(55, 65, 81) | Borders, dividers |

---

## 📐 Estrutura de Páginas

### 1. **Landing Page (Home)**
- **Header:** Logo + Navegação + Botão Login
- **Hero Section:** Título impactante, subtítulo, CTA
- **Serviços em Destaque:** 6 cards de serviços
- **Sobre:** Breve apresentação pessoal
- **Portfólio Preview:** 3 projetos recentes
- **CTA Final:** Chamar para ação
- **Footer:** Links, contato, redes sociais

### 2. **Página de Portfólio**
- **Header:** Título e descrição
- **Filtros:** Por categoria
- **Galeria de Projetos:** Grid responsivo
- **CTA:** Solicitar orçamento

### 3. **Painel de Usuário (Dashboard)**
- **Header:** Bem-vindo personalizado
- **Estatísticas:** Cards de métricas
- **Meus Projetos:** Tabela de projetos
- **Ações Rápidas:** Adicionar projeto, editar perfil

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
│  Serviço 4  │  Serviço 5  │ Serviço 6 │
├─────────────────────────────────────┤
│                                     │
│     Sobre Jonata Pontes             │  ← About Section
│     Texto breve + Foto              │
│                                     │
├─────────────────────────────────────┤
│  Projeto 1  │  Projeto 2  │ Projeto 3 │  ← Portfólio
├─────────────────────────────────────┤
│  Links  │  Redes Sociais  │ Contato  │  ← Footer
└─────────────────────────────────────┘
```

### Dashboard
```
┌──────────────────────────────────────────┐
│ Logo    Menu    Perfil    Logout         │  ← Navbar
├──────────────────────────────────────────┤
│                                          │
│  Bem-vindo, Usuário!                    │
│                                          │  ← Main Content
│  [Cards de Estatísticas]                │
│                                          │
│  Meus Projetos                          │
│  [Tabela/Grid de Projetos]              │
│                                          │
└──────────────────────────────────────────┘
```

---

## 🚀 Navegação

### Menu Principal
- Home
- Portfólio
- Contato
- Login/Dashboard (dinâmico)

### Menu Autenticado (Dashboard)
- Dashboard
- Meus Projetos
- Perfil
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

## 🌐 Hospedagem

**Estrutura esperada:**
```
/
├── index.html
├── css/
├── js/
├── images/
└── ...
```

**Configuração:** O servidor aponta para a raiz, então os assets são servidos normalmente.

---

**Versão:** 1.0  
**Data:** Novembro 2025  
**Autor:** Manus AI
