"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { HOME_CONTENT, FLOATING_ICONS, type Locale } from "./home-content";

type Props = { initialLang: Locale; serverYear: string | null };

export default function HomeClient({ initialLang, serverYear }: Props) {
  const [lang, setLang] = useState<Locale>(initialLang);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = HOME_CONTENT[lang];
  const footerYear = serverYear ?? "—";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`site-shell${mounted ? " site-entered" : ""}`}>
      <div className="floating-bg" aria-hidden="true">
        {FLOATING_ICONS.map((icon, i) => (
          <span
            key={`${icon.symbol}-${i}`}
            className={`float-icon ${icon.className}`}
          >
            {icon.symbol}
          </span>
        ))}
      </div>

      <nav className={`main-nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <span className="brand">nycolazs.dev</span>
          <div className="nav-links">
            <a href="#sobre">{t.navAbout}</a>
            <a href="#experiencia">{t.navExperience}</a>
            <a href="#skills">{t.navSkills}</a>
            <a href="#projetos">{t.navProjects}</a>
            <a href="#contato">{t.navContact}</a>
          </div>
          <div className="nav-right">
            <span className="status-badge">
              <span className="status-dot" />
              {t.statusOnline}
            </span>
            <div className="lang-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={`lang-btn${lang === "pt" ? " active" : ""}`}
                onClick={() => setLang("pt")}
              >
                PT
              </button>
              <button
                type="button"
                className={`lang-btn${lang === "en" ? " active" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="portfolio">
        <header className="hero section">
          <div className="terminal-line">
            <span className="prompt">{t.terminalUser}</span>
            <span className="command">{t.terminalCommand}</span>
            <span className="cursor">_</span>
          </div>

          <div className="hero-grid">
            <div className="hero-text">
              <p className="eyebrow">{t.role}</p>
              <h1>Nycolas Rocha</h1>
              <p className="lead">{t.heroLead}</p>
              <div className="stack-strip" aria-label={t.coreStackLabel}>
                <span>{t.coreStackLabel}</span>
                <div className="stack-pills">
                  {t.coreStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contato">
                  {t.ctaContact}
                </a>
                <a className="btn btn-ghost" href="#projetos">
                  {t.ctaProjects}
                </a>
              </div>
            </div>

            <aside className="player-card">
              <Image
                className="player-avatar"
                src="https://github.com/nycolazs.png?size=240"
                alt="Nycolas Rocha"
                width={120}
                height={120}
                priority
              />
              <div className="player-stats">
                <div className="stat-row">
                  <span className="stat-label">{t.playerXp}</span>
                  <span className="stat-value">{t.playerXpValue}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">{t.playerClass}</span>
                  <span className="stat-value">{t.playerClassValue}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">{t.playerRegion}</span>
                  <span className="stat-value">{t.playerRegionValue}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">{t.playerFocus}</span>
                  <span className="stat-value">{t.playerFocusValue}</span>
                </div>
              </div>
            </aside>
          </div>

          <div className="hero-dashboard" aria-label="Portfolio status">
            <div className="system-card">
              <span className="system-kicker">{t.systemStatusTitle}</span>
              <strong>{t.systemStatusText}</strong>
            </div>
            <div className="console-card">
              {t.terminalLines.map((line) => (
                <span key={line}>&gt; {line}</span>
              ))}
            </div>
          </div>
        </header>

        <main>

          <section id="sobre" className="section">
            <div className="section-header">
              <span className="section-tag">{t.sectionTagAbout}</span>
              <h2>{t.aboutTitle}</h2>
            </div>
            <div className="card about-card">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
              <div className="trait-list">
                {t.traits.map((trait) => (
                  <span key={trait}>{trait}</span>
                ))}
              </div>
            </div>
          </section>

          <section id="experiencia" className="section">
            <div className="section-header">
              <span className="section-tag">{t.sectionTagExp}</span>
              <h2>{t.expTitle}</h2>
            </div>
            <div className="quest-timeline">
              {t.experiences.map((exp, i) => (
                <article
                  key={i}
                  className={`card quest-card${exp.active ? " active-quest" : ""}`}
                >
                  <div className="quest-header">
                    <span className="quest-period">{exp.period}</span>
                    <span
                      className={`quest-badge${exp.active ? "" : " complete"}`}
                    >
                      {exp.active ? t.questActive : t.questComplete}
                    </span>
                  </div>
                  <h3>{exp.role}</h3>
                  <p className="quest-company">{exp.company}</p>
                  <p className="quest-desc">{exp.description}</p>
                  <div className="tech-tags">
                    {exp.techs.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="section">
            <div className="section-header">
              <span className="section-tag">{t.sectionTagSkills}</span>
              <h2>{t.skillsTitle}</h2>
            </div>
            <div className="inventory-grid">
              {t.skills.map((cat) => (
                <div key={cat.label} className="card inventory-slot">
                  <div className="slot-header">
                    <span className="slot-icon">{cat.icon}</span>
                    <h3>{cat.label}</h3>
                  </div>
                  <div className="slot-items">
                    {cat.items.map((item) => (
                      <span key={item} className="item-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projetos" className="section">
            <div className="section-header">
              <span className="section-tag">{t.sectionTagProjects}</span>
              <h2>{t.projectsTitle}</h2>
            </div>
            <div className="achievements-grid">
              {t.projects.map((proj) => (
                <a
                  key={proj.name}
                  className="card achievement-card"
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="achievement-icon">{proj.icon}</span>
                  <h3>{proj.name}</h3>
                  <p>{proj.description}</p>
                  <span className="achievement-link">
                    {proj.url.replace("https://", "")} →
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="section games-section">
            <div className="section-header">
              <span className="section-tag">{t.sectionTagGames}</span>
              <h2>{t.gamesTitle}</h2>
              <p className="section-lead">{t.gamesLead}</p>
            </div>
            <div className="games-grid">
              {t.gameReferences.map((game) => (
                <article
                  key={game.title}
                  className={`game-card ${game.className}`}
                >
                  <div className="game-orb">
                    <Image
                      src={game.iconSrc}
                      alt={game.title}
                      width={56}
                      height={56}
                    />
                  </div>
                  <h3>{game.subtitle}</h3>
                  <p>{game.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section grid-2">
            <div className="card">
              <div className="section-header">
                <span className="section-tag">{t.sectionTagEdu}</span>
                <h2>{t.eduTitle}</h2>
              </div>
              <div className="edu-item">
                <h3>{t.edu1}</h3>
                <p className="edu-detail">{t.edu1Detail}</p>
              </div>
              <div className="edu-item">
                <h3>{t.edu2}</h3>
                <p className="edu-detail">{t.edu2Detail}</p>
              </div>
            </div>
            <div className="card">
              <div className="section-header">
                <span className="section-tag">{t.sectionTagLang}</span>
                <h2>{t.langTitle}</h2>
              </div>
              <div className="lang-item">
                <h3>{t.langPt}</h3>
                <span className="lang-level">{t.langPtLevel}</span>
              </div>
              <div className="lang-item">
                <h3>{t.langEn}</h3>
                <span className="lang-level">{t.langEnLevel}</span>
              </div>
            </div>
          </section>

          <section id="contato" className="section card contact-section">
            <div className="section-header center">
              <span className="section-tag">{t.sectionTagContact}</span>
              <h2>{t.contactTitle}</h2>
            </div>
            <p className="game-quote">{t.contactQuote}</p>
            <p className="contact-city">{t.contactCity}</p>
            <div className="contact-links">
              <a
                href="mailto:pedro.nycolas.2003@gmail.com"
                className="contact-link"
              >
                <span className="contact-icon">@</span>
                pedro.nycolas.2003@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/nycolazs"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">in</span>
                linkedin.com/in/nycolazs
              </a>
              <a
                href="https://github.com/nycolazs"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">&lt;/&gt;</span>
                github.com/nycolazs
              </a>
            </div>
          </section>
        </main>

        <footer className="footer section">
          <p>{t.footerText.replace("{year}", footerYear)}</p>
          <p className="footer-quote">{t.footerQuote}</p>
        </footer>
      </div>
    </div>
  );
}
