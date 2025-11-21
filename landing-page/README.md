# 🎯 Landing Page - Portfólio Jonata Pontes

Landing page profissional e tecnológica para o portfólio de Jonata Pontes, desenvolvedor full-stack especializado em RPA, automação e inteligência artificial.

## ✨ Características

- **Design Tecnológico**: Paleta escura com roxo (#810781) e azul escuro
- **Efeito de Máquina de Escrever**: Animação dinâmica no título principal com cursor piscante
- **Cards Interativos**: Hover effects e animações suaves em todas as seções
- **Seções Principais**:
  - Hero Section com apresentação impactante
  - Especialidades (6 skills com ícones e descrições)
  - Stacks & Tecnologias (6 categorias com 40+ tecnologias)
  - Projetos & Cases (6 cases reais com impacto)
  - Formulário de Contato funcional
  - Footer com links sociais
  - Navegação sticky com scroll suave

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Animações**: CSS puro + React hooks customizados
- **Testing**: Vitest + React Testing Library
- **Build**: Vite
- **Package Manager**: npm/pnpm

## 📁 Estrutura de Arquivos

```
landing-page/
├── src/
│   ├── pages/
│   │   ├── Home.tsx              # Página principal
│   │   ├── Home.test.tsx         # Testes da página
│   │   └── NotFound.tsx          # Página 404
│   ├── hooks/
│   │   ├── useTypewriter.ts      # Hook de máquina de escrever
│   │   ├── useTypewriter.test.ts # Testes do hook
│   │   ├── useComposition.ts
│   │   └── useMobile.tsx
│   ├── components/
│   │   ├── ui/                   # Componentes shadcn/ui
│   │   ├── ErrorBoundary.tsx
│   │   ├── ManusDialog.tsx
│   │   └── Map.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx      # Context do tema
│   ├── lib/
│   │   └── utils.ts
│   ├── test/
│   │   └── setup.ts              # Setup dos testes
│   ├── App.tsx                   # Componente raiz
│   ├── main.tsx                  # Entry point React
│   ├── index.css                 # Estilos globais
│   └── const.ts                  # Constantes
├── index.html                    # HTML entry point
├── vitest.config.ts              # Configuração de testes
└── README.md                     # Este arquivo
```

## 🚀 Como Usar

### Instalação

```bash
cd landing-page
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:5173

### Build para Produção

```bash
npm run build
```

Gera pasta `dist/` com arquivos otimizados.

### Preview de Produção

```bash
npm run preview
```

### Executar Testes

```bash
npm run test
```

Executa 17 testes automatizados:
- 10 testes da Home page
- 7 testes do hook useTypewriter

## 🎨 Customização

### Alterar Cores

Edite `src/index.css` - as cores usam OKLCH:

```css
.dark {
  --primary: oklch(0.55 0.25 290);      /* Roxo */
  --accent: oklch(0.65 0.22 320);       /* Rosa */
  --background: oklch(0.08 0.01 285);   /* Azul escuro */
  /* ... mais cores */
}
```

### Alterar Velocidade da Máquina de Escrever

Em `src/pages/Home.tsx`:

```tsx
const { displayedText, isComplete } = useTypewriter({
  text: "Jonata Pontes",
  speed: 80,        // ms por caractere (diminuir = mais rápido)
  delay: 300,       // delay inicial em ms
});
```

### Adicionar Novas Seções

1. Crie um novo componente em `src/components/`
2. Importe em `src/pages/Home.tsx`
3. Adicione a seção no JSX
4. Escreva testes em `Home.test.tsx`

## ✅ Testes

### Cobertura de Testes

- **Home Page**: Renderização, navegação, skills, stacks, cases, contato, footer
- **useTypewriter Hook**: Inicialização, digitação, delay, cleanup

### Executar Testes

```bash
# Todos os testes
npm run test

# Com coverage
npm run test:coverage

# Modo watch
npm run test:watch
```

## 📱 Responsividade

Totalmente responsivo com breakpoints Tailwind:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Testado em:
- ✓ iPhone (375px)
- ✓ iPad (768px)
- ✓ Desktop (1920px)

## 🔧 Configurações

### Tailwind CSS

Arquivo: `tailwind.config.ts` (no projeto raiz)

### Vite

Arquivo: `vite.config.js` (no projeto raiz)

### TypeScript

Arquivo: `tsconfig.json` (no projeto raiz)

## 🌐 Deploy

### Hostgator com cPanel

Veja o guia completo em `GUIA_DEPLOY_HOSTGATOR_CPANEL.md` (na raiz do projeto)

Resumo rápido:
```bash
# 1. Conectar via SSH
ssh usuario@hostname

# 2. Clonar e navegar
git clone https://github.com/jonatapontesdev/portifolio.git
cd portifolio/landing-page

# 3. Build
npm install
npm run build

# 4. Copiar para public_html
cp -r dist/* ../../public_html/

# 5. Configurar .htaccess para SPA
```

## 🔐 Segurança

- ✓ Sem vulnerabilidades conhecidas
- ✓ Dependências atualizadas
- ✓ HTTPS recomendado
- ✓ CSP headers configuráveis

## 📊 Performance

- ✓ Lighthouse Score: 90+
- ✓ First Contentful Paint: < 1s
- ✓ Largest Contentful Paint: < 2.5s
- ✓ Cumulative Layout Shift: < 0.1

## 🔗 Links Úteis

- [React 19 Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vitest](https://vitest.dev)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

## 📝 Licença

Portfólio pessoal de Jonata Pontes. Todos os direitos reservados.

## 👨‍💻 Autor

**Jonata Pontes**
- Full-Stack Developer
- RPA Specialist
- AI Enthusiast

---

**Última atualização**: Novembro 2024
