import { Link } from "react-router-dom"
import { routes } from "../routes/routes"
import PageShell from "../components/layout/PageShell/PageShell"

const trips = [
  {
    href: routes.eurotripFernandezBedoya2026,
    title: "Familia Fernández Bedoya",
    date: "6–24 septiembre · 2026",
    places: "Valencia, Lisboa, Fátima, París, Venecia y Roma",
    description:
      "Un cuaderno para viajar juntos: el plan de cada día, dónde descansar y cómo llegar.",
  },
  {
    href: routes.eurotripFamiliar2026,
    title: "Eurotrip familiar",
    date: "Abril–mayo · 2026",
    places: "Valencia, Lisboa, Fátima, París, Lourdes y Roma",
    description:
      "La primera guía familiar: ciudades, visitas y recuerdos compartidos.",
  },
]
export default function Viajes() {
  return (
    <PageShell>
      <p className="mb-4 text-xs tracking-widest uppercase text-ml-muted">
        Montes Lab / Cuadernos de viaje
      </p>
      <h1 className="font-family-trip-serif text-5xl text-ml-ink">Viajes</h1>
      <p className="mt-5 max-w-xl text-ml-muted">
        Lugares por descubrir y planes para disfrutarlos juntos.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {trips.map((trip) => (
          <article
            key={trip.href}
            className="flex flex-col bg-ml-card p-7 text-ml-ink"
          >
            <p className="text-xs uppercase tracking-wider">{trip.date}</p>
            <h2 className="font-family-trip-serif mt-5 text-3xl">
              {trip.title}
            </h2>
            <p className="mt-3 text-sm text-ml-muted">{trip.places}</p>
            <p className="mt-5 text-sm">{trip.description}</p>
            <Link
              className="mt-8 inline-block self-start border-b border-ml-ink pb-1 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
              to={trip.href}
            >
              Explorar {trip.title} <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
