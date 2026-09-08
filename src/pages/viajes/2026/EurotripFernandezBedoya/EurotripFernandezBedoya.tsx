import { useEffect } from "react"
import { Link } from "react-router-dom"
import { TripPageLayout } from "../../../../components/trip/TripPageLayout"
import { routes } from "../../../../routes/routes"
import { stages, days, formatDate } from "./data/itinerary"
import { hotels, hotelMapUrl } from "./data/hotels"
import { transfers } from "./data/transfers"
import { sources } from "./data/sources"
import { DayBlock, ExternalLink, SourceLinks, StatusLabel } from "./TripDetails"
import "./eurotrip-fernandez-bedoya.css"

const navigation = [
  { id: "resumen", label: "El viaje" },
  { id: "itinerario", label: "Día a día" },
  { id: "hoteles", label: "Hoteles" },
  { id: "traslados", label: "Traslados" },
]
const highlights = [
  {
    day: "10",
    month: "SEP",
    title: "Una noche en Fátima",
    detail: "Santuario, pastorcitos y oración",
    href: "#dia-2026-09-10",
  },
  {
    day: "13",
    month: "SEP",
    title: "Un día de magia",
    detail: "Disney, de principio a fin",
    href: "#dia-2026-09-13",
  },
  {
    day: "15",
    month: "SEP",
    title: "Entre canales",
    detail: "Descubrir Venecia desde el agua",
    href: "#dia-2026-09-15",
  },
]
export default function EurotripFernandezBedoya() {
  useEffect(() => {
    const previous = document.title
    document.title = "Eurotrip · Familia Fernández Bedoya | Montes Lab"
    return () => {
      document.title = previous
    }
  }, [])
  return (
    <TripPageLayout className="fb-guide">
      <a className="fb-skip" href="#contenido-viaje">
        Saltar al contenido
      </a>
      <header className="fb-header">
        <Link to={routes.viajes} className="fb-back">
          ←{" "}
          <span>
            Montes Lab <span className="fb-header-divider">/</span> Viajes
          </span>
        </Link>
        <span className="fb-edition">CUADERNO DE VIAJE · 2026</span>
      </header>
      <nav className="fb-nav" aria-label="Secciones del viaje">
        <div>
          {navigation.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </div>
        <span>06 — 24 SEP</span>
      </nav>
      <main id="contenido-viaje" tabIndex={-1}>
        <section className="fb-hero" aria-labelledby="trip-title">
          <div>
            <p className="fb-eyebrow">
              <span className="fb-small-line" /> SEPTIEMBRE EN EUROPA
            </p>
            <h1 id="trip-title">
              Un viaje para
              <br />
              <em>recordar juntos.</em>
            </h1>
            <p className="fb-family">Familia Fernández Bedoya</p>
            <p className="fb-lead">
              Del Mediterráneo a los canales de Venecia. Ciudades por descubrir,
              mesas compartidas y tiempo para estar en familia.
            </p>
            <a className="fb-primary" href="#itinerario">
              Abrir el itinerario <span aria-hidden="true">↗</span>
            </a>
          </div>
          <aside className="fb-route-card" aria-label="Recorrido del viaje">
            <div className="fb-ticket-top">
              <span>EUROTRIP</span>
              <span>IDA & RECUERDOS</span>
            </div>
            <div className="fb-ticket-title">
              <span>De aquí,</span>
              <span>a todas estas historias.</span>
            </div>
            <ol className="fb-route-list">
              {[
                { city: "Valencia", date: "06–08", href: "valencia-inicio" },
                { city: "Lisboa & Fátima", date: "08–12", href: "lisboa" },
                { city: "París", date: "12–15", href: "paris" },
                { city: "Venecia", date: "15–16", href: "venecia" },
                { city: "Roma", date: "16–18", href: "roma" },
                {
                  city: "Valencia · Madrid · Cali",
                  date: "18–24",
                  href: "regreso",
                },
              ].map((s, i) => (
                <li key={s.city}>
                  <span className="fb-route-number">0{i + 1}</span>
                  <a href={`#etapa-${s.href}`}>{s.city}</a>
                  <span>
                    {s.date} <small>SEP</small>
                  </span>
                </li>
              ))}
            </ol>
            <div className="fb-ticket-bottom">
              <span>
                TRES VIAJEROS
                <br />
                <strong>Mil recuerdos.</strong>
              </span>
              <span className="fb-stamp" aria-hidden="true">
                SEP
                <br />
                2026
              </span>
            </div>
          </aside>
        </section>
        <section
          id="resumen"
          className="fb-section"
          aria-labelledby="summary-title"
        >
          <div className="fb-section-heading">
            <div>
              <p className="fb-eyebrow">01 / EL VIAJE</p>
              <h2 id="summary-title">Todo lo esencial, a mano.</h2>
            </div>
            <p>
              Del 6 al 24 de septiembre de 2026.
              <br />
              Horarios locales en cada destino.
            </p>
          </div>
          <div className="fb-stats">
            <div>
              <strong>{days.length}</strong>
              <span>días de viaje</span>
            </div>
            <div>
              <strong>3</strong>
              <span>viajeros</span>
            </div>
            <div>
              <strong>4</strong>
              <span>países europeos</span>
            </div>
            <div>
              <strong>{hotels.length}</strong>
              <span>alojamientos</span>
            </div>
          </div>
          <div className="fb-highlights">
            {highlights.map((h) => (
              <a key={h.day} href={h.href}>
                <span className="fb-highlight-date">
                  {h.day}
                  <small>{h.month}</small>
                </span>
                <span>
                  <strong>{h.title}</strong>
                  <span>{h.detail}</span>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <details className="fb-pending">
            <summary>Antes de salir: lo que queda por confirmar</summary>
            <ul>
              <li>
                Vuelo Lisboa–París del 12: aeropuerto y llegada para encajar
                Versalles a las 13:00.
              </li>
              <li>
                Autobuses a Fátima, regional a Mestre, billete de Disney y
                custodia anticipada de maletas.
              </li>
              <li>
                Tren Valencia–Madrid: el 23 con noche allí o el 24 temprano,
                comprobando la conexión.
              </li>
              <li>
                Llegadas de los vuelos a Lisboa y Valencia; datos del billete
                Madrid–Cali.
              </li>
            </ul>
            <p>
              «Reservado» indica un billete revisado. Los planes y las franjas
              orientativas no equivalen a nuevas reservas.
            </p>
          </details>
        </section>
        <section
          id="itinerario"
          className="fb-section"
          aria-labelledby="itinerary-title"
        >
          <div className="fb-section-heading">
            <div>
              <p className="fb-eyebrow">02 / DÍA A DÍA</p>
              <h2 id="itinerary-title">Cada ciudad, a nuestro ritmo.</h2>
            </div>
            <p>
              Un plan para orientarse.
              <br />Y huecos para improvisar.
            </p>
          </div>
          <nav className="fb-city-nav" aria-label="Etapas del itinerario">
            {stages.map((s, i) => (
              <a key={s.id} href={`#etapa-${s.id}`}>
                <span>0{i + 1}</span>
                {s.city}
              </a>
            ))}
          </nav>
          {stages.map((stage, i) => (
            <section
              key={stage.id}
              id={`etapa-${stage.id}`}
              className={`fb-stage fb-stage--${stage.accent}`}
              aria-labelledby={`titulo-${stage.id}`}
            >
              <div className="fb-stage-intro">
                <div>
                  <p className="fb-eyebrow">
                    ETAPA 0{i + 1} / {stage.country}
                  </p>
                  <h3 id={`titulo-${stage.id}`}>{stage.city}</h3>
                  <span className="fb-stage-dates">{stage.dates} · 2026</span>
                </div>
                <p>{stage.intro}</p>
              </div>
              {stage.days.map((day) => (
                <DayBlock key={day.date} day={day} />
              ))}
              {stage.tips.length > 0 && (
                <aside
                  className="fb-tips"
                  aria-label={`Notas para ${stage.city}`}
                >
                  <h4>Para tener a mano</h4>
                  <ul>
                    {stage.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                  {stage.sourceIds.length > 0 && (
                    <SourceLinks ids={stage.sourceIds} />
                  )}
                </aside>
              )}
              <a className="fb-back-to-stages" href="#itinerario">
                ↑ Volver a las etapas
              </a>
            </section>
          ))}
        </section>
        <section
          id="hoteles"
          className="fb-section"
          aria-labelledby="hotels-title"
        >
          <div className="fb-section-heading">
            <div>
              <p className="fb-eyebrow">03 / DONDE DESCANSAMOS</p>
              <h2 id="hotels-title">Una llave en cada ciudad.</h2>
            </div>
            <p>
              Direcciones y horarios.
              <br />
              El mapa, a un toque.
            </p>
          </div>
          <div className="fb-hotels">
            {hotels.map((h) => (
              <article className="fb-hotel" id={`hotel-${h.id}`} key={h.id}>
                <div className="fb-hotel-top">
                  <span>{h.city}</span>
                  <span>
                    {formatDate(h.checkIn)} → {formatDate(h.checkOut)}
                  </span>
                </div>
                <h3>{h.name}</h3>
                <p className="fb-address">{h.address}</p>
                <p className="fb-hotel-hours">{h.hours}</p>
                <p>{h.note}</p>
                <ExternalLink href={hotelMapUrl(h)}>
                  Ver {h.name} en Google Maps
                </ExternalLink>
              </article>
            ))}
          </div>
          <p className="fb-footnote">
            En Valencia: estancia familiar. La noche del 23 depende del tren que
            se elija.
          </p>
        </section>
        <section
          id="traslados"
          className="fb-section"
          aria-labelledby="transfers-title"
        >
          <div className="fb-section-heading">
            <div>
              <p className="fb-eyebrow">04 / DE UN LUGAR A OTRO</p>
              <h2 id="transfers-title">El camino también cuenta.</h2>
            </div>
            <p>
              Billetes, conexiones y alternativas.
              <br />
              Precios comparados para tres.
            </p>
          </div>
          <p className="fb-footnote">
            Tarifas y fuentes consultadas el 8 de septiembre de 2026. Pueden
            cambiar. Uber, consignas y servicios pendientes necesitan
            cotización; no están reservados por esta guía.
          </p>
          <div className="fb-transfers">
            {transfers.map((t) => (
              <article
                key={t.id}
                id={`traslado-${t.id}`}
                className="fb-transfer"
              >
                <div className="fb-transfer-head">
                  <span className="fb-transfer-date">{formatDate(t.date)}</span>
                  <StatusLabel status={t.status} />
                </div>
                <h3>{t.title}</h3>
                <p className="fb-transfer-time">{t.time}</p>
                {t.operator && <p className="fb-operator">{t.operator}</p>}
                <p>{t.detail}</p>
                {t.options.length > 0 && (
                  <ul>
                    {t.options.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                )}
                {t.costs && (
                  <div className="fb-costs">
                    {t.costs.map((c) => (
                      <div key={c.label}>
                        <span>
                          {c.label}
                          <small>
                            {c.kind} · {c.basis}
                          </small>
                        </span>
                        <strong>
                          {new Intl.NumberFormat("es-ES", {
                            style: "currency",
                            currency: "EUR",
                            maximumFractionDigits: 2,
                          }).format(c.amount)}
                        </strong>
                      </div>
                    ))}
                  </div>
                )}
                {((t.sourceIds?.length ?? 0) > 0 || t.costs) && (
                  <SourceLinks
                    ids={[
                      ...(t.sourceIds ?? []),
                      ...(t.costs?.map((c) => c.sourceId) ?? []),
                    ]}
                  />
                )}
              </article>
            ))}
          </div>
        </section>
        <footer className="fb-footer">
          <span>
            Familia Fernández Bedoya
            <br />
            <strong>Europa, septiembre de 2026.</strong>
          </span>
          <Link to={routes.viajes}>← Volver a Viajes</Link>
          <p>
            Guía para disfrutar juntos. Información de referencia consultada el{" "}
            {formatDate(sources.fatima.checked)} de 2026; confirmar horarios y
            servicios antes de viajar.
          </p>
        </footer>
      </main>
    </TripPageLayout>
  )
}
