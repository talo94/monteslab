import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { plants } from "./data"
import PlantLayout, { PlantIllustration } from "./PlantLayout"

export default function PlantCatalog() {
  return (
    <PlantLayout title="Mis planticas">
      <section className="plants-heading" aria-labelledby="catalog-title">
        <div>
          <p className="plants-eyebrow">EL HERBARIO DE CASA</p>
          <h1 id="catalog-title">
            Mis <em>planticas.</em>
          </h1>
          <p className="plants-intro">
            Un pequeño jardín, once historias. Sus cuidados, a mano.
          </p>
        </div>
        <p className="plants-count">
          <strong>{plants.length.toString().padStart(2, "0")}</strong>
          <span>plantas en casa</span>
        </p>
      </section>
      <div className="plants-catalog-label">
        <span>LA COLECCIÓN</span>
        <span>Elige una planta para ver su ficha</span>
      </div>
      <ul className="plants-grid">
        {plants.map((plant) => (
          <li key={plant.slug}>
            <Link
              className="plant-card"
              to={`/plantas/${plant.slug}`}
              aria-label={`Ver ficha de ${plant.name}`}
            >
              <div className="plant-card-art">
                <span className="plant-number">
                  {String(plant.number).padStart(2, "0")}
                </span>
                <PlantIllustration plant={plant} />
              </div>
              <div className="plant-card-info">
                <div>
                  <h2>{plant.name}</h2>
                  <p>{plant.shortIdentification}</p>
                </div>
                <ArrowUpRight size={22} aria-hidden="true" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PlantLayout>
  )
}
