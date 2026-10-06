const course = [
  {
    id: "fundamentos",
    title: "Comece por aqui",
    track: "Base",
    color: "#b7ff3c",
    description: "Entenda o modelo low ticket, escolha uma meta viável e organize a operação antes de criar qualquer anúncio.",
    lessons: [
      ["A lógica do low ticket lucrativo", "12 min"],
      ["Produto, oferta e aquisição: o mapa completo", "15 min"],
      ["Meta financeira e conta de trás para frente", "18 min"],
      ["Seu plano de execução em 30 dias", "14 min"],
    ],
  },
  {
    id: "nicho-oferta",
    title: "Nicho, problema e oferta",
    track: "Oferta",
    color: "#58e8aa",
    description: "Encontre demanda real, transforme dores específicas em promessas honestas e construa uma oferta fácil de entender.",
    lessons: [
      ["Como validar um nicho sem achismo", "19 min"],
      ["Pesquisa de dores e linguagem do cliente", "21 min"],
      ["Mecanismo: por que sua solução funciona", "17 min"],
      ["Promessa específica sem exageros", "16 min"],
      ["Preço, garantia e empilhamento de valor", "23 min"],
    ],
  },
  {
    id: "produto",
    title: "Produto mínimo que entrega",
    track: "Oferta",
    color: "#66c7ff",
    description: "Planeje e produza um infoproduto enxuto, aplicável e com uma vitória rápida para o comprador.",
    lessons: [
      ["Definindo a transformação central", "15 min"],
      ["Arquitetura do conteúdo e sequência didática", "25 min"],
      ["E-book, mini curso, templates ou microapp", "18 min"],
      ["Produção rápida com padrão de qualidade", "22 min"],
      ["Onboarding e primeira vitória do aluno", "13 min"],
    ],
  },
  {
    id: "copy-pagina",
    title: "Copy e página de vendas",
    track: "Oferta",
    color: "#ffbf5d",
    description: "Escreva uma mensagem clara, prove o valor e monte uma página curta que reduz dúvidas e conduz à compra.",
    lessons: [
      ["A ideia central da sua página", "14 min"],
      ["Hook, problema, mecanismo e oferta", "24 min"],
      ["Prova social verdadeira e verificável", "16 min"],
      ["Objeções, garantia e perguntas frequentes", "19 min"],
      ["Página no ar: checklist de conversão", "27 min"],
    ],
  },
  {
    id: "funil",
    title: "Funil low ticket",
    track: "Oferta",
    color: "#a99cff",
    description: "Conecte checkout, order bump, upsell e pós-compra sem complicar a experiência do cliente.",
    lessons: [
      ["A jornada da primeira compra", "16 min"],
      ["Order bump complementar, não aleatório", "15 min"],
      ["Upsell e downsell com coerência", "20 min"],
      ["Entrega, suporte e recuperação de pagamento", "18 min"],
    ],
  },
  {
    id: "organico-conteudo",
    title: "Conteúdo orgânico que vende",
    track: "Orgânico",
    color: "#ff77b7",
    description: "Crie uma presença que educa, gera confiança e leva a ofertas sem transformar o perfil num catálogo de anúncios.",
    lessons: [
      ["Posicionamento: por que seguir você", "18 min"],
      ["Os 4 pilares de conteúdo", "22 min"],
      ["Roteiros curtos: hook, valor e CTA", "24 min"],
      ["Conteúdo de prova sem promessas enganosas", "17 min"],
      ["Stories que iniciam conversas", "19 min"],
      ["Oferta orgânica sem parecer insistente", "21 min"],
    ],
  },
  {
    id: "organico-maquina",
    title: "Máquina de publicação",
    track: "Orgânico",
    color: "#54dfd2",
    description: "Implemente uma rotina sustentável de pesquisa, produção, distribuição e reaproveitamento de conteúdo.",
    lessons: [
      ["Banco de ideias orientado por demanda", "15 min"],
      ["Produção em lote de uma semana", "22 min"],
      ["Distribuição: Reels, TikTok, Shorts e carrossel", "26 min"],
      ["Métricas orgânicas e ciclo de melhoria", "18 min"],
    ],
  },
  {
    id: "trafego-pago",
    title: "Tráfego pago do zero",
    track: "Pago",
    color: "#7fa8ff",
    description: "Configure a estrutura essencial, publique sua primeira campanha e compre dados com controle de risco.",
    lessons: [
      ["O papel do tráfego na operação", "13 min"],
      ["Conta, página e gerenciador de anúncios", "25 min"],
      ["Pixel, eventos e rastreamento", "28 min"],
      ["Campanha de teste: estrutura simples", "24 min"],
      ["Públicos amplos, interesses e remarketing", "21 min"],
      ["Políticas, bloqueios e operação responsável", "17 min"],
    ],
  },
  {
    id: "criativos",
    title: "Criativos e testes",
    track: "Pago",
    color: "#ff8b66",
    description: "Crie variações com hipóteses claras, teste ângulos e descubra mensagens vencedoras sem queimar orçamento.",
    lessons: [
      ["Ângulo, hook, corpo e chamada", "18 min"],
      ["UGC ético e demonstração de produto", "21 min"],
      ["Criativos estáticos que param o scroll", "19 min"],
      ["Matriz de testes sem confusão", "24 min"],
      ["Como ler um teste de criativo", "20 min"],
    ],
  },
  {
    id: "metricas",
    title: "Métricas e otimização",
    track: "Pago",
    color: "#d0e35c",
    description: "Use números para decidir: corte desperdício, proteja margem e saiba exatamente o que otimizar primeiro.",
    lessons: [
      ["CPA máximo, margem e ponto de equilíbrio", "22 min"],
      ["CPM, CTR, CPC e conversão", "26 min"],
      ["Diagnóstico por etapa do funil", "19 min"],
      ["Ritual de otimização de 20 minutos", "16 min"],
    ],
  },
  {
    id: "escala",
    title: "Escala, LTV e recorrência",
    track: "Escala",
    color: "#e29cff",
    description: "Escale apenas o que funciona, aumente o valor por cliente e transforme compradores em uma base recorrente.",
    lessons: [
      ["Quando uma oferta está pronta para escalar", "17 min"],
      ["Escala vertical e horizontal", "23 min"],
      ["Esteira de produtos e próxima oferta", "20 min"],
      ["Assinatura e comunidade paga", "18 min"],
      ["Retenção, reativação e LTV", "21 min"],
    ],
  },
  {
    id: "operacao",
    title: "Operação, suporte e compliance",
    track: "Escala",
    color: "#8cdd9b",
    description: "Profissionalize atendimento, indicadores, privacidade e rotina para crescer sem destruir a reputação da marca.",
    lessons: [
      ["Painel semanal da operação", "18 min"],
      ["Suporte que reduz reembolso", "16 min"],
      ["LGPD, consentimento e uso de dados", "20 min"],
      ["Depoimentos, anúncios e promessas responsáveis", "17 min"],
    ],
  },
  {
    id: "aceleradores",
    title: "Aceleradores de conversão",
    track: "Escala",
    color: "#ff6f6f",
    description: "Aplique táticas de resposta direta com critérios de risco, transparência e limites claros para proteger caixa, conta e reputação.",
    lessons: [
      ["Oferta agressiva sem camuflar a promessa", "19 min"],
      ["Urgência e escassez verificáveis", "17 min"],
      ["Como incentivar depoimentos com transparência", "18 min"],
      ["Prospecção ativa com opt-in e cadência", "22 min"],
      ["Contingência operacional e plano B", "20 min"],
      ["Follow-up automatizado, limites e descadastro", "21 min"],
    ],
  },
].map((module, moduleIndex) => ({
  ...module,
  index: moduleIndex + 1,
  lessons: module.lessons.map(([title, duration], lessonIndex) => ({
    id: `${module.id}-${lessonIndex + 1}`,
    title,
    duration,
    moduleId: module.id,
    order: lessonIndex + 1,
  })),
}));

const lessonMap = new Map(course.flatMap((module) => module.lessons.map((lesson) => [lesson.id, { ...lesson, module }])));
const academicTitles = [
  ["fundamentos", "Explorador da Operação Low Ticket", "Explorador LowLab"],
  ["nicho-oferta", "Cartógrafo de Demanda", "Cartógrafo de Demanda"],
  ["produto", "Arquiteto de Produto Low Ticket", "Arquiteto de Produto"],
  ["copy-pagina", "Engenheiro de Mensagem", "Engenheiro de Mensagem"],
  ["funil", "Construtor de Funis Low Ticket", "Construtor de Funis"],
  ["organico-conteudo", "Estrategista de Conteúdo Orgânico", "Estrategista de Conteúdo"],
  ["organico-maquina", "Editor de Publicação Consistente", "Editor de Publicação"],
  ["trafego-pago", "Operador de Mídia Paga", "Operador de Mídia"],
  ["criativos", "Diretor de Criativos de Performance", "Diretor de Criativos"],
  ["metricas", "Analista de Performance", "Analista de Performance"],
  ["escala", "Estrategista de Escala & LTV", "Estrategista de Escala"],
  ["operacao", "Gestor de Operações Digitais", "Gestor de Operações"],
  ["aceleradores", "Operador LowLab", "Operador LowLab"],
].map(([moduleId, title, short], index) => ({ moduleId, title, short, level: index + 1 }));

const state = {
  completed: new Set(JSON.parse(localStorage.getItem("lowlab-completed") || "[]")),
  favorites: new Set(JSON.parse(localStorage.getItem("lowlab-favorites") || "[]")),
  plan: new Set(JSON.parse(localStorage.getItem("lowlab-plan") || "[]")),
  studentName: localStorage.getItem("lowlab-student-name") || "",
  completionDate: localStorage.getItem("lowlab-completion-date") || "",
  certificateCode: localStorage.getItem("lowlab-certificate-code") || "",
  profile: (() => {
    try {
      return JSON.parse(localStorage.getItem("lowlab-profile") || "{}") || {};
    } catch {
      return {};
    }
  })(),
  profileTab: "personal",
  theme: localStorage.getItem("lowlab-theme") === "light" ? "light" : "dark",
  filter: "Todas",
  filterQuery: "",
};

if (!state.profile.fullName && state.studentName) state.profile.fullName = state.studentName;

const app = document.querySelector("#app");
const navItems = [...document.querySelectorAll(".nav-item")];
const toast = document.querySelector("#toast");
const search = document.querySelector("#globalSearch");
const searchResults = document.querySelector("#searchResults");
const sidebar = document.querySelector(".sidebar");
const profileButton = document.querySelector("#profileButton");
const themeToggle = document.querySelector("#themeToggle");
const tracks = ["Todas", "Base", "Oferta", "Orgânico", "Pago", "Escala"];

