import { useEffect, useRef, type ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowLeft, Sprout } from "lucide-react"
import type { Plant } from "./types"
import "./plantas.css"

export function PlantIllustration({ plant }: { plant: Plant }) {
  return (
    <div
      role="img"
      aria-label={`Ilustración provisional de ${plant.name}; no representa su estado real`}
      className="plant-illustration"
      style={{
        backgroundImage: `url(${plant.imageSource})`,
        backgroundSize: plant.imageIndex === undefined ? "cover" : "400% 300%",
        backgroundPosition:
          plant.imageIndex === undefined
            ? "center"
            : `${((plant.imageIndex % 4) * 100) / 3}% ${Math.floor(plant.imageIndex / 4) * 50}%`,
      }}
    />
  )
}

export default function PlantLayout({
  title,
  detail = false,
  children,
}: {
  title: string
  detail?: boolean
  children: ReactNode
}) {
  const { pathname } = useLocation()
  const main = useRef<HTMLElement>(null)
  useEffect(() => {
    const previousTitle = document.title
    const inherited = Array.from(
      document.head.querySelectorAll(
        'link[rel="canonical"], link[rel="alternate"], meta[property^="og:"], meta[name^="twitter:"], script[type="application/ld+json"]'
      )
    )
    inherited.forEach((node) => node.remove())
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    )
    const previousDescription = description?.content
    if (description)
      description.content = "Las plantas de casa y sus fichas de cuidado."
    const existing = document.querySelector<HTMLMetaElement>(
      'meta[name="robots"]'
    )
    const previousRobots = existing?.content
    const meta = existing ?? document.createElement("meta")
    meta.name = "robots"
    meta.content = "noindex, nofollow"
    if (!existing) document.head.append(meta)
    document.title = `${title} | Montes Lab`
    window.scrollTo({ top: 0, behavior: "instant" })
    main.current?.focus({ preventScroll: true })
    return () => {
      document.title = previousTitle
      inherited.forEach((node) => document.head.append(node))
      if (description) description.content = previousDescription ?? ""
      if (existing) existing.content = previousRobots ?? ""
      else meta.remove()
    }
  }, [pathname, title])
  return (
    <div className="plants-page">
      <a className="plants-skip" href="#plant-content">
        Saltar al contenido
      </a>
      <header className="plants-topbar">
        <a className="plants-brand" href="/">
          <Sprout aria-hidden="true" size={22} /> Montes Lab
        </a>
        {detail ? (
          <Link className="plants-back" to="/plantas">
            <ArrowLeft size={16} aria-hidden="true" /> Mis planticas
          </Link>
        ) : (
          <a className="plants-back" href="/">
            <ArrowLeft size={16} aria-hidden="true" /> Volver a Montes Lab
          </a>
        )}
      </header>
      <main id="plant-content" ref={main} tabIndex={-1}>
        {children}
      </main>
      <footer className="plants-footer">
        <span>Montes Lab · Mi jardín de interior</span>
        <span>Ilustraciones provisionales</span>
      </footer>
    </div>
  )
}
