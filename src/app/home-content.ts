export type Locale = "pt" | "en";

export type FloatingIcon = {
  symbol: string;
  className: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  techs: string[];
  active?: boolean;
};

export type SkillCategory = {
  label: string;
  icon: string;
  items: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  url: string;
  icon: string;
};

export type HighlightItem = {
  value: string;
  label: string;
};

export type GameReference = {
  title: string;
  iconSrc: string;
  subtitle: string;
  description: string;
  className: string;
};

export type HomeContent = {
  navAbout: string;
  navExperience: string;
  navSkills: string;
  navProjects: string;
  navContact: string;
  statusOnline: string;
  terminalUser: string;
  terminalCommand: string;
  role: string;
  heroLead: string;
  ctaContact: string;
  ctaProjects: string;
  coreStackLabel: string;
  coreStack: string[];
  systemStatusTitle: string;
  systemStatusText: string;
  terminalLines: string[];
  playerXp: string;
  playerClass: string;
  playerRegion: string;
  playerFocus: string;
  playerXpValue: string;
  playerClassValue: string;
  playerRegionValue: string;
  playerFocusValue: string;
  sectionTagAbout: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  traits: string[];
  sectionTagExp: string;
  expTitle: string;
  experiences: ExperienceItem[];
  questActive: string;
  questComplete: string;
  sectionTagSkills: string;
  skillsTitle: string;
  skills: SkillCategory[];
  sectionTagProjects: string;
  projectsTitle: string;
  projects: ProjectItem[];
  sectionTagGames: string;
  gamesTitle: string;
  gamesLead: string;
  gameReferences: GameReference[];
  sectionTagEdu: string;
  eduTitle: string;
  edu1: string;
  edu1Detail: string;
  edu2: string;
  edu2Detail: string;
  sectionTagLang: string;
  langTitle: string;
  langPt: string;
  langPtLevel: string;
  langEn: string;
  langEnLevel: string;
  sectionTagContact: string;
  contactTitle: string;
  contactQuote: string;
  contactCity: string;
  footerText: string;
  footerQuote: string;
};

export const FLOATING_ICONS: FloatingIcon[] = [
  { symbol: "🗡️", className: "f1" },
  { symbol: "⚡", className: "f2" },
  { symbol: "⛏️", className: "f3" },
  { symbol: "💎", className: "f4" },
  { symbol: "🔮", className: "f5" },
  { symbol: "🏰", className: "f6" },
  { symbol: "❤️", className: "f7" },
  { symbol: "⭐", className: "f8" },
  { symbol: "🎮", className: "f9" },
  { symbol: "🐉", className: "f10" },
  { symbol: "🧱", className: "f11" },
  { symbol: "🦇", className: "f12" },
];