const trackVisuals = {
  Base: "assets/filters-library.webp",
  Oferta: "assets/hero-luxury.jpg",
  Orgânico: "assets/organic-studio.jpg",
  Pago: "assets/paid-strategy.jpg",
  Escala: "assets/formation-campus.webp",
};

const routeHeroImages = {
  home: "assets/university-campus-hero-v1.webp",
  tracks: "assets/filters-library.webp",
  favorites: "assets/favorites-library.webp",
  formation: "assets/formation-campus.webp",
};

const moduleStories = {
  fundamentos: { title: "A Mesa do Arquiteto", image: "assets/story-fundamentos.webp", scenes: [1, 4, 3, 5] },
  "nicho-oferta": { title: "O Detetive de Mercado", image: "assets/story-nicho-oferta.webp", wide: true },
  produto: { title: "O Ateliê do Produto", image: "assets/story-produto.webp" },
  "copy-pagina": { title: "A Galeria da Persuasão", image: "assets/story-copy-pagina.webp" },
  funil: { title: "A Jornada da Boutique", image: "assets/story-funil.webp", scenes: [1, 2, 3, 6] },
  "organico-conteudo": { title: "O Estúdio Editorial", image: "assets/story-organico-conteudo.webp" },
  "organico-maquina": { title: "A Estufa de Conteúdo", image: "assets/story-organico-maquina.webp" },
  "trafego-pago": { title: "A Torre de Controle", image: "assets/story-trafego-pago.webp" },
  criativos: { title: "O Laboratório de Luz", image: "assets/story-criativos.webp", scenes: [1, 3, 4, 5, 6] },
  metricas: { title: "O Observatório de Performance", image: "assets/story-metricas.webp" },
  escala: { title: "A Torre de Crescimento", image: "assets/story-escala.webp", scenes: [1, 2, 4, 5, 6] },
  operacao: { title: "A Casa das Operações", image: "assets/story-operacao.webp" },
  aceleradores: { title: "O Grand Tour de Precisão", image: "assets/story-aceleradores.webp" },
};

const officialLessonSources = {
  "Pixel, eventos e rastreamento": [
    ["Google Ads · medir conversões", "https://support.google.com/google-ads/answer/1722022?hl=pt-BR"],
    ["ANPD · cookies e proteção de dados", "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf"],
  ],
  "Campanha de teste: estrutura simples": [
    ["Google Ads · página de experimentos", "https://support.google.com/google-ads/answer/10682377?hl=pt-BR"],
    ["Google Ads · teste com confiança", "https://support.google.com/google-ads/answer/7281575?hl=pt-BR"],
  ],
  "Políticas, bloqueios e operação responsável": [
    ["Meta · padrões de publicidade", "https://transparency.meta.com/policies/ad-standards/"],
    ["CONAR · Código de Autorregulamentação", "https://www.conar.org.br/pdf/Codigo-CONAR-2024.pdf"],
  ],
  "UGC ético e demonstração de produto": [
    ["Meta · boas práticas para Reels Ads", "https://www.facebook.com/business/ads/facebook-instagram-reels-ads"],
    ["CONAR · publicidade por influenciadores", "https://www.conar.org.br/noticias/guia-de-marketing-e-publicidade-por-influenciadores-digitais"],
  ],
  "Criativos estáticos que param o scroll": [
    ["TikTok · Creative Center", "https://ads.tiktok.com/help/article/creative-center?lang=pt-BR"],
  ],
  "Matriz de testes sem confusão": [
    ["Google Ads · teste com confiança", "https://support.google.com/google-ads/answer/7281575?hl=pt-BR"],
  ],
  "Como ler um teste de criativo": [
    ["Google Ads · acompanhar experimentos", "https://support.google.com/google-ads/answer/6318747?hl=pt-BR"],
  ],
  "LGPD, consentimento e uso de dados": [
    ["ANPD · materiais e guias oficiais", "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes"],
    ["ANPD · cookies e proteção de dados", "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf"],
  ],
  "Depoimentos, anúncios e promessas responsáveis": [
    ["CONAR · publicidade por influenciadores", "https://www.conar.org.br/noticias/guia-de-marketing-e-publicidade-por-influenciadores-digitais"],
    ["CONAR · Código de Autorregulamentação", "https://www.conar.org.br/pdf/Codigo-CONAR-2024.pdf"],
  ],
};

function visualFor(module) {
  return trackVisuals[module.track] || "assets/hero-luxury.jpg";
}

function storyFor(moduleOrId) {
  const moduleId = typeof moduleOrId === "string" ? moduleOrId : moduleOrId.id;
  return moduleStories[moduleId] || { title: "Jornada LowLab", image: visualFor(course.find((module) => module.id === moduleId) || course[0]) };
}

function storyVisualStyle(moduleOrId, sceneNumber = 1, mapLesson = false, deferImage = false) {
  const story = storyFor(moduleOrId);
  const selectedScene = mapLesson ? (story.scenes?.[sceneNumber - 1] || sceneNumber) : sceneNumber;
  const index = Math.max(0, Math.min(5, selectedScene - 1));
  const column = index % 3;
  const row = Math.floor(index / 3);
  const x = ["0%", "50%", "100%"][column];
  const y = story.wide ? (row ? "90%" : "10%") : (row ? "84.8%" : "15.2%");
  return `${deferImage ? "" : `--story-image:url('${story.image}');`}--story-x:${x};--story-y:${y}`;
}

function lessonSlideVisualStyle(moduleOrId, lessonOrder, slideNumber) {
  const story = storyFor(moduleOrId);
  const scene = ((lessonOrder + slideNumber - 2) % 6) + 1;
  const index = scene - 1;
  const x = ["0%", "50%", "100%"][index % 3];
  const y = index > 2 ? "100%" : "0%";
  const ratio = story.wide ? "4 / 3" : "1 / 1";
  return `--lesson-art-image:url('${story.image}');--lesson-art-x:${x};--lesson-art-y:${y};--lesson-art-ratio:${ratio}`;
}

function deferredStoryAttributes(moduleOrId, sceneNumber = 1, mapLesson = false) {
  const story = storyFor(moduleOrId);
  return `style="${storyVisualStyle(moduleOrId, sceneNumber, mapLesson, true)}" data-story-image="${story.image}"`;
}

const warmedImages = new Map();
let storyImageObserver = null;

function warmImage(src, priority = "low") {
  if (!src) return Promise.resolve("");
  if (warmedImages.has(src)) return warmedImages.get(src);
  const request = new Promise((resolve) => {
    const image = new Image();
    image.decoding = "async";
    image.fetchPriority = priority;
    image.onload = () => {
      const decoding = typeof image.decode === "function" ? image.decode() : Promise.resolve();
      Promise.resolve(decoding).catch(() => {}).finally(() => resolve(src));
    };
    image.onerror = () => resolve(src);
    image.src = src;
  });
  warmedImages.set(src, request);
  return request;
}

function imageForPath(path) {
  const [view, id] = String(path || "home").split("/");
  if (view === "module") return storyFor(id).image;
  if (view === "lesson") return storyFor(lessonMap.get(id)?.moduleId || "fundamentos").image;
  return routeHeroImages[view] || "";
}

function warmCriticalImage(path) {
  return warmImage(imageForPath(path), "high");
}

function primeNavigation(element, path) {
  const prime = () => warmCriticalImage(path);
  element.addEventListener("pointerenter", prime);
  element.addEventListener("focus", prime);
  element.addEventListener("touchstart", prime, { passive: true });
}

function bindDeferredStoryImages(root = document) {
  storyImageObserver?.disconnect();
  const elements = [...root.querySelectorAll("[data-story-image]")];
  const reveal = (element) => {
    element.style.setProperty("--story-image", `url('${element.dataset.storyImage}')`);
    element.removeAttribute("data-story-image");
  };
  if (!("IntersectionObserver" in window)) {
    elements.forEach(reveal);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "420px 0px" });
  storyImageObserver = observer;
  elements.forEach((element) => observer.observe(element));
}

function scheduleImageWarmup() {
  const routeImages = [...new Set(Object.values(routeHeroImages))];
  const storyImages = [...new Set(Object.values(moduleStories).map((story) => story.image))];
  const run = async () => {
    await Promise.all(routeImages.map((src) => warmImage(src, "low")));
    for (const src of storyImages) await warmImage(src, "low");
  };
  const start = () => {
    if ("requestIdleCallback" in window) requestIdleCallback(() => run(), { timeout: 2200 });
    else window.setTimeout(run, 600);
  };
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}

const icons = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 7 8 5-8 5z"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 12 4 4 8-9"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
  back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10m6 10V4m6 16v-7m4 7H2"/></svg>',
  layers: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5zm-9 10 9 5 9-5"/></svg>',
  file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v5h5"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
  award: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="5"/><path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  left: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  filter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M7 12h10m-7 6h4"/><circle cx="8" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="12" cy="18" r="2"/></svg>',
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function moduleIsComplete(module) {
  return module.lessons.every((lesson) => state.completed.has(lesson.id));
}

function awardFor(module) {
  return academicTitles.find((award) => award.moduleId === module.id);
}

function unlockedAwards() {
  return academicTitles.filter((award) => moduleIsComplete(course.find((module) => module.id === award.moduleId)));
}

function latestAward() {
  return unlockedAwards().at(-1) || null;
}

function persist() {
  localStorage.setItem("lowlab-completed", JSON.stringify([...state.completed]));
  localStorage.setItem("lowlab-favorites", JSON.stringify([...state.favorites]));
  localStorage.setItem("lowlab-plan", JSON.stringify([...state.plan]));
  updateProgress();
  window.LowLabAuth?.syncFromLocalStorage();
}

