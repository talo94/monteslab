import {
  CloudUpload,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Pencil,
  Search,
  Sprout,
} from "lucide-react"
import { useLocation } from "react-router-dom"
import responsiveWorkstation from "../assets/home/responsive-workstation.webp"
import wireframesResponsive from "../assets/home/wireframes-responsive.webp"
import ContactForm from "./home/ContactForm"
import { getHomeLanguage, getLanguageUrl, getWhatsAppUrl } from "./home/contact"
import { homeContent, sectionIds } from "./home/content"
import type { HomeSection } from "./home/types"
import "./home/home.css"

const includedIcons = [
  MonitorSmartphone,
  Mail,
  Search,
  Pencil,
  CloudUpload,
] as const

function Brand() {
  return (
    <span className="home-brand">
      <Sprout aria-hidden="true" />
      <span>Montes Lab</span>
    </span>
  )
}

export default function Home() {
  const { pathname, hash } = useLocation()
  const language = getHomeLanguage(pathname)
  const targetLanguage = language === "es" ? "en" : "es"
  const content = homeContent[language]
  const ids = sectionIds[language]
  const whatsappUrl = getWhatsAppUrl(content.whatsappMessage)
  const languageUrl = getLanguageUrl(language, targetLanguage, hash)
  const navLinks = (Object.keys(content.nav) as HomeSection[]).map((key) => ({
    href: `#${ids[key]}`,
    label: content.nav[key],
  }))

  return (
    <main className="home-page" lang={content.locale}>
      <header className="home-header">
        <a href={language === "es" ? "/" : "/en"} aria-label="Montes Lab">
          <Brand />
        </a>
        <nav
          className="home-nav"
          aria-label={language === "es" ? "Principal" : "Main"}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="home-language"
          href={languageUrl}
          hrefLang={targetLanguage}
          lang={targetLanguage}
          aria-label={language === "es" ? "View in English" : "Ver en español"}
        >
          <span aria-current={language === "es" ? "page" : undefined}>ES</span>
          <span aria-hidden="true">·</span>
          <span aria-current={language === "en" ? "page" : undefined}>EN</span>
        </a>
        <details className="home-mobile-nav">
          <summary aria-label={language === "es" ? "Abrir menú" : "Open menu"}>
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label={language === "es" ? "Menú móvil" : "Mobile menu"}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) =>
                  event.currentTarget
                    .closest("details")
                    ?.removeAttribute("open")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </header>

      <section className="home-hero">
        <p className="home-eyebrow">{content.hero.eyebrow}</p>
        <h1>{content.hero.title}</h1>
        <p className="home-hero-copy">{content.hero.description}</p>
        <div className="home-actions">
          <a
            className="home-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            {content.hero.whatsappAction}
          </a>
          <a className="home-button" href={`#${ids.contact}`}>
            {content.hero.primaryAction}
          </a>
        </div>
      </section>

      <figure className="home-photo home-photo-primary">
        <img src={wireframesResponsive} alt={content.imageAlt.wireframes} />
      </figure>

      <section className="home-section home-services" id={ids.services}>
        <div className="home-section-intro">
          <div>
            <p className="home-eyebrow">{content.services.eyebrow}</p>
            <h2>{content.services.title}</h2>
          </div>
          <p>{content.services.intro}</p>
        </div>
        <div className="home-service-grid">
          {content.services.items.map((service) => (
            <article key={service.name}>
              <h3>{service.name}</h3>
              <p className="home-service-scope">{service.scope}</p>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-included" id={ids.included}>
        <p className="home-eyebrow">{content.included.eyebrow}</p>
        <h2>{content.included.title}</h2>
        <ul>
          {content.included.items.map((item, index) => {
            const Icon = includedIcons[index]
            return (
              <li key={item}>
                <Icon aria-hidden="true" />
                <span>{item}</span>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="home-complements">
        <figure className="home-photo">
          <img
            src={responsiveWorkstation}
            alt={content.imageAlt.responsive}
            loading="lazy"
          />
        </figure>
        <div className="home-complement-copy">
          <p className="home-eyebrow">{content.complements.eyebrow}</p>
          <h2>{content.complements.title}</h2>
          <p>{content.complements.description}</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            {content.hero.whatsappAction}
          </a>
        </div>
      </section>

      <section className="home-experience">
        <div>
          <p className="home-eyebrow">{content.experience.eyebrow}</p>
          <h2>{content.experience.title}</h2>
        </div>
        <p>{content.experience.description}</p>
      </section>

      <section className="home-contact" id={ids.contact}>
        <div className="home-contact-copy">
          <p className="home-eyebrow">{content.form.eyebrow}</p>
          <h2>{content.form.title}</h2>
          <p>{content.form.description}</p>
          <a
            className="home-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            {content.hero.whatsappAction}
          </a>
        </div>
        <ContactForm content={content.form} language={language} />
      </section>

      <footer className="home-footer">
        <div>
          <Brand />
          <p>{content.footer}</p>
        </div>
        <nav aria-label={language === "es" ? "Pie de página" : "Footer"}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={languageUrl} hrefLang={targetLanguage} lang={targetLanguage}>
            {targetLanguage.toUpperCase()}
          </a>
        </nav>
      </footer>
    </main>
  )
}
