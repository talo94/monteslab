import { Link, useParams } from "react-router-dom"
import { ArrowLeft, BookOpen } from "lucide-react"
import { getPlant } from "./data"
import PlantLayout, { PlantIllustration } from "./PlantLayout"

export default function PlantDetail() {
  const { slug } = useParams()
  const plant = getPlant(slug)
  if (!plant)
    return (
      <PlantLayout title="Planta no encontrada" detail>
        <section className="plants-heading">
          <div>
            <p className="plants-eyebrow">MIS PLANTICAS</p>
            <h1>Planta no encontrada</h1>
            <p>No hay una ficha con este nombre.</p>
            <Link className="plants-text-link" to="/plantas">
              Volver al catálogo
            </Link>
          </div>
        </section>
      </PlantLayout>
    )
  return (
    <PlantLayout title={`${plant.name} · Mis planticas`} detail>
      <section className="plant-detail-hero" aria-labelledby="plant-title">
        <div className="plant-detail-art">
          <PlantIllustration plant={plant} />
          <span>Ilustración provisional</span>
        </div>
        <div className="plant-identity">
          <p className="plants-eyebrow">
            FICHA {String(plant.number).padStart(2, "0")} / 11
          </p>
          <h1 id="plant-title">{plant.name}</h1>
          <p className="plant-botanical">{plant.shortIdentification}</p>
          <p>{plant.identification}</p>
          <div className="plant-source-note">
            <BookOpen size={19} aria-hidden="true" />
            <p>
              Ficha del 13 de septiembre de 2026. Observaciones y planes de esa
              fecha; las fechas aproximadas conservan el margen de la anotación
              original.
            </p>
          </div>
        </div>
      </section>
      <div className="plant-reading-layout">
        <nav className="plant-index" aria-label="Apartados de la ficha">
          <p className="plants-eyebrow">EN ESTA FICHA</p>
          {plant.sections.map((s) => (
            <a href={`#${s.id}`} key={s.id}>
              {s.title}
            </a>
          ))}
          <a href="#sources">Fuentes</a>
        </nav>
        <div className="plant-sections">
          {plant.sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className={
                s.title.includes("Piña")
                  ? "plant-section plant-pina"
                  : "plant-section"
              }
            >
              <span className="plant-section-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{s.title}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
          <section id="sources" className="plant-sources">
            <h2>Fuentes de la ficha</h2>
            <ul>
              {plant.sources.map((url, i) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {new URL(url).hostname.replace("www.", "")} · Referencia{" "}
                    {i + 1}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <Link className="plants-text-link" to="/plantas">
            <ArrowLeft size={18} aria-hidden="true" /> Volver a mis planticas
          </Link>
        </div>
      </div>
    </PlantLayout>
  )
}
