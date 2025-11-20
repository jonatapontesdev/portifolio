export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "JP Digital Solutions";

export const APP_LOGO = import.meta.env.VITE_APP_LOGO || "https://placehold.co/128x128/2D1B69/FFFFFF?text=JP";

// JP Digital Solutions - Cores da Marca
export const BRAND_COLORS = {
  purpleDark: '#2D1B69',
  blueDark: '#1A3A52',
  purpleLight: '#7C3AED',
  blueLight: '#3B82F6',
  white: '#FFFFFF',
} as const;

// Servicos oferecidos
export const SERVICES = [
  {
    id: 1,
    title: 'IA & Videos',
    description: 'Geracao automatica de videos com inteligencia artificial, edicao profissional e integracao com TikTok/YouTube',
    icon: '🎬',
  },
  {
    id: 2,
    title: 'Automacao',
    description: 'Selenium RPA, bots inteligentes, integracao com APIs e fila de processamento',
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'Desenvolvimento Web',
    description: 'Django, Laravel, Flask, Node.js, React, Bootstrap e FastAPI',
    icon: '💻',
  },
  {
    id: 4,
    title: 'Analise de Dados',
    description: 'Processamento avancado, aprendizagem por reforco e visualizacoes',
    icon: '📊',
  },
  {
    id: 5,
    title: 'Integracoes',
    description: 'APIs externas, TikTok, YouTube e sistemas de pagamento',
    icon: '🔗',
  },
  {
    id: 6,
    title: 'Processamento de Videos',
    description: 'Edicao em lote, efeitos, transicoes e otimizacao para plataformas',
    icon: '🎥',
  },
] as const;

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