export const HOME_CONTENT: Record<Locale, HomeContent> = {
  pt: {
    navAbout: "Sobre",
    navExperience: "Experiência",
    navSkills: "Skills",
    navProjects: "Projetos",
    navContact: "Contato",
    statusOnline: "Online",

    terminalUser: "guest@portfolio:~$",
    terminalCommand: " cat about_me.txt",

    role: "Desenvolvedor Fullstack",
    heroLead:
      "Desenvolvedor Fullstack Pleno com +3 anos de experiência em sistemas de grande escala. Especializado em Node.js, TypeScript, Java e React, com foco em qualidade, performance e entrega de valor real.",
    ctaContact: "Falar comigo",
    ctaProjects: "Ver projetos",
    coreStackLabel: "Core Stack",
    coreStack: [
      "Node.js",
      "TypeScript",
      "Java",
      "React",
      "Next.js",
      "GraphQL",
      "Docker",
      "AWS",
    ],
    systemStatusTitle: "System Status",
    systemStatusText: "Online & ready for party invite",
    terminalLines: [
      "Loading skills... [OK]",
      "Fetching quests... [OK]",
      "Syncing portfolio from CV... [OK]",
      "Awaiting connection...",
    ],

    playerXp: "XP",
    playerClass: "Classe",
    playerRegion: "Região",
    playerFocus: "Build",
    playerXpValue: "+3 anos",
    playerClassValue: "Fullstack Dev",
    playerRegionValue: "Fortaleza, CE",
    playerFocusValue: "APIs, UI e automação",

    sectionTagAbout: "// character.bio",
    aboutTitle: "Sobre mim",
    aboutP1:
      "Olá! Sou Nycolas Rocha, Desenvolvedor Fullstack Pleno com mais de 3 anos de experiência profissional em sistemas de grande escala. Especializado em Node.js, TypeScript, Java e React, com domínio em APIs REST, GraphQL, arquitetura de microsserviços e testes automatizados (Jest, Vitest).",
    aboutP2:
      "Tenho inglês fluente, consolidado em 2 anos de experiência intercultural com comunicação diária, apresentações, treinamentos e reuniões internacionais. Meu perfil combina forte comunicação, liderança de equipes, disciplina e adaptabilidade.",
    aboutP3:
      "Priorizo código limpo, arquitetura sustentável e entregas de alto impacto. Colaborativo e orientado a resultado, busco sempre elevar a qualidade do time e do produto com aprendizado contínuo.",
    traits: [
      "Liderança de equipes",
      "Comunicação intercultural",
      "Empatia",
      "Organização de metas",
      "Resiliência",
      "Responsabilidade",
    ],

    sectionTagExp: "// quest.log",
    expTitle: "Experiência",
    questActive: "● Em andamento",
    questComplete: "✓ Completa",
    experiences: [
      {
        period: "Jan 2026 — Atual",
        role: "Desenvolvedor Fullstack Freelancer",
        company: "Projetos para pequenas empresas",
        description:
          "Desenvolvimento de sites institucionais, landing pages e sistemas sob demanda. Atuação completa do levantamento de requisitos à publicação, com interfaces responsivas, otimizadas para performance e conversão. Atuação consultiva traduzindo necessidades de negócio em soluções digitais escaláveis.",
        techs: ["React", "Next.js", "Node.js", "TypeScript", "UI/UX"],
        active: true,
      },
      {
        period: "Jan 2024 — Jan 2026",
        role: "Serviço Voluntário e Desenvolvimento de Sistemas",
        company: "ABIJCSUD — Curitiba, PR",
        description:
          "Atuação em tempo integral em serviço comunitário, liderança de equipes e comunicação intercultural. Desenvolvimento de sistemas com Node.js para automações e melhorias de processos internos. Consolidação de fluência em inglês em ambiente multicultural.",
        techs: ["Node.js", "Liderança", "Inglês Fluente", "Gestão de Metas"],
        active: false,
      },
      {
        period: "Dez 2021 — Dez 2023",
        role: "Desenvolvedor Fullstack",
        company: "MV Sistemas",
        description:
          "Desenvolvimento e manutenção de sistemas hospitalares de grande escala, com funcionalidades críticas em Java e AngularJS. Atuação em integrações via APIs REST entre módulos de prontuário e agendamento, além de refatoração, testes, code reviews e alinhamentos técnicos para elevar a qualidade das entregas.",
        techs: [
          "Java",
          "AngularJS",
          "APIs REST",
          "Microsserviços",
          "Code Review",
        ],
        active: false,
      },
      {
        period: "Jul 2021 — Dez 2021",
        role: "Desenvolvedor Fullstack",
        company: "Objetive TI",
        description:
          "Desenvolvimento de plataformas de e-commerce e sistemas ERP com ReactJS e Node.js/TypeScript. Melhoria de performance em queries SQL e endpoints REST (~35% mais rápido). Aumento da cobertura de testes automatizados com Jest de <20% para ~60% nos módulos críticos.",
        techs: ["Node.js", "TypeScript", "ReactJS", "APIs REST", "Jest"],
        active: false,
      },
    ],

    sectionTagSkills: "// player.inventory",
    skillsTitle: "Skills",
    skills: [
      {
        label: "Linguagens",
        icon: "⚔️",
        items: ["JavaScript", "TypeScript", "Java", "HTML5", "CSS3"],
      },
      {
        label: "Back-end",
        icon: "🛡️",
        items: [
          "Node.js",
          "Express",
          "NestJS",
          "Spring Boot",
          "REST APIs",
          "GraphQL",
          "Microsserviços",
        ],
      },
      {
        label: "Front-end",
        icon: "✨",
        items: ["React", "Next.js", "AngularJS", "Responsividade", "UI/UX"],
      },
      {
        label: "Banco de Dados",
        icon: "💎",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      },
      {
        label: "DevOps & Cloud",
        icon: "☁️",
        items: [
          "Docker",
          "Kubernetes",
          "CI/CD",
          "GitHub Actions",
          "Jenkins",
          "AWS",
          "Git",
        ],
      },
      {
        label: "Testes",
        icon: "🧪",
        items: ["Jest", "Vitest", "Testes Unitários", "Integração", "TDD"],
      },
      {
        label: "IA & Produtividade",
        icon: "🤖",
        items: [
          "Claude Code",
          "GitHub Copilot",
          "OpenAI Codex",
          "ChatGPT",
          "Prompt Engineering",
          "LLMs",
        ],
      },
      {
        label: "Metodologias",
        icon: "📋",
        items: ["Scrum", "Kanban", "Clean Code", "SOLID", "DRY"],
      },
    ],

    sectionTagProjects: "// achievements.unlocked",
    projectsTitle: "Projetos",
    projects: [
      {
        name: "YacaCode",
        description: "Site institucional para empresa de tecnologia",
        url: "https://yacacode.com",
        icon: "🏆",
      },
      {
        name: "Torres Brothers",
        description: "Site institucional para empresa de serviços",
        url: "https://torresbrothers.com.br",
        icon: "⭐",
      },
      {
        name: "Portfolio Pessoal",
        description: "Este portfolio profissional, construído com Next.js",
        url: "https://nycolazs.vercel.app",
        icon: "🎮",
      },
    ],

    sectionTagGames: "// easter.eggs",
    gamesTitle: "Referências gamer",
    gamesLead:
      "A identidade visual puxa de aventuras, inventários e mapas de jogo: nostalgia como textura, mas com leitura profissional.",
    gameReferences: [
      {
        title: "Zelda",
        iconSrc: "/game-icons/triforce.svg",
        subtitle: "Coragem para explorar",
        description:
          "Chamadas e save points com clima de aventura, focados em guiar o visitante para o próximo passo.",
        className: "zelda",
      },
      {
        title: "Pokémon",
        iconSrc: "/game-icons/pokeball.png",
        subtitle: "Build por evolução",
        description:
          "Skills organizadas como criaturas de um time: cada tecnologia com função clara na batalha.",
        className: "pokemon",
      },
      {
        title: "Minecraft",
        iconSrc: "/game-icons/minecraft-pickaxe.png",
        subtitle: "Construção modular",
        description:
          "Cards e grids com sensação de blocos, reforçando sistemas montados peça por peça.",
        className: "minecraft",
      },
      {
        title: "Final Fantasy VII",
        iconSrc: "/game-icons/ffvii-materia.png",
        subtitle: "Materia técnica",
        description:
          "Glow verde e chips de stack lembram slots de materia sem reproduzir assets oficiais.",
        className: "ffvii",
      },
      {
        title: "Castlevania",
        iconSrc: "/game-icons/castlevania-castle.png",
        subtitle: "Contraste gótico",
        description:
          "Bordas, sombras e acentos vinho deixam a interface mais dramática e menos genérica.",
        className: "castlevania",
      },
    ],

    sectionTagEdu: "// level.up",
    eduTitle: "Formação",
    edu1: "Bacharelado em Desenvolvimento de Software",
    edu1Detail: "Ensign College — Salt Lake City, Utah, EUA — Em andamento",
    edu2: "Técnico em Informática + Ensino Médio",
    edu2Detail: "E.E.E.P. Prof. César Campelo — 2018 - 2020",

    sectionTagLang: "// language.pack",
    langTitle: "Idiomas",
    langPt: "Português",
    langPtLevel: "Nativo",
    langEn: "Inglês",
    langEnLevel:
      "Fluente — comunicação técnica, apresentações e reuniões internacionais",

    sectionTagContact: "// save.point",
    contactTitle: "Contato",
    contactQuote:
      '"It\'s dangerous to go alone! Take this."',
    contactCity: "Fortaleza — Ceará, Brasil",

    footerText: "© {year} Nycolas Rocha — Construído com Next.js",
    footerQuote: "nycolazs.vercel.app",
  },

  en: {
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    statusOnline: "Online",

    terminalUser: "guest@portfolio:~$",
    terminalCommand: " cat about_me.txt",

    role: "Fullstack Developer",
    heroLead:
      "Mid-level Fullstack Developer with 3+ years of experience in large-scale systems. Specialized in Node.js, TypeScript, Java, and React, focused on quality, performance, and real business value.",
    ctaContact: "Contact me",
    ctaProjects: "View projects",
    coreStackLabel: "Core Stack",
    coreStack: [
      "Node.js",
      "TypeScript",
      "Java",
      "React",
      "Next.js",
      "GraphQL",
      "Docker",
      "AWS",
    ],
    systemStatusTitle: "System Status",
    systemStatusText: "Online & ready for party invite",
    terminalLines: [
      "Loading skills... [OK]",
      "Fetching quests... [OK]",
      "Syncing portfolio from CV... [OK]",
      "Awaiting connection...",
    ],

    playerXp: "XP",
    playerClass: "Class",
    playerRegion: "Region",
    playerFocus: "Build",
    playerXpValue: "+3 years",
    playerClassValue: "Fullstack Dev",
    playerRegionValue: "Fortaleza, CE",
    playerFocusValue: "APIs, UI, automation",

    sectionTagAbout: "// character.bio",
    aboutTitle: "About me",
    aboutP1:
      "Hi! I'm Nycolas Rocha, a Mid-level Fullstack Developer with 3+ years of professional experience in large-scale systems. Specialized in Node.js, TypeScript, Java, and React, with expertise in REST APIs, GraphQL, microservices architecture, and automated testing (Jest, Vitest).",
    aboutP2:
      "I'm fluent in English, consolidated through 2 years of intercultural experience with daily communication, presentations, training sessions, and international meetings. My profile combines strong communication, team leadership, discipline, and adaptability.",
    aboutP3:
      "I prioritize clean code, sustainable architecture, and high-impact deliveries. Collaborative and result-oriented, I constantly seek to elevate team and product quality through continuous learning.",
    traits: [
      "Team leadership",
      "Intercultural communication",
      "Empathy",
      "Goal organization",
      "Resilience",
      "Responsibility",
    ],

    sectionTagExp: "// quest.log",
    expTitle: "Experience",
    questActive: "● Active",
    questComplete: "✓ Complete",
    experiences: [
      {
        period: "Jan 2026 — Present",
        role: "Freelance Fullstack Developer",
        company: "Projects for small businesses",
        description:
          "Development of institutional websites, landing pages, and on-demand systems. End-to-end work from requirements gathering to deployment, with responsive interfaces optimized for performance and conversion. Consultative approach translating business needs into scalable digital solutions.",
        techs: ["React", "Next.js", "Node.js", "TypeScript", "UI/UX"],
        active: true,
      },
      {
        period: "Jan 2024 — Jan 2026",
        role: "Volunteer Service & Systems Development",
        company: "ABIJCSUD — Curitiba, PR",
        description:
          "Full-time community service, team leadership, and intercultural communication. Systems development with Node.js for automation and process improvement. English fluency consolidation in a multicultural environment.",
        techs: ["Node.js", "Leadership", "Fluent English", "Goal Management"],
        active: false,
      },
      {
        period: "Dec 2021 — Dec 2023",
        role: "Fullstack Developer",
        company: "MV Sistemas",
        description:
          "Development and maintenance of large-scale healthcare systems with critical features in Java and AngularJS. Worked on REST API integrations between medical records and scheduling modules, plus refactoring, testing, code reviews, and technical alignment to raise delivery quality.",
        techs: [
          "Java",
          "AngularJS",
          "REST APIs",
          "Microservices",
          "Code Review",
        ],
        active: false,
      },
      {
        period: "Jul 2021 — Dec 2021",
        role: "Fullstack Developer",
        company: "Objetive TI",
        description:
          "Development of e-commerce platforms and ERP systems with ReactJS and Node.js/TypeScript. SQL queries and REST endpoint performance optimization (~35% faster). Test coverage increase from <20% to ~60% on critical modules with Jest.",
        techs: ["Node.js", "TypeScript", "ReactJS", "REST APIs", "Jest"],
        active: false,
      },
    ],

    sectionTagSkills: "// player.inventory",
    skillsTitle: "Skills",
    skills: [
      {
        label: "Languages",
        icon: "⚔️",
        items: ["JavaScript", "TypeScript", "Java", "HTML5", "CSS3"],
      },
      {
        label: "Back-end",
        icon: "🛡️",
        items: [
          "Node.js",
          "Express",
          "NestJS",
          "Spring Boot",
          "REST APIs",
          "GraphQL",
          "Microservices",
        ],
      },
      {
        label: "Front-end",
        icon: "✨",
        items: [
          "React",
          "Next.js",
          "AngularJS",
          "Responsive Design",
          "UI/UX",
        ],
      },
      {
        label: "Databases",
        icon: "💎",
        items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      },
      {
        label: "DevOps & Cloud",
        icon: "☁️",
        items: [
          "Docker",
          "Kubernetes",
          "CI/CD",
          "GitHub Actions",
          "Jenkins",
          "AWS",
          "Git",
        ],
      },
      {
        label: "Testing",
        icon: "🧪",
        items: ["Jest", "Vitest", "Unit Testing", "Integration", "TDD"],
      },
      {
        label: "AI & Productivity",
        icon: "🤖",
        items: [
          "Claude Code",
          "GitHub Copilot",
          "OpenAI Codex",
          "ChatGPT",
          "Prompt Engineering",
          "LLMs",
        ],
      },
      {
        label: "Methodologies",
        icon: "📋",
        items: ["Scrum", "Kanban", "Clean Code", "SOLID", "DRY"],
      },
    ],

    sectionTagProjects: "// achievements.unlocked",
    projectsTitle: "Projects",
    projects: [
      {
        name: "YacaCode",
        description: "Institutional website for a tech company",
        url: "https://yacacode.com",
        icon: "🏆",
      },
      {
        name: "Torres Brothers",
        description: "Institutional website for a services company",
        url: "https://torresbrothers.com.br",
        icon: "⭐",
      },
      {
        name: "Personal Portfolio",
        description: "This professional portfolio, built with Next.js",
        url: "https://nycolazs.vercel.app",
        icon: "🎮",
      },
    ],

    sectionTagGames: "// easter.eggs",
    gamesTitle: "Gaming References",
    gamesLead:
      "The visual identity borrows from adventures, inventories, and world maps: nostalgic texture with a professional read.",
    gameReferences: [
      {
        title: "Zelda",
        iconSrc: "/game-icons/triforce.svg",
        subtitle: "Courage to explore",
        description:
          "Calls to action and save points guide visitors toward the next step with an adventure mood.",
        className: "zelda",
      },
      {
        title: "Pokémon",
        iconSrc: "/game-icons/pokeball.png",
        subtitle: "Evolution-based build",
        description:
          "Skills are arranged like a balanced team, with each technology playing a clear role.",
        className: "pokemon",
      },
      {
        title: "Minecraft",
        iconSrc: "/game-icons/minecraft-pickaxe.png",
        subtitle: "Modular construction",
        description:
          "Cards and grids carry a block-like feel, reinforcing systems assembled piece by piece.",
        className: "minecraft",
      },
      {
        title: "Final Fantasy VII",
        iconSrc: "/game-icons/ffvii-materia.png",
        subtitle: "Technical materia",
        description:
          "Green glow and stack chips nod to materia slots without reproducing official assets.",
        className: "ffvii",
      },
      {
        title: "Castlevania",
        iconSrc: "/game-icons/castlevania-castle.png",
        subtitle: "Gothic contrast",
        description:
          "Borders, shadows, and wine accents make the interface more dramatic and distinctive.",
        className: "castlevania",
      },
    ],

    sectionTagEdu: "// level.up",
    eduTitle: "Education",
    edu1: "Bachelor in Software Development",
    edu1Detail: "Ensign College — Salt Lake City, Utah, USA — In progress",
    edu2: "Technical in IT + High School",
    edu2Detail: "E.E.E.P. Prof. César Campelo — 2018 - 2020",

    sectionTagLang: "// language.pack",
    langTitle: "Languages",
    langPt: "Portuguese",
    langPtLevel: "Native",
    langEn: "English",
    langEnLevel:
      "Fluent — technical communication, presentations, and international meetings",

    sectionTagContact: "// save.point",
    contactTitle: "Contact",
    contactQuote:
      '"It\'s dangerous to go alone! Take this."',
    contactCity: "Fortaleza — Ceará, Brazil",

    footerText: "© {year} Nycolas Rocha — Built with Next.js",
    footerQuote: "nycolazs.vercel.app",
  },
};
