"use client";

import Image from "next/image";
import { useState } from "react";
import { FLOATING_ICONS, HOME_CONTENT, type Locale } from "./home-content";

type HomeClientProps = {
  initialLang: Locale;
};

export default function HomeClient({ initialLang }: HomeClientProps) {
  const [lang, setLang] = useState<Locale>(initialLang);
  const t = HOME_CONTENT[lang];

  return (
    <div className="site-shell">
      <div className="floating-bg" aria-hidden="true">
        {FLOATING_ICONS.map((icon, index) => (
          <span
            key={`${icon.symbol}-${index}`}
            className={`float-icon ${icon.className}`}
          >
            {icon.symbol}
          </span>
        ))}
      </div>

      <div className="portfolio">
        <header className="hero section">
          <nav className="top-nav">
            <p className="brand">nycolazs.dev</p>
            <div className="nav-links">
              <a href="#sobre">{t.navAbout}</a>
              <a href="#experiencia">{t.navExperience}</a>
              <a href="#skills">{t.navSkills}</a>
              <a href="#contato">{t.navContact}</a>
            </div>
            <div className="lang-switch" role="group" aria-label="Language switch">
              <button
                type="button"
                className={`lang-btn ${lang === "pt" ? "active" : ""}`}
                onClick={() => setLang("pt")}
              >
                PT
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
          </nav>

          <div className="hero-grid">
            <div>
              <p className="eyebrow">{t.role}</p>
              <div className="name-row">
                <Image
                  className="profile-avatar"
                  src="https://github.com/nycolazs.png?size=240"
                  alt="Foto de Nycolas Rocha"
                  width={128}
                  height={128}
                  priority
                />
                <div className="name-copy">
                  <h1>Nycolas Rocha</h1>
                  <p className="lead">{t.heroLead}</p>
                </div>
              </div>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contato">
                  {t.ctaContact}
                </a>
                <a className="btn btn-ghost" href="#experiencia">
                  {t.ctaTrajectory}
                </a>
              </div>
            </div>

            <aside className="hero-card">
              <p className="card-title">{t.quickSummary}</p>
              <ul>
                <li>{t.location}</li>
                <li>{t.stack}</li>
                <li>{t.goal}</li>
              </ul>
            </aside>
          </div>
        </header>

        <main>
          <section id="sobre" className="section card">
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <p>{t.aboutP3}</p>
          </section>

          <section id="experiencia" className="section">
            <h2>{t.expTitle}</h2>
            <div className="timeline">
              <article className="card timeline-item">
                <p className="item-kicker">{t.exp1Period}</p>
                <h3>{t.exp1Role}</h3>
                <p>{t.exp1Text}</p>
              </article>
              <article className="card timeline-item">
                <p className="item-kicker">{t.exp2Period}</p>
                <h3>{t.exp2Role}</h3>
                <p>{t.exp2Text}</p>
              </article>
            </div>
          </section>

          <section id="skills" className="section grid-2">
            <article className="card">
              <h2>{t.skillsTitle}</h2>
              <ul className="chip-list">
                <li>React</li>
                <li>Node.js</li>
                <li>Java</li>
                <li>AngularJS</li>
                <li>AWS Lambda</li>
                <li>Amazon S3</li>
              </ul>
            </article>

            <article className="card">
              <h2>{t.eduTitle}</h2>
              <p>
                {t.edu1} <span>{t.edu1Date}</span>
              </p>
              <p>
                {t.edu2} <span>{t.edu2Date}</span>
              </p>
              <p>{t.langPt}</p>
              <p>{t.langEn}</p>
            </article>
          </section>

          <section className="section card easter-eggs">
            <h2>{t.styleTitle}</h2>
            <p>{t.styleP1}</p>
            <p>{t.styleP2}</p>
          </section>

          <section id="contato" className="section card contact">
            <h2>{t.contactTitle}</h2>
            <p>{t.cityCountry}</p>
            <a href="mailto:pedro.nycolas.2003@gmail.com">
              pedro.nycolas.2003@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nycolazs"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/nycolazs
            </a>
          </section>
        </main>

        <footer className="section footer">
          <p>{t.footer1}</p>
          <p>{t.footer2}</p>
        </footer>
      </div>
    </div>
  );
}