function updateProgress() {
  const total = lessonMap.size;
  const percent = Math.round((state.completed.size / total) * 100);
  document.querySelector("#sidebarProgress").textContent = `${percent}% concluído`;
  document.querySelector("#sidebarProgressBar").style.width = `${percent}%`;
  const name = state.profile.fullName || state.studentName || "Membro LowLab";
  const initials = name === "Membro LowLab"
    ? "ML"
    : name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toLocaleUpperCase("pt-BR");
  document.querySelector(".avatar").textContent = initials || "ML";
  profileButton.setAttribute("aria-label", `Abrir perfil de ${name}`);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function applyTheme(theme, persistChoice = true) {
  state.theme = theme === "dark" ? "dark" : "light";
  if (state.theme === "dark") document.documentElement.dataset.theme = "dark";
  else delete document.documentElement.dataset.theme;
  themeToggle.setAttribute("aria-pressed", String(state.theme === "dark"));
  themeToggle.setAttribute("aria-label", state.theme === "dark" ? "Ativar versão clara" : "Ativar versão escura");
  document.querySelector('meta[name="theme-color"]').setAttribute("content", state.theme === "dark" ? "#050c09" : "#071510");
  if (persistChoice) localStorage.setItem("lowlab-theme", state.theme);
}

function showAchievement(award) {
  document.querySelector(".achievement-overlay")?.remove();
  const finalAchievement = state.completed.size === lessonMap.size;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="achievement-overlay" role="dialog" aria-modal="true" aria-labelledby="achievementTitle">
      <div class="confetti" aria-hidden="true">${Array.from({ length: 18 }, (_, index) => `<i style="--i:${index}"></i>`).join("")}</div>
      <article class="achievement-dialog">
        <button class="achievement-close" data-close-achievement aria-label="Fechar">×</button>
        <span class="achievement-emblem"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
        <h2 id="achievementTitle">${award.title}</h2>
        <button class="primary-button" data-open-formation>${finalAchievement ? "Emitir certificado" : "Ver formação"} ${icons.arrow}</button>
      </article>
    </div>`);
  const overlay = document.querySelector(".achievement-overlay");
  overlay.querySelector("[data-close-achievement]").addEventListener("click", () => overlay.remove());
  overlay.querySelector("[data-open-formation]").addEventListener("click", () => { overlay.remove(); navigate("formation"); });
  overlay.addEventListener("click", (event) => { if (event.target === overlay) overlay.remove(); });
  overlay.querySelector("[data-close-achievement]").focus();
}

function firstIncomplete() {
  return [...lessonMap.values()].find((lesson) => !state.completed.has(lesson.id)) || [...lessonMap.values()][0];
}

function moduleProgress(module) {
  const done = module.lessons.filter((lesson) => state.completed.has(lesson.id)).length;
  return { done, percent: Math.round((done / module.lessons.length) * 100) };
}

function moduleCard(module) {
  const progress = moduleProgress(module);
  const award = awardFor(module);
  const complete = progress.percent === 100;
  return `
    <article class="module-card ${complete ? "module-complete" : ""}" style="--module-color:${module.color}" data-module="${module.id}" tabindex="0" role="button" aria-label="Abrir programa ${module.title}">
      <div class="module-number"><span>${String(module.index).padStart(2, "0")}</span><span>${progress.done}/${module.lessons.length}</span></div>
      <h3>${module.title}</h3>
      ${complete ? `<span class="module-award-chip">${icons.award} ${award.short}</span>` : ""}
      <div class="module-meta">
        <span>${progress.done}/${module.lessons.length} aulas</span>
        <div class="mini-progress"><span style="width:${progress.percent}%"></span></div>
        <span class="module-arrow">${icons.arrow}</span>
      </div>
    </article>`;
}

function lessonRailCard(module, lesson) {
  const completed = state.completed.has(lesson.id);
  const favorite = state.favorites.has(lesson.id);
  return `
    <article class="catalog-lesson-card ${completed ? "completed" : ""}" data-lesson="${lesson.id}" tabindex="0" role="button" aria-label="Abrir aula ${lesson.title}">
      <div class="catalog-lesson-image" ${deferredStoryAttributes(module, lesson.order, true)}>
        <span class="catalog-lesson-number">${String(lesson.order).padStart(2, "0")}</span>
        <span class="image-brand image-brand-card" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
        <span class="catalog-play">${completed ? icons.check : icons.play}</span>
      </div>
      <div class="catalog-lesson-copy">
        <div><span>${lesson.duration}</span>${favorite ? `<span class="favorite-mark">${icons.star}</span>` : ""}</div>
        <h3>${lesson.title}</h3>
      </div>
    </article>`;
}

function moduleRail(module) {
  const progress = moduleProgress(module);
  return `
    <section class="catalog-module" aria-labelledby="rail-title-${module.id}">
      <header class="catalog-module-head">
        <div class="catalog-module-title">
          <span class="catalog-index">${String(module.index).padStart(2, "0")}</span>
          <div><span class="catalog-progress">${progress.done}/${module.lessons.length} aulas</span><h2 id="rail-title-${module.id}">${module.title}</h2></div>
        </div>
        <div class="catalog-module-actions">
          <button class="text-button" data-module="${module.id}">Abrir ${icons.arrow}</button>
          <div class="rail-buttons" aria-label="Navegar pelas aulas de ${module.title}">
            <button data-scroll-rail="${module.id}" data-direction="-1" aria-label="Rolar para a esquerda">${icons.left}</button>
            <button data-scroll-rail="${module.id}" data-direction="1" aria-label="Rolar para a direita">${icons.arrow}</button>
          </div>
        </div>
      </header>
      <div class="lesson-rail" data-rail="${module.id}">
        ${module.lessons.map((lesson) => lessonRailCard(module, lesson)).join("")}
      </div>
    </section>`;
}

function filterModuleCard(module) {
  const progress = moduleProgress(module);
  const award = awardFor(module);
  return `
    <article class="filter-module-card" data-module="${module.id}" tabindex="0" role="button" aria-label="Abrir programa ${module.title}">
      <div class="filter-module-image" ${deferredStoryAttributes(module, 6)}>
        <span class="filter-module-index">${String(module.index).padStart(2, "0")}</span>
        <span class="image-brand image-brand-filter" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
        <span class="filter-module-progress">${progress.percent}%</span>
      </div>
      <div class="filter-module-copy">
        <span>${module.lessons.length} aulas</span>
        <h3>${module.title}</h3>
        <div><small>${progress.percent === 100 ? award.short : `${progress.done}/${module.lessons.length} concluídas`}</small><span>${icons.arrow}</span></div>
      </div>
    </article>`;
}

function filteredCourse() {
  const query = state.filterQuery.trim().toLocaleLowerCase("pt-BR");
  return course.filter((module) => {
    const inTrack = state.filter === "Todas" || module.track === state.filter;
    const haystack = `${module.title} ${module.description} ${module.track} ${module.lessons.map((lesson) => lesson.title).join(" ")}`.toLocaleLowerCase("pt-BR");
    return inTrack && (!query || haystack.includes(query));
  });
}

function renderHome() {
  const next = firstIncomplete();
  const completedPercent = Math.round((state.completed.size / lessonMap.size) * 100);
  const planDay = nextPlanDay();
  const planDayNumber = Math.max(1, planDays.indexOf(planDay) + 1);
  const planPercent = Math.round((state.plan.size / planDays.length) * 100);
  const visitKey = "lowlab-has-visited";
  const isFirstVisit = !localStorage.getItem(visitKey) && state.completed.size === 0;
  const resumeHeading = isFirstVisit ? "Comece sua formação" : "Continuar assistindo";
  const resumeAction = isFirstVisit ? "Iniciar primeira aula" : "Continuar aula";
  app.innerHTML = `
    <section class="campus-hero" id="campusHero" aria-label="Campus LowLab">
      <div class="campus-hero-media" aria-hidden="true"><div class="campus-hero-image"></div></div>
      <div class="campus-hero-lens" aria-hidden="true"></div>
      <div class="campus-hero-shade" aria-hidden="true"></div>
      <span class="campus-pointer-ring" aria-hidden="true"></span>
      <span class="image-brand image-brand-campus" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
      <button class="campus-scroll" data-scroll-campus aria-label="Ir para a próxima aula"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>
    </section>
    <section class="home-resume-section" id="campusStart" aria-labelledby="homeResumeTitle">
      <header class="home-resume-head"><h1 id="homeResumeTitle">${resumeHeading}</h1></header>
      <article class="home-resume-card" data-lesson="${next.id}" tabindex="0" role="button" aria-label="${resumeAction}: ${next.title}">
        <div class="home-resume-visual" style="${storyVisualStyle(next.module, next.order, true)}">
          <span class="image-brand image-brand-resume" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
          <span class="home-resume-play">${icons.play}</span>
        </div>
        <div class="home-resume-copy"><strong>${next.title}</strong><span>${next.module.title} · ${next.duration}</span></div>
        <div class="home-resume-progress"><b>${completedPercent}%</b><span>concluído</span><div class="progress-track" aria-hidden="true"><i style="width:${completedPercent}%"></i></div></div>
        <span class="home-resume-arrow">${icons.arrow}</span>
      </article>
    </section>
    <button class="home-plan-shortcut" data-view-jump="plan" aria-label="Abrir plano de execução de 30 dias">
      <span class="home-plan-number">30<small>dias</small></span>
      <span class="home-plan-copy"><small>Rota de execução</small><strong>${state.plan.size === planDays.length ? "Plano concluído" : `Próximo: dia ${String(planDayNumber).padStart(2, "0")}`}</strong><span>${state.plan.size === planDays.length ? "Formação completa e operação em movimento" : planDay.title}</span></span>
      <span class="home-plan-status"><b>${planPercent}%</b><span class="progress-track" aria-hidden="true"><i style="width:${planPercent}%"></i></span></span>
      <span class="home-plan-arrow">${icons.arrow}</span>
    </button>
    <div class="catalog-list home-catalog-list">${course.map(moduleRail).join("")}</div>`;
  bindCommon();
  bindCampusHero();
  localStorage.setItem(visitKey, "1");
}

function bindCampusHero() {
  const hero = document.querySelector("#campusHero");
  if (!hero) return;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let frame = 0;
  if (!reducedMotion) {
    hero.addEventListener("pointerenter", () => hero.classList.add("pointer-active"));
    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        hero.classList.add("pointer-active");
        hero.style.setProperty("--pointer-x", `${(x * 100).toFixed(1)}%`);
        hero.style.setProperty("--pointer-y", `${(y * 100).toFixed(1)}%`);
        hero.style.setProperty("--hero-shift-x", `${((.5 - x) * 28).toFixed(1)}px`);
        hero.style.setProperty("--hero-shift-y", `${((.5 - y) * 20).toFixed(1)}px`);
      });
    });
    hero.addEventListener("pointerleave", () => {
      hero.classList.remove("pointer-active");
      hero.style.setProperty("--pointer-x", "68%");
      hero.style.setProperty("--pointer-y", "32%");
      hero.style.setProperty("--hero-shift-x", "0px");
      hero.style.setProperty("--hero-shift-y", "0px");
    });
  }
  document.querySelectorAll("[data-scroll-campus]").forEach((button) => button.addEventListener("click", () => {
    document.querySelector("#campusStart")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  }));
}

function renderTracks() {
  const matches = filteredCourse();
  app.innerHTML = `
    <section class="discovery-hero" style="--discovery-image:url('assets/filters-library.webp')">
      <span class="image-brand image-brand-page" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
      <div><h1>Encontre uma aula.</h1></div>
      <aside class="discovery-search-card discovery-search-minimal">
        <label class="filter-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input id="filterSearch" value="${escapeHtml(state.filterQuery)}" placeholder="Ex.: pixel, oferta, criativos..." autocomplete="off" /></label>
      </aside>
    </section>
    <section class="filter-workspace">
      <div class="filter-row">${tracks.map((track) => `<button class="filter-chip ${track === state.filter ? "active" : ""}" data-filter="${track}">${track}</button>`).join("")}</div>
      <div class="filter-results-head"><h2 id="filterResultCount">${matches.length} ${matches.length === 1 ? "programa" : "programas"}</h2><button class="text-button" id="clearFilters">Limpar</button></div>
      <div class="filter-module-grid" id="filterModuleGrid">${matches.length ? matches.map(filterModuleCard).join("") : `<div class="filter-empty"><span>${icons.filter}</span><h3>Nada encontrado</h3></div>`}</div>
    </section>`;
  bindCommon();
  const filterInput = document.querySelector("#filterSearch");
  filterInput.addEventListener("input", () => {
    state.filterQuery = filterInput.value;
    const updated = filteredCourse();
    document.querySelector("#filterResultCount").textContent = `${updated.length} ${updated.length === 1 ? "programa" : "programas"}`;
    const grid = document.querySelector("#filterModuleGrid");
    grid.innerHTML = updated.length ? updated.map(filterModuleCard).join("") : `<div class="filter-empty"><span>${icons.filter}</span><h3>Nada encontrado</h3></div>`;
    bindModuleLinks(grid);
  });
  document.querySelector("#clearFilters").addEventListener("click", () => {
    state.filter = "Todas";
    state.filterQuery = "";
    renderTracks();
    document.querySelector("#filterSearch").focus();
  });
}

function renderModule(moduleId) {
  const module = course.find((item) => item.id === moduleId) || course[0];
  const progress = moduleProgress(module);
  const award = awardFor(module);
  const remaining = module.lessons.length - progress.done;
  app.innerHTML = `
    <section class="module-hero" style="${storyVisualStyle(module, 6)}">
      <span class="image-brand image-brand-module" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
      <article class="module-intro">
        <button class="back-button" data-back="tracks">${icons.back} Voltar para filtros</button>
        <h1>${module.title}</h1>
      </article>
      <aside class="module-summary"><strong>${progress.percent}%</strong><div class="progress-track"><span style="width:${progress.percent}%;background:${module.color}"></span></div><small>${progress.done}/${module.lessons.length} aulas</small></aside>
    </section>
    <div class="section-head"><h2>Aulas</h2></div>
    <section class="lesson-list">
      ${module.lessons.map((lesson) => `
        <article class="lesson-row" data-lesson="${lesson.id}" tabindex="0" role="button">
          <span class="lesson-play">${icons.play}</span>
          <span class="lesson-copy"><strong>${String(lesson.order).padStart(2, "0")} · ${lesson.title}</strong></span>
          <span class="lesson-duration">${lesson.duration}</span>
          <span class="check-dot ${state.completed.has(lesson.id) ? "done" : ""}">${icons.check}</span>
        </article>`).join("")}
    </section>
    <section class="module-award-panel ${progress.percent === 100 ? "unlocked" : "locked"}">
      <span class="award-medal">${progress.percent === 100 ? icons.award : icons.lock}</span>
      <div><h2>${award.title}</h2><p>${progress.percent === 100 ? "Título conquistado" : `${remaining} ${remaining === 1 ? "aula restante" : "aulas restantes"}`}</p></div>
      ${progress.percent === 100 ? `<button class="text-button" data-view-jump="formation">Ver formação ${icons.arrow}</button>` : `<strong>${progress.percent}%</strong>`}
    </section>`;
  bindCommon();
}

function lessonEditorial(lesson) {
  return window.lessonContent?.[lesson.title] || {
    result: lesson.module.description,
    body: [],
    practice: "Aplique o conceito ao ativo em que você está trabalhando agora.",
    practiceLabel: "Faça agora",
    steps: "Revise o objetivo, escolha uma ação pequena e finalize um ativo observável antes de seguir.",
    example: "Use a sua operação atual como referência e mantenha apenas o que pode ser verificado.",
    chatgpt: "Atue como um tutor de marketing direto. Ajude-me a aplicar esta aula ao meu produto sem inventar dados. Antes de responder, peça o contexto que estiver faltando.",
    ready: "Existe uma decisão ou um ativo concluído que permite avançar.",
    avoid: "Acumular conteúdo sem transformar a aula em uma decisão prática.",
    visual: "Mapa prático da aula.",
  };
}

function lessonSteps(value) {
  return String(value || "").split(/;\s*/).map((step) => step.trim()).filter(Boolean);
}

function lessonConcepts(editorial) {
  const paragraphs = editorial.body?.filter(Boolean) || [];
  return (paragraphs.length ? paragraphs : [editorial.result]).slice(0, 3);
}

function lessonVisualModel(item) {
  const title = item.title.toLocaleLowerCase("pt-BR");
  if (/cpa máximo|ponto de equilíbrio/.test(title)) return { type: "formula", items: [["Receita", "ticket médio"], ["− Custos", "taxas e entrega"], ["= Margem", "limite da mídia"]] };
  if (/cpm, ctr|conversão/.test(title)) return { type: "metrics", items: [["CPM", "entrega"], ["CTR", "atenção"], ["CPC", "clique"], ["CVR", "compra"]] };
  if (/pixel|rastreamento/.test(title)) return { type: "flow", items: [["Visita", "página"], ["Checkout", "intenção"], ["Compra", "receita"]] };
  if (/funil|jornada|tráfego na operação|diagnóstico/.test(title)) return { type: "funnel", items: [["Anúncio", "chama"], ["Página", "convence"], ["Checkout", "vende"], ["Entrega", "retém"]] };
  if (/teste|criativo/.test(title)) return { type: "matrix", items: [["Hipótese", "o que aprender"], ["Variável", "uma por vez"], ["Janela", "quando avaliar"], ["Decisão", "manter ou mudar"]] };
  if (/30 dias|rotina|ritual|publicação/.test(title)) return { type: "timeline", items: [["Planejar", "prioridade"], ["Executar", "ativo"], ["Medir", "sinal"], ["Ajustar", "próximo ciclo"]] };
  if (/ângulo|hook|roteiro|copy|página/.test(title)) return { type: "story", items: [["Hook", "pare"], ["Valor", "entenda"], ["Prova", "acredite"], ["CTA", "aja"]] };
  if (/público|nicho|demanda|pesquisa/.test(title)) return { type: "radar", items: [["Pessoa", "contexto"], ["Problema", "prioridade"], ["Linguagem", "palavras reais"]] };
  if (/oferta|produto|preço|garantia|upsell|bump/.test(title)) return { type: "stack", items: [["Problema", "específico"], ["Solução", "aplicável"], ["Valor", "percebido"], ["Risco", "reduzido"]] };
  return { type: "flow", items: [["Entender", "clareza"], ["Construir", "ativo"], ["Validar", "evidência"]] };
}

function renderLessonDiagram(item, editorial) {
  const model = lessonVisualModel(item);
  return `<figure class="lesson-diagram lesson-diagram-${model.type}">
    <div class="lesson-diagram-grid">${model.items.map(([label, note], index) => `<div class="diagram-node"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(note)}</small></div>`).join("")}</div>
    <figcaption>${escapeHtml(editorial.visual || "Mapa visual da aula")}</figcaption>
  </figure>`;
}

function renderOfficialSources(item) {
  const sources = officialLessonSources[item.title] || [];
  if (!sources.length) return "";
  return `<div class="lesson-sources"><span>Referências oficiais</span>${sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ${icons.arrow}</a>`).join("")}</div>`;
}

function lessonSummaryText(item, editorial) {
  return [
    item.title,
    `Resultado: ${editorial.result}`,
    `${editorial.practiceLabel || "Faça agora"}: ${editorial.practice}`,
    `Critério de pronto: ${editorial.ready}`,
    `Evite: ${editorial.avoid}`,
  ].filter(Boolean).join("\n\n");
}

function renderLesson(lessonId) {
  const item = lessonMap.get(lessonId) || firstIncomplete();
  const { module } = item;
  const moduleLessonIndex = module.lessons.findIndex((lesson) => lesson.id === item.id);
  const next = module.lessons[moduleLessonIndex + 1] || course[module.index]?.lessons[0] || null;
  const completed = state.completed.has(item.id);
  const favorite = state.favorites.has(item.id);
  const editorial = lessonEditorial(item);
  const story = storyFor(module.id);
  const concepts = lessonConcepts(editorial);
  const steps = lessonSteps(editorial.steps);
  const slideCount = 6;
  app.innerHTML = `
    <button class="back-button" data-module-link="${module.id}">${icons.back} ${module.title}</button>
    <section class="lesson-layout">
      <div class="lesson-main" id="lessonPrintArea">
        <section class="lesson-deck" tabindex="0" aria-label="Aula em ${slideCount} etapas">
          <header class="lesson-deck-header">
            <div><span>${module.title}</span><strong>${String(item.order).padStart(2, "0")} · ${item.duration}</strong></div>
            <div class="lesson-slide-status" aria-live="polite"><span data-slide-current>1</span> / ${slideCount}</div>
          </header>
          <div class="lesson-slide-viewport">
            <div class="lesson-slide-track">
              <article class="lesson-slide lesson-slide-cover is-active" aria-hidden="false" style="${storyVisualStyle(module, item.order, true)}">
                <span class="lesson-cover-shade"></span>
                <span class="image-brand image-brand-video" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
                <div class="lesson-cover-copy">
                  <span class="lesson-slide-eyebrow">Aula ${String(item.order).padStart(2, "0")} · ${escapeHtml(story.title)}</span>
                  <h1>${escapeHtml(item.title)}</h1>
                  <p>${escapeHtml(editorial.result)}</p>
                  <button class="lesson-inline-next" data-slide-next>Começar ${icons.arrow}</button>
                </div>
              </article>
              <article class="lesson-slide" aria-hidden="true" inert style="${lessonSlideVisualStyle(module, item.order, 2)}">
                <div class="lesson-slide-copy">
                  <span class="lesson-slide-eyebrow">01 · Entenda</span>
                  <h2>A ideia sem complicação.</h2>
                  <div class="lesson-concept-grid">${concepts.map((paragraph, index) => `<article><span>0${index + 1}</span><p>${escapeHtml(paragraph)}</p></article>`).join("")}</div>
                </div>
              </article>
              <article class="lesson-slide" aria-hidden="true" inert style="${lessonSlideVisualStyle(module, item.order, 3)}">
                <div class="lesson-slide-copy lesson-slide-copy-wide">
                  <span class="lesson-slide-eyebrow">02 · Visualize</span>
                  <h2>Veja como as peças se conectam.</h2>
                  ${renderLessonDiagram(item, editorial)}
                  ${editorial.example ? `<div class="lesson-example"><span>Exemplo realista</span><p>${escapeHtml(editorial.example)}</p></div>` : ""}
                </div>
              </article>
              <article class="lesson-slide" aria-hidden="true" inert style="${lessonSlideVisualStyle(module, item.order, 4)}">
                <div class="lesson-slide-copy lesson-slide-copy-wide">
                  <span class="lesson-slide-eyebrow">03 · Faça agora</span>
                  <h2>${escapeHtml(editorial.practiceLabel === "Referência de bolso" ? "Leve esta referência." : "Saia com algo pronto.")}</h2>
                  <div class="lesson-action-brief"><span>${icons.check}</span><p>${escapeHtml(editorial.practice)}</p></div>
                  ${steps.length ? `<ol class="lesson-step-list">${steps.map((step, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${escapeHtml(step)}</p></li>`).join("")}</ol>` : ""}
                </div>
              </article>
              <article class="lesson-slide" aria-hidden="true" inert style="${lessonSlideVisualStyle(module, item.order, 5)}">
                <div class="lesson-slide-copy lesson-slide-copy-wide lesson-ai-slide">
                  <span class="lesson-slide-eyebrow">04 · Acelere com IA</span>
                  <h2>Use o ChatGPT como assistente.</h2>
                  <div class="lesson-prompt-card"><p>${escapeHtml(editorial.chatgpt)}</p><button class="prompt-copy-button" data-copy-prompt="${encodeURIComponent(editorial.chatgpt)}">Copiar prompt</button></div>
                  <small>Complete os campos entre colchetes. Revise fatos, números, regras e a voz da sua marca antes de usar.</small>
                </div>
              </article>
              <article class="lesson-slide" aria-hidden="true" inert style="${lessonSlideVisualStyle(module, item.order, 6)}">
                <div class="lesson-slide-copy lesson-slide-copy-wide">
                  <span class="lesson-slide-eyebrow">05 · Valide</span>
                  <h2>Pronto para avançar?</h2>
                  <div class="lesson-check-grid"><article class="ready"><span>${icons.check}</span><div><strong>Critério de pronto</strong><p>${escapeHtml(editorial.ready)}</p></div></article><article class="warning"><span>!</span><div><strong>Evite este erro</strong><p>${escapeHtml(editorial.avoid)}</p></div></article></div>
                  ${renderOfficialSources(item)}
                  <div class="lesson-finish-actions"><button class="primary-button" data-complete-lesson>${icons.check} ${completed ? "Aula concluída" : "Marcar como concluída"}</button>${next ? `<button class="secondary-button" data-lesson="${next.id}">Próxima aula ${icons.arrow}</button>` : ""}</div>
                </div>
              </article>
            </div>
          </div>
          <footer class="lesson-deck-controls">
            <button class="lesson-slide-arrow" data-slide-prev disabled aria-label="Slide anterior">${icons.back}</button>
            <div class="lesson-slide-dots" aria-label="Etapas da aula">${Array.from({ length: slideCount }, (_, index) => `<button class="${index === 0 ? "active" : ""}" data-slide-to="${index}" aria-label="Ir para etapa ${index + 1}"><span>${String(index + 1).padStart(2, "0")}</span></button>`).join("")}</div>
            <button class="lesson-slide-arrow" data-slide-next aria-label="Próximo slide">${icons.arrow}</button>
          </footer>
        </section>
      </div>
      <aside class="lesson-sidebar">
        <article class="side-panel"><h2>Resumo da aula</h2><button class="resource-card" id="copyLessonSummary"><span>${icons.layers}</span><span><strong>Copiar resumo prático</strong><small>Resultado, ação e critério</small></span></button></article>
        <article class="side-panel lesson-progress-panel">
          <div class="lesson-progress-head"><span>Progresso do módulo</span><strong>${moduleProgress(module).percent}%</strong></div>
          <div class="progress-track"><span style="width:${moduleProgress(module).percent}%;background:${module.color}"></span></div>
          <div class="lesson-sidebar-actions">
            <button class="primary-button" data-complete-lesson>${icons.check} ${completed ? "Aula concluída" : "Marcar como concluída"}</button>
            <button class="secondary-button" data-favorite-lesson>${icons.star} ${favorite ? "Favoritada" : "Favoritar"}</button>
          </div>
        </article>
        ${next ? `<article class="next-card"><span>Próxima</span><strong>${next.title}</strong><button class="secondary-button" data-lesson="${next.id}">Abrir ${icons.arrow}</button></article>` : ""}
      </aside>
    </section>`;
  const deck = document.querySelector(".lesson-deck");
  const track = deck.querySelector(".lesson-slide-track");
  const slides = [...deck.querySelectorAll(".lesson-slide")];
  const dots = [...deck.querySelectorAll("[data-slide-to]")];
  const previousButton = deck.querySelector("[data-slide-prev]");
  const footerNextButton = deck.querySelector(".lesson-deck-controls [data-slide-next]");
  const nextButtons = [...deck.querySelectorAll("[data-slide-next]")];
  let activeSlide = 0;
  const setSlide = (index, focus = false) => {
    activeSlide = Math.max(0, Math.min(slides.length - 1, index));
    track.style.transform = `translate3d(-${activeSlide * 100}%, 0, 0)`;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeSlide;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");
      slide.toggleAttribute("inert", !active);
    });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === activeSlide));
    deck.querySelector("[data-slide-current]").textContent = activeSlide + 1;
    previousButton.disabled = activeSlide === 0;
    footerNextButton.disabled = activeSlide === slides.length - 1;
    if (focus) {
      deck.focus({ preventScroll: true });
      const deckTop = deck.getBoundingClientRect().top;
      if (deckTop < 78 || deckTop > 118) window.scrollTo({ top: window.scrollY + deckTop - 88, behavior: "smooth" });
    }
  };
  previousButton.addEventListener("click", () => setSlide(activeSlide - 1, true));
  nextButtons.forEach((button) => button.addEventListener("click", () => setSlide(activeSlide + 1, true)));
  dots.forEach((button) => button.addEventListener("click", () => setSlide(Number(button.dataset.slideTo), true)));
  deck.addEventListener("keydown", (event) => {
    if (event.target.closest("button, a, input, textarea")) return;
    if (event.key === "ArrowRight") { event.preventDefault(); setSlide(activeSlide + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); setSlide(activeSlide - 1); }
  });
  let swipeStart = 0;
  deck.querySelector(".lesson-slide-viewport").addEventListener("pointerdown", (event) => { swipeStart = event.clientX; });
  deck.querySelector(".lesson-slide-viewport").addEventListener("pointerup", (event) => {
    const distance = event.clientX - swipeStart;
    if (Math.abs(distance) < 55) return;
    setSlide(activeSlide + (distance < 0 ? 1 : -1));
  });
  const toggleCompletion = async () => {
    const wasModuleComplete = moduleIsComplete(module);
    const markingComplete = !state.completed.has(item.id);
    try {
      if (window.LowLabAuth?.user) {
        const result = await window.LowLabAuth.setLessonCompletion(item.id, markingComplete);
        state.completed = new Set(result.completed_lessons || []);
        state.completionDate = result.completion_date || "";
        state.certificateCode = result.certificate_code || "";
      } else {
        markingComplete ? state.completed.add(item.id) : state.completed.delete(item.id);
      }
    } catch {
      showToast("Não foi possível salvar. Confira sua conexão e tente novamente.");
      return;
    }
    if (state.completionDate) localStorage.setItem("lowlab-completion-date", state.completionDate);
    else localStorage.removeItem("lowlab-completion-date");
    if (state.certificateCode) localStorage.setItem("lowlab-certificate-code", state.certificateCode);
    else localStorage.removeItem("lowlab-certificate-code");
    persist();
    const unlockedNow = markingComplete && !wasModuleComplete && moduleIsComplete(module);
    renderLesson(item.id);
    if (unlockedNow) showAchievement(awardFor(module));
    else showToast(state.completed.has(item.id) ? "Aula marcada como concluída." : "Conclusão removida.");
  };
  document.querySelectorAll("[data-complete-lesson]").forEach((button) => button.addEventListener("click", toggleCompletion));
  document.querySelector("[data-favorite-lesson]").addEventListener("click", () => {
    state.favorites.has(item.id) ? state.favorites.delete(item.id) : state.favorites.add(item.id);
    persist();
    showToast(state.favorites.has(item.id) ? "Aula adicionada aos favoritos." : "Aula removida dos favoritos.");
    renderLesson(item.id);
  });
  document.querySelector("#copyLessonSummary").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(lessonSummaryText(item, editorial));
      showToast("Resumo prático copiado.");
    } catch {
      showToast("Não foi possível copiar neste navegador.");
    }
  });
  document.querySelectorAll("[data-copy-prompt]").forEach((button) => button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(decodeURIComponent(button.dataset.copyPrompt));
      showToast("Prompt copiado. Complete os campos entre colchetes.");
    } catch {
      showToast("Não foi possível copiar neste navegador.");
    }
  }));
  bindCommon();
}

function renderFavorites() {
  const items = [...state.favorites].map((id) => lessonMap.get(id)).filter(Boolean);
  app.innerHTML = `
    <section class="favorites-hero" style="--favorites-image:url('assets/favorites-library.webp')">
      <span class="image-brand image-brand-page" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
      <div><h1>Favoritos.</h1></div>
      <aside><strong>${items.length}</strong><span>${items.length === 1 ? "aula guardada" : "aulas guardadas"}</span></aside>
    </section>
    ${items.length ? `
      <section class="favorites-section">
        <div class="favorite-grid">${items.map((item) => `
          <article class="favorite-card" data-lesson="${item.id}" tabindex="0" role="button" aria-label="Abrir aula ${item.title}">
            <div class="favorite-card-image" ${deferredStoryAttributes(item.module, item.order, true)}><span class="image-brand image-brand-card" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span><span class="favorite-card-play">${icons.play}</span></div>
            <div><h3>${item.title}</h3><p>${item.module.title} · ${item.duration}</p></div>
          </article>`).join("")}</div>
      </section>` : `
      <div class="empty-state visual-empty"><span>${icons.star}</span><h2>Nenhum favorito ainda.</h2><button class="primary-button" data-view-jump="home">Ver aulas ${icons.arrow}</button></div>`}`;
  bindCommon();
}

function formatCompletionDate() {
  if (!state.completionDate) return "";
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(state.completionDate));
}

function renderFormation() {
  const total = lessonMap.size;
  const completed = state.completed.size;
  const percent = Math.round((completed / total) * 100);
  const achievements = unlockedAwards();
  const current = achievements.at(-1);
  const finished = completed === total && Boolean(state.completionDate && state.certificateCode);
  const displayName = escapeHtml(state.studentName || "Nome do aluno");
  app.innerHTML = `
    <section class="formation-hero">
      <span class="image-brand image-brand-page" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
      <div><h1>Formação.</h1></div>
      <aside class="formation-status">
        <strong>${current?.title || "Primeira conquista em construção"}</strong>
        <div class="progress-track"><span style="width:${percent}%"></span></div>
        <small>${completed} de ${total} aulas · ${achievements.length} de ${academicTitles.length} títulos</small>
      </aside>
    </section>

    <section class="formation-section">
      <div class="section-head"><h2>Títulos</h2><button class="text-button" data-view-jump="plan">Plano de 30 dias ${icons.arrow}</button></div>
      <div class="achievement-grid">
        ${academicTitles.map((award) => {
          const module = course.find((item) => item.id === award.moduleId);
          const unlocked = moduleIsComplete(module);
          return `<article class="achievement-card ${unlocked ? "unlocked" : "locked"}" data-module="${module.id}" tabindex="0" role="button" aria-label="Abrir programa ${module.title}"><div class="achievement-visual" ${deferredStoryAttributes(module, 6)}><span class="achievement-number">${String(award.level).padStart(2, "0")}</span><span class="image-brand image-brand-achievement" aria-hidden="true"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span><span class="achievement-icon">${unlocked ? icons.award : icons.lock}</span></div><div class="achievement-copy"><strong>${award.title}</strong><p>${unlocked ? "Conquistado" : `${moduleProgress(module).percent}%`}</p></div></article>`;
        }).join("")}
      </div>
    </section>

    <section class="certificate-zone">
      <div class="section-head"><div><h2>Certificado</h2><p>${finished ? "Confirme o nome para emitir." : `${total - completed} aulas restantes.`}</p></div></div>
      ${finished ? `
        <div class="certificate-actions">
          <label for="studentName">Nome que aparecerá no certificado</label>
          <div><input id="studentName" maxlength="90" value="${escapeHtml(state.studentName)}" placeholder="Digite seu nome completo" /><button class="secondary-button" id="saveStudentName">Confirmar nome</button><button class="primary-button" id="printCertificate" ${state.studentName ? "" : "disabled"}>${icons.file} Imprimir ou salvar em PDF</button></div>
        </div>
        <article class="certificate-document" id="certificatePage">
          <div class="certificate-border">
            <header><img src="assets/lowlab-symbol-ui.png" alt="Símbolo LowLab" decoding="async" /><span>LOWLAB</span><small>Universidade digital de negócios</small></header>
            <div class="certificate-copy"><span>Certificado de conclusão</span><h2>Formação Livre em<br>Operações Low Ticket</h2><p>Certificamos que</p><h3>${displayName}</h3><p>concluiu integralmente a formação LowLab, com conteúdo aplicado em produto, oferta, conteúdo orgânico, tráfego direto, métricas, escala e operação digital.</p><strong>Marco final interno: Operador LowLab</strong></div>
            <footer><div><small>Conclusão</small><strong>${formatCompletionDate()}</strong></div><div><small>Carga concluída</small><strong>${total} aulas</strong></div><div><small>Código de confirmação</small><strong>${escapeHtml(state.certificateCode)}</strong></div></footer>
            <p class="certificate-disclaimer">Certificado de conclusão de formação livre. Não equivale a graduação ou título acadêmico reconhecido pelo MEC e não garante resultado financeiro.</p>
          </div>
        </article>` : `
        <article class="certificate-locked">
          <span>${icons.lock}</span><div><strong>Disponível em 100%</strong></div><div class="certificate-progress"><b>${percent}%</b><div class="progress-track"><span style="width:${percent}%"></span></div></div>
        </article>`}
    </section>`;
  bindCommon();
  if (finished) {
    document.querySelector("#saveStudentName").addEventListener("click", () => {
      const name = document.querySelector("#studentName").value.trim().replace(/\s+/g, " ");
      if (name.length < 3) { showToast("Digite o nome completo para confirmar o certificado."); return; }
      state.studentName = name.slice(0, 90);
      localStorage.setItem("lowlab-student-name", state.studentName);
      window.LowLabAuth?.syncFromLocalStorage();
      renderFormation();
      updateProgress();
      showToast("Nome confirmado no certificado.");
    });
    document.querySelector("#printCertificate").addEventListener("click", () => {
      if (!state.studentName) { document.querySelector("#studentName").focus(); showToast("Confirme o nome antes de emitir o certificado."); return; }
      window.print();
    });
  }
}

function saveProfileSection(section, form) {
  const values = Object.fromEntries(new FormData(form).entries());
  if (section === "personal") {
    state.profile = { ...state.profile, ...values };
    state.studentName = values.fullName.trim().replace(/\s+/g, " ").slice(0, 90);
    state.profile.fullName = state.studentName;
    localStorage.setItem("lowlab-student-name", state.studentName);
  } else {
    state.profile.address = values;
  }
  localStorage.setItem("lowlab-profile", JSON.stringify(state.profile));
  window.LowLabAuth?.syncFromLocalStorage();
  updateProgress();
  renderProfile();
  showToast("Perfil salvo com segurança.");
}

function profilePersonalPanel() {
  return `
    <form class="profile-form" id="personalProfileForm">
      <div class="profile-field profile-field-wide"><label for="profileFullName">Nome completo</label><input id="profileFullName" name="fullName" maxlength="90" value="${escapeHtml(state.profile.fullName || "")}" placeholder="Seu nome" autocomplete="name" /></div>
      <div class="profile-field"><label for="profileEmail">E-mail de acesso</label><input id="profileEmail" name="email" type="email" maxlength="120" value="${escapeHtml(state.profile.email || "")}" autocomplete="email" readonly /></div>
      <div class="profile-field"><label for="profilePhone">Telefone</label><input id="profilePhone" name="phone" maxlength="24" value="${escapeHtml(state.profile.phone || "")}" placeholder="(00) 00000-0000" autocomplete="tel" /></div>
      <div class="profile-field"><label for="profileBirthDate">Nascimento</label><input id="profileBirthDate" name="birthDate" type="date" value="${escapeHtml(state.profile.birthDate || "")}" autocomplete="bday" /></div>
      <div class="profile-form-action"><span>Preenchimento opcional</span><button class="primary-button" type="submit">Salvar dados</button></div>
    </form>`;
}

function profileAddressPanel() {
  const address = state.profile.address || {};
  return `
    <form class="profile-form" id="addressProfileForm">
      <div class="profile-field"><label for="profilePostalCode">CEP</label><input id="profilePostalCode" name="postalCode" maxlength="10" value="${escapeHtml(address.postalCode || "")}" placeholder="00000-000" autocomplete="postal-code" /></div>
      <div class="profile-field profile-field-wide"><label for="profileStreet">Endereço</label><input id="profileStreet" name="street" maxlength="120" value="${escapeHtml(address.street || "")}" placeholder="Rua ou avenida" autocomplete="address-line1" /></div>
      <div class="profile-field"><label for="profileNumber">Número</label><input id="profileNumber" name="number" maxlength="12" value="${escapeHtml(address.number || "")}" placeholder="Número" /></div>
      <div class="profile-field"><label for="profileComplement">Complemento</label><input id="profileComplement" name="complement" maxlength="60" value="${escapeHtml(address.complement || "")}" placeholder="Opcional" autocomplete="address-line2" /></div>
      <div class="profile-field"><label for="profileDistrict">Bairro</label><input id="profileDistrict" name="district" maxlength="70" value="${escapeHtml(address.district || "")}" placeholder="Bairro" /></div>
      <div class="profile-field"><label for="profileCity">Cidade</label><input id="profileCity" name="city" maxlength="70" value="${escapeHtml(address.city || "")}" placeholder="Cidade" autocomplete="address-level2" /></div>
      <div class="profile-field"><label for="profileState">Estado</label><input id="profileState" name="state" maxlength="2" value="${escapeHtml(address.state || "")}" placeholder="UF" autocomplete="address-level1" /></div>
      <div class="profile-form-action"><span>Preenchimento opcional</span><button class="primary-button" type="submit">Salvar endereço</button></div>
    </form>`;
}

function profileCertificatesPanel() {
  const finished = state.completed.size === lessonMap.size && Boolean(state.completionDate && state.certificateCode);
  return `
    <div class="profile-certificate-list">
      ${academicTitles.map((award) => {
        const module = course.find((item) => item.id === award.moduleId);
        const unlocked = moduleIsComplete(module);
        return `<button class="profile-certificate ${unlocked ? "unlocked" : ""}" data-module="${module.id}"><span class="profile-certificate-medal">${unlocked ? icons.award : icons.lock}</span><span><small>${String(award.level).padStart(2, "0")}</small><strong>${award.title}</strong></span><b>${unlocked ? "Conquistado" : `${moduleProgress(module).percent}%`}</b></button>`;
      }).join("")}
    </div>
    <article class="profile-diploma ${finished ? "unlocked" : ""}">
      <span>${finished ? icons.award : icons.lock}</span>
      <div><strong>Certificado LowLab</strong><small>${finished ? "Disponível para emissão" : `${Math.round((state.completed.size / lessonMap.size) * 100)}% concluído`}</small></div>
      <button class="secondary-button" data-view-jump="formation">${finished ? "Abrir certificado" : "Ver formação"}</button>
    </article>`;
}

function renderProfile() {
  const tabs = [
    ["personal", "Dados pessoais", icons.user],
    ["address", "Endereço", icons.pin],
    ["certificates", "Certificados", icons.award],
  ];
  const savedFields = [state.profile.fullName, state.profile.email, state.profile.phone, state.profile.birthDate].filter(Boolean).length;
  const profileName = state.profile.fullName || "Seu perfil";
  app.innerHTML = `
    <section class="profile-hero">
      <span class="profile-hero-mark"><img src="assets/lowlab-symbol-ui.png" alt="" decoding="async" /></span>
      <div><small>Cadastro opcional</small><h1>${escapeHtml(profileName)}</h1></div>
      <span class="profile-hero-status">${savedFields ? `${savedFields} dados salvos` : "Comece quando quiser"}</span>
    </section>
    <nav class="profile-tabs" aria-label="Seções do perfil">
      ${tabs.map(([id, label, icon]) => `<button class="profile-tab ${state.profileTab === id ? "active" : ""}" data-profile-tab="${id}">${icon}<span>${label}</span></button>`).join("")}
    </nav>
    <section class="profile-panel">
      ${state.profileTab === "address" ? profileAddressPanel() : state.profileTab === "certificates" ? profileCertificatesPanel() : profilePersonalPanel()}
    </section>
    ${state.profileTab !== "certificates" ? `<p class="profile-storage-note">Seus dados acompanham sua conta LowLab.</p>` : ""}`;
  bindCommon();
  document.querySelectorAll("[data-profile-tab]").forEach((button) => button.addEventListener("click", () => {
    state.profileTab = button.dataset.profileTab;
    renderProfile();
  }));
  document.querySelector("#personalProfileForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) saveProfileSection("personal", event.currentTarget);
  });
  document.querySelector("#addressProfileForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    saveProfileSection("address", event.currentTarget);
  });
}

const planDays = [
  { phase: "Fundação", title: "Entenda o jogo e escolha sua meta", lessons: ["fundamentos-1", "fundamentos-2"], deliverable: "Desenhe em uma página como produto, oferta, tráfego e entrega se conectam." },
  { phase: "Fundação", title: "Transforme a meta em rotina", lessons: ["fundamentos-3", "fundamentos-4"], deliverable: "Defina meta, limite de investimento e um horário fixo para executar o plano." },
  { phase: "Oferta", title: "Encontre uma demanda real", lessons: ["nicho-oferta-1", "nicho-oferta-2", "nicho-oferta-3"], deliverable: "Escolha um problema específico e registre 20 frases reais usadas pelo público." },
  { phase: "Oferta", title: "Feche a promessa e a oferta-base", lessons: ["nicho-oferta-4", "nicho-oferta-5"], deliverable: "Escreva promessa, preço, garantia e componentes da primeira oferta." },
  { phase: "Produto", title: "Projete o produto mínimo", lessons: ["produto-1", "produto-2", "produto-3"], deliverable: "Escolha o formato e crie o sumário completo da transformação." },
  { phase: "Produto", title: "Produza e prepare a primeira vitória", lessons: ["produto-4", "produto-5"], deliverable: "Finalize a versão mínima do produto e o passo inicial do comprador." },
  { phase: "Página", title: "Escreva a mensagem que vende", lessons: ["copy-pagina-1", "copy-pagina-2", "copy-pagina-3"], deliverable: "Rascunhe headline, mecanismo, benefícios e provas verificáveis." },
  { phase: "Página", title: "Coloque a página no ar", lessons: ["copy-pagina-4", "copy-pagina-5"], deliverable: "Publique uma página curta com objeções, garantia, FAQ e CTA." },
  { phase: "Funil", title: "Monte checkout e complemento", lessons: ["funil-1", "funil-2"], deliverable: "Configure checkout e um order bump realmente complementar." },
  { phase: "Funil", title: "Conecte venda, entrega e suporte", lessons: ["funil-3", "funil-4"], deliverable: "Teste a compra ponta a ponta, incluindo upsell, acesso e recuperação." },
  { phase: "Orgânico", title: "Defina posicionamento e pilares", lessons: ["organico-conteudo-1", "organico-conteudo-2"], deliverable: "Escreva seu posicionamento e quatro pilares de conteúdo." },
  { phase: "Orgânico", title: "Crie roteiros que geram confiança", lessons: ["organico-conteudo-3", "organico-conteudo-4"], deliverable: "Produza cinco roteiros curtos, incluindo um conteúdo de prova." },
  { phase: "Orgânico", title: "Publique e faça a primeira oferta", lessons: ["organico-conteudo-5", "organico-conteudo-6"], deliverable: "Publique, abra conversas nos stories e apresente a oferta." },
  { phase: "Publicação", title: "Crie o banco e produza em lote", lessons: ["organico-maquina-1", "organico-maquina-2"], deliverable: "Monte 30 ideias e deixe uma semana de conteúdo preparada." },
  { phase: "Publicação", title: "Ative a máquina semanal", lessons: ["organico-maquina-3", "organico-maquina-4"], deliverable: "Defina calendário de distribuição e painel simples de métricas." },
  { phase: "Tráfego", title: "Prepare a estrutura de anúncios", lessons: ["trafego-pago-1", "trafego-pago-2"], deliverable: "Organize conta, página, gerenciador e acessos necessários." },
  { phase: "Tráfego", title: "Instale e valide o rastreamento", lessons: ["trafego-pago-3", "trafego-pago-4"], deliverable: "Teste os eventos e deixe a campanha de validação configurada em rascunho." },
  { phase: "Tráfego", title: "Feche público e segurança", lessons: ["trafego-pago-5", "trafego-pago-6"], deliverable: "Revise políticas, defina público e deixe a campanha aprovada em rascunho." },
  { phase: "Criativos", title: "Escolha ângulos e formatos", lessons: ["criativos-1", "criativos-2"], deliverable: "Defina três ângulos e roteirize duas demonstrações éticas." },
  { phase: "Criativos", title: "Produza e publique a matriz", lessons: ["criativos-3", "criativos-4"], deliverable: "Crie seis peças, documente a variável de cada uma e publique o teste controlado." },
  { phase: "Criativos", title: "Prepare a leitura sem agir cedo", lessons: ["criativos-5"], deliverable: "Registre hipótese, janela mínima e critério de decisão antes de alterar a campanha." },
  { phase: "Métricas", title: "Conheça o limite econômico", lessons: ["metricas-1", "metricas-2"], deliverable: "Calcule CPA máximo e monte uma leitura de CPM, CTR, CPC e conversão." },
  { phase: "Métricas", title: "Crie o ritual de otimização", lessons: ["metricas-3", "metricas-4"], deliverable: "Diagnostique o gargalo e faça a primeira revisão de 20 minutos." },
  { phase: "Escala", title: "Planeje crescimento com critério", lessons: ["escala-1", "escala-2", "escala-3"], deliverable: "Defina o sinal de escala e desenhe a próxima oferta da esteira." },
  { phase: "Escala", title: "Aumente valor e retenção", lessons: ["escala-4", "escala-5"], deliverable: "Escolha uma ação de retenção, reativação ou recorrência para testar." },
  { phase: "Operação", title: "Organize painel e atendimento", lessons: ["operacao-1", "operacao-2"], deliverable: "Crie o painel semanal e respostas-padrão para as dúvidas principais." },
  { phase: "Operação", title: "Proteja dados e reputação", lessons: ["operacao-3", "operacao-4"], deliverable: "Revise consentimento, privacidade, provas e promessas publicadas." },
  { phase: "Aceleração", title: "Fortaleça a oferta com transparência", lessons: ["aceleradores-1", "aceleradores-2"], deliverable: "Aprimore oferta, urgência e escassez usando apenas fatos verificáveis." },
  { phase: "Aceleração", title: "Ative prova e prospecção responsável", lessons: ["aceleradores-3", "aceleradores-4"], deliverable: "Crie o pedido de depoimento e uma cadência curta com opt-in." },
  { phase: "Aceleração", title: "Conclua com a operação rodando", lessons: ["aceleradores-5", "aceleradores-6"], deliverable: "Documente o plano B, ative o follow-up e escolha o próximo teste com base nos dados." },
];

function planLessons(day) {
  return day.lessons.map((id) => lessonMap.get(id)).filter(Boolean);
}

function planMinutes(day) {
  return planLessons(day).reduce((total, lesson) => total + Number.parseInt(lesson.duration, 10), 0);
}

function nextPlanDay() {
  return planDays.find((_, index) => !state.plan.has(index + 1)) || planDays.at(-1);
}

function renderPlan() {
  const completed = state.plan.size;
  const percent = Math.round((completed / planDays.length) * 100);
  const currentIndex = planDays.findIndex((_, index) => !state.plan.has(index + 1));
  const activeIndex = currentIndex === -1 ? planDays.length - 1 : currentIndex;
  const activeDay = planDays[activeIndex];
  const activeLessons = planLessons(activeDay);
  const phases = [...new Set(planDays.map((day) => day.phase))];
  app.innerHTML = `
    <section class="plan-hero">
      <div class="plan-hero-copy"><span class="eyebrow">Formação + execução</span><h1>30 dias para colocar em prática.</h1><p>63 aulas preservadas em um ritmo intensivo. Reserve de 2 a 3 horas por dia para estudar e executar.</p></div>
      <aside class="plan-hero-status"><strong>${completed}/30</strong><span>dias concluídos</span><div class="progress-track"><i style="width:${percent}%"></i></div><button class="primary-button" data-lesson="${activeLessons[0]?.id || "fundamentos-1"}">${completed === planDays.length ? "Rever a formação" : `Começar dia ${String(activeIndex + 1).padStart(2, "0")}`} ${icons.arrow}</button></aside>
    </section>
    <section class="plan-summary" aria-label="Resumo do plano"><article><strong>63</strong><span>aulas</span></article><article><strong>20h20</strong><span>conteúdo</span></article><article><strong>2–3</strong><span>aulas por dia</span></article><article><strong>2–3h</strong><span>estudo + prática</span></article></section>
    <section class="plan-current">
      <div><span class="eyebrow">${completed === planDays.length ? "Ciclo concluído" : "Faça agora"}</span><h2>${completed === planDays.length ? "Sua operação já tem uma base completa." : `Dia ${String(activeIndex + 1).padStart(2, "0")} · ${activeDay.title}`}</h2><p>${activeDay.deliverable}</p></div>
      <button class="secondary-button" data-scroll-plan="${activeIndex + 1}">${completed === planDays.length ? "Rever último dia" : "Ver agenda do dia"} ${icons.arrow}</button>
    </section>
    <div class="plan-phases">${phases.map((phase) => {
      const entries = planDays.map((day, index) => ({ day, index })).filter((entry) => entry.day.phase === phase);
      return `<section class="plan-phase"><header><span>${String(entries[0].index + 1).padStart(2, "0")}—${String(entries.at(-1).index + 1).padStart(2, "0")}</span><h2>${phase}</h2></header><div class="plan-grid">${entries.map(({ day, index }) => {
        const lessons = planLessons(day);
        const done = state.plan.has(index + 1);
        return `<article class="day-card ${done ? "done" : ""} ${index === activeIndex && !done ? "current" : ""}" id="plan-day-${index + 1}">
          <div class="day-top"><span>Dia ${String(index + 1).padStart(2, "0")}</span><span>${lessons.length} ${lessons.length === 1 ? "aula" : "aulas"} · ${planMinutes(day)} min</span></div>
          <h3>${day.title}</h3>
          <div class="day-lessons">${lessons.map((lesson) => `<button data-lesson="${lesson.id}"><span>${lesson.module.title}</span><strong>${String(lesson.order).padStart(2, "0")} · ${lesson.title}</strong></button>`).join("")}</div>
          <div class="day-deliverable"><span>Entrega do dia</span><p>${day.deliverable}</p></div>
          <button class="day-complete ${done ? "done" : ""}" data-day-toggle="${index + 1}" aria-pressed="${done}">${icons.check}<span>${done ? "Dia concluído" : "Marcar dia como concluído"}</span></button>
        </article>`;
      }).join("")}</div></section>`;
    }).join("")}</div>`;
  bindCommon();
  document.querySelector("[data-scroll-plan]")?.addEventListener("click", (event) => {
    document.querySelector(`#plan-day-${event.currentTarget.dataset.scrollPlan}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  document.querySelectorAll("[data-day-toggle]").forEach((button) => button.addEventListener("click", () => {
    const day = Number(button.dataset.dayToggle);
    state.plan.has(day) ? state.plan.delete(day) : state.plan.add(day);
    persist();
    renderPlan();
  }));
}

async function renderAdmin() {
  if (window.LowLabAuth?.profile?.role !== "admin") {
    navigate("home");
    return;
  }
  app.innerHTML = `
    <section class="admin-heading">
      <div><span class="eyebrow">Painel reservado</span><h1>Administração.</h1></div>
      <span class="admin-security">Acesso do proprietário</span>
    </section>
    <section class="admin-summary" id="adminSummary"><article><strong>—</strong><span>Alunos</span></article><article><strong>—</strong><span>Ativos</span></article><article><strong>—</strong><span>Conclusões</span></article></section>
    <section class="admin-students"><header><div><span class="eyebrow">Base LowLab</span><h2>Alunos e acessos</h2></div></header><div class="admin-loading">Carregando contas…</div></section>`;
  const client = window.LowLabAuth.client;
  const [{ data: profiles, error: profileError }, { data: progresses, error: progressError }] = await Promise.all([
    client.from("profiles").select("id,email,full_name,role,status,created_at").order("created_at", { ascending: false }),
    client.from("student_progress").select("user_id,completed_lessons,completion_date"),
  ]);
  if (profileError || progressError) {
    document.querySelector(".admin-students").innerHTML = `<div class="admin-empty">Não foi possível carregar os alunos agora.</div>`;
    return;
  }
  const progressMap = new Map((progresses || []).map((item) => [item.user_id, item]));
  const students = (profiles || []).filter((profile) => profile.role === "student");
  const active = students.filter((profile) => profile.status === "active").length;
  const complete = students.filter((profile) => Boolean(progressMap.get(profile.id)?.completion_date)).length;
  document.querySelector("#adminSummary").innerHTML = `<article><strong>${students.length}</strong><span>Alunos</span></article><article><strong>${active}</strong><span>Ativos</span></article><article><strong>${complete}</strong><span>Conclusões</span></article>`;
  document.querySelector(".admin-students").innerHTML = `
    <header><div><span class="eyebrow">Base LowLab</span><h2>Alunos e acessos</h2></div><span>${students.length} ${students.length === 1 ? "conta" : "contas"}</span></header>
    <div class="admin-student-list">
      ${students.length ? students.map((profile) => {
        const progress = progressMap.get(profile.id);
        const done = (progress?.completed_lessons || []).length;
        const percent = Math.round((done / lessonMap.size) * 100);
        const statusLabel = profile.status === "active" ? "Ativo" : profile.status === "pending" ? "Liberar" : "Suspenso";
        return `<article class="admin-student-row"><span class="admin-student-avatar">${escapeHtml((profile.full_name || profile.email || "A").slice(0, 1).toUpperCase())}</span><div><strong>${escapeHtml(profile.full_name || "Aluno LowLab")}</strong><small>${escapeHtml(profile.email)}</small></div><div class="admin-student-progress"><span>${percent}%</span><div class="progress-track"><i style="width:${percent}%"></i></div></div><button class="admin-status ${profile.status}" data-admin-user="${profile.id}" data-next-status="${profile.status === "active" ? "suspended" : "active"}">${statusLabel}</button></article>`;
      }).join("") : `<div class="admin-empty">Nenhum aluno cadastrado ainda.</div>`}
    </div>`;
  document.querySelectorAll("[data-admin-user]").forEach((button) => button.addEventListener("click", async () => {
    button.disabled = true;
    const { error } = await client.rpc("admin_set_student_access", { target_user_id: button.dataset.adminUser, new_status: button.dataset.nextStatus });
    if (error) {
      button.disabled = false;
      showToast("Não foi possível alterar esse acesso.");
      return;
    }
    showToast(button.dataset.nextStatus === "active" ? "Acesso reativado." : "Acesso suspenso.");
    renderAdmin();
  }));
}

function bindModuleLinks(root = document) {
  root.querySelectorAll("[data-module]").forEach((element) => {
    const path = `module/${element.dataset.module}`;
    const open = () => navigate(path);
    primeNavigation(element, path);
    element.addEventListener("click", open);
    element.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") open(); });
  });
}

function bindCommon() {
  bindDeferredStoryImages();
  document.querySelectorAll("[data-lesson]").forEach((element) => {
    const path = `lesson/${element.dataset.lesson}`;
    const open = () => navigate(path);
    primeNavigation(element, path);
    element.addEventListener("click", open);
    element.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") open(); });
  });
  bindModuleLinks();
  document.querySelectorAll("[data-scroll-rail]").forEach((button) => button.addEventListener("click", () => {
    const rail = document.querySelector(`[data-rail="${button.dataset.scrollRail}"]`);
    const distance = Math.max(320, Math.min(760, rail.clientWidth * .78));
    rail.scrollBy({ left: Number(button.dataset.direction) * distance, behavior: "smooth" });
  }));
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    location.hash === "#tracks" ? renderTracks() : renderHome();
  }));
  document.querySelectorAll("[data-view-jump]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.viewJump)));
  document.querySelectorAll("[data-back]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.back)));
  document.querySelectorAll("[data-module-link]").forEach((button) => button.addEventListener("click", () => navigate(`module/${button.dataset.moduleLink}`)));
  document.querySelectorAll("[data-resource]").forEach((button) => button.addEventListener("click", () => showToast(`${button.dataset.resource}: espaço pronto para receber seu arquivo autoral.`)));
}

function setActiveNav(view) {
  const base = view.split("/")[0];
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === base || (base === "module" && item.dataset.view === "tracks") || (base === "lesson" && item.dataset.view === "tracks")));
  profileButton.classList.toggle("active", base === "profile");
}

