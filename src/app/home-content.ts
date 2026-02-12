export type Locale = "pt" | "en";

export type FloatingIcon = {
  symbol: string;
  className: string;
};

export type HomeContent = {
  navAbout: string;
  navExperience: string;
  navSkills: string;
  navContact: string;
  role: string;
  heroLead: string;
  ctaContact: string;
  ctaTrajectory: string;
  quickSummary: string;
  location: string;
  stack: string;
  goal: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  expTitle: string;
  exp1Period: string;
  exp1Role: string;
  exp1Text: string;
  exp2Period: string;
  exp2Role: string;
  exp2Text: string;
  skillsTitle: string;
  eduTitle: string;
  edu1: string;
  edu1Date: string;
  edu2: string;
  edu2Date: string;
  langPt: string;
  langEn: string;
  styleTitle: string;
  styleP1: string;
  styleP2: string;
  contactTitle: string;
  cityCountry: string;
  footer1: string;
  footer2: string;
};

export const FLOATING_ICONS: FloatingIcon[] = [
  { symbol: "🗡️", className: "f1" },
  { symbol: "◓", className: "f2" },
  { symbol: "🍄", className: "f3" },
  { symbol: "⛏️", className: "f4" },
  { symbol: "☄️", className: "f5" },
  { symbol: "⏱️", className: "f6" },
  { symbol: "🧱", className: "f7" },
  { symbol: "⚡", className: "f8" },
  { symbol: "⭐", className: "f9" },
  { symbol: "🎮", className: "f10" },
  { symbol: "⟁", className: "f11" },
];

export const HOME_CONTENT: Record<Locale, HomeContent> = {
  pt: {
    navAbout: "Sobre",
    navExperience: "Experiência",
    navSkills: "Skills",
    navContact: "Contato",
    role: "Desenvolvedor Fullstack",
    heroLead:
      "Construindo software robusto e escalavel, com foco em qualidade de codigo, colaboracao e entrega de valor.",
    ctaContact: "Falar comigo",
    ctaTrajectory: "Ver trajetoria",
    quickSummary: "Resumo rapido",
    location: "Localizacao: Fortaleza, Ceará",
    stack: "Stack: React, Node.js, Java e Angular",
    goal: "Meta: Projetos de alto impacto e crescimento tecnico",
    aboutTitle: "Sobre mim",
    aboutP1:
      "Ola! Sou Nycolas Rocha, Desenvolvedor de Software Fullstack, com experiencia na construcao de aplicacoes web e de software em projetos de medio e grande porte.",
    aboutP2:
      "Tenho experiencia pratica com React, Node.js, Java e Angular, participando de todo o ciclo de desenvolvimento, da implementacao de funcionalidades ate a evolucao de sistemas em producao.",
    aboutP3:
      "Priorizo codigo limpo e manutencao sustentavel. Com colaboracao, comunicacao e empatia, busco sempre manter o time em alto ritmo, sem perder qualidade.",
    expTitle: "Experiência",
    exp1Period: "Dezembro 2021 - Dezembro 2023",
    exp1Role: "MV - Desenvolvedor Full Stack",
    exp1Text:
      "Atuei em sistemas hospitalares e de saude de grande escala, desenvolvendo e mantendo funcionalidades com Java no back-end e AngularJS no front-end.",
    exp2Period: "Julho 2021 - Dezembro 2021",
    exp2Role: "Objetive TI Solucoes Tecnologicas - Full Stack Developer",
    exp2Text:
      "Trabalhei na manutencao e melhoria de e-commerces e ERPs, entregando novas funcionalidades, correcao de bugs e otimizacoes com ReactJS e Node.js.",
    skillsTitle: "Skills",
    eduTitle: "Formacao e idiomas",
    edu1: "BYU-Pathway Worldwide",
    edu1Date: "(janeiro de 2026)",
    edu2:
      "Professor Cesar Campelo - High School Diploma, Information Technology",
    edu2Date: "(2018 - 2021)",
    langPt: "Portugues (Nativo ou Bilingue)",
    langEn: "Ingles (Fluente Profissional)",
    styleTitle: "Estilo de trabalho",
    styleP1:
      "Gosto de resolver problemas com estrategia e consistencia: planejar bem, executar com precisao e manter visao de longo prazo.",
    styleP2:
      "Pequenas mudancas feitas no momento certo geram ganhos grandes em desempenho, produto e experiencia do usuario.",
    contactTitle: "Contato",
    cityCountry: "Fortaleza - Ceará, Brasil",
    footer1: "Nycolas Rocha - Portfolio pessoal",
    footer2: "Foco em qualidade, performance e evolucao continua.",
  },
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navContact: "Contact",
    role: "Fullstack Software Developer",
    heroLead:
      "Building robust and scalable software with a strong focus on code quality, collaboration, and real business value.",
    ctaContact: "Contact me",
    ctaTrajectory: "View journey",
    quickSummary: "Quick summary",
    location: "Location: Fortaleza, Ceará",
    stack: "Stack: React, Node.js, Java, and Angular",
    goal: "Goal: High-impact projects and technical growth",
    aboutTitle: "About me",
    aboutP1:
      "Hello! I am Nycolas Rocha, a Fullstack Software Developer with experience building web and software applications across medium and large projects.",
    aboutP2:
      "I have hands-on experience with React, Node.js, Java, and Angular, participating across the full development lifecycle, from implementing features to evolving production systems.",
    aboutP3:
      "I prioritize clean and maintainable code. With collaboration, communication, and empathy, I help teams move fast without sacrificing quality.",
    expTitle: "Experience",
    exp1Period: "December 2021 - December 2023",
    exp1Role: "MV - Full Stack Developer",
    exp1Text:
      "Worked on large-scale hospital and healthcare systems, building and maintaining features with Java on the back end and AngularJS on the front end.",
    exp2Period: "July 2021 - December 2021",
    exp2Role: "Objetive TI Solucoes Tecnologicas - Full Stack Developer",
    exp2Text:
      "Worked on maintenance and improvement of e-commerce websites and ERP systems, delivering new features, bug fixes, and optimizations with ReactJS and Node.js.",
    skillsTitle: "Skills",
    eduTitle: "Education and languages",
    edu1: "BYU-Pathway Worldwide",
    edu1Date: "(January 2026)",
    edu2:
      "Professor Cesar Campelo - High School Diploma, Information Technology",
    edu2Date: "(2018 - 2021)",
    langPt: "Portuguese (Native or Bilingual)",
    langEn: "English (Full Professional)",
    styleTitle: "Work style",
    styleP1:
      "I like solving problems with strategy and consistency: planning well, executing precisely, and keeping a long-term view.",
    styleP2:
      "Small changes applied at the right time can create major gains in performance, product quality, and user experience.",
    contactTitle: "Contact",
    cityCountry: "Fortaleza - Ceará, Brazil",
    footer1: "Nycolas Rocha - Personal portfolio",
    footer2: "Focused on quality, performance, and continuous evolution.",
  },
};