function navigate(path) {
  warmCriticalImage(path);
  location.hash = path;
  if (location.hash.slice(1) === path) renderRoute();
  sidebar.classList.remove("open");
}

function renderRoute() {
  const route = location.hash.slice(1) || "home";
  const [view, id] = route.split("/");
  document.body.dataset.view = view;
  document.body.classList.toggle("home-view", view === "home");
  setActiveNav(view);
  if (view === "module") renderModule(id);
  else if (view === "lesson") renderLesson(id);
  else if (view === "tracks") renderTracks();
  else if (view === "favorites") renderFavorites();
  else if (view === "formation") renderFormation();
  else if (view === "profile") renderProfile();
  else if (view === "plan") renderPlan();
  else if (view === "admin") renderAdmin();
  else renderHome();
  window.scrollTo({ top: 0, behavior: "smooth" });
  app.focus({ preventScroll: true });
}

navItems.forEach((button) => {
  primeNavigation(button, button.dataset.view);
  button.addEventListener("click", () => navigate(button.dataset.view));
});
profileButton.addEventListener("click", () => navigate("profile"));
document.querySelector("#logoutButton").addEventListener("click", async () => {
  window.LowLabAuth?.clearUserStorage?.();
  await window.LowLabAuth?.client.auth.signOut();
  location.hash = "home";
  location.reload();
});
themeToggle.addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
document.querySelector("#mobileMenu").addEventListener("click", () => sidebar.classList.toggle("open"));

function updateSearch() {
  const term = search.value.trim().toLocaleLowerCase("pt-BR");
  if (!term) { searchResults.classList.remove("visible"); return; }
  const matches = [...lessonMap.values()].filter((item) => {
    const editorial = lessonEditorial(item);
    const haystack = [item.title, item.module.title, item.module.track, editorial.result, ...editorial.body, editorial.practice, editorial.steps, editorial.example].join(" ").toLocaleLowerCase("pt-BR");
    return haystack.includes(term);
  }).slice(0, 8);
  searchResults.innerHTML = matches.length ? matches.map((item) => `<button class="search-result" data-search-lesson="${item.id}" role="option"><span>${icons.play}</span><span><strong>${item.title}</strong><small>${item.module.title}</small></span></button>`).join("") : `<div class="search-result"><span>⌕</span><span><strong>Nenhuma aula encontrada</strong><small>Tente outra palavra-chave</small></span></div>`;
  searchResults.classList.add("visible");
  document.querySelectorAll("[data-search-lesson]").forEach((button) => button.addEventListener("click", () => { search.value = ""; searchResults.classList.remove("visible"); navigate(`lesson/${button.dataset.searchLesson}`); }));
}

search.addEventListener("input", updateSearch);
search.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { search.value = ""; searchResults.classList.remove("visible"); search.blur(); }
  if (event.key === "Enter") document.querySelector("[data-search-lesson]")?.click();
});
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); search.focus(); }
});
document.addEventListener("click", (event) => { if (!event.target.closest(".search-wrap")) searchResults.classList.remove("visible"); });
window.addEventListener("hashchange", renderRoute);

applyTheme(state.theme, false);
updateProgress();
warmCriticalImage(location.hash.slice(1) || "home");
renderRoute();
scheduleImageWarmup();
