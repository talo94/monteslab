import type { ReactNode } from "react"
import type { Day, Status } from "./data/types"
import { hotels } from "./data/hotels"
import { formatDate } from "./data/itinerary"
import { sources } from "./data/sources"
import { transferById } from "./data/transfers"

const statusLabels: Record<Status, string> = {
  documentado: "Reservado",
  plan: "Plan del viaje",
  pendiente: "Por confirmar",
}
export function StatusLabel({ status }: { status: Status }) {
  return (
    <span className={`fb-status fb-status--${status}`}>
      {statusLabels[status]}
    </span>
  )
}
export function ExternalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (abre otra pestaña)</span>
    </a>
  )
}
export function SourceLinks({ ids }: { ids: string[] }) {
  return (
    <div className="fb-sources">
      {[...new Set(ids)].map((id) => (
        <ExternalLink key={id} href={sources[id].url}>
          {sources[id].label}
        </ExternalLink>
      ))}
    </div>
  )
}
export function DayBlock({ day }: { day: Day }) {
  const hotel = hotels.find((h) => h.id === day.hotelId)
  return (
    <article className="fb-day" id={`dia-${day.date}`}>
      <div className="fb-day-date">
        <time dateTime={day.date}>
          <span>{formatDate(day.date, { weekday: "short" })}</span>
          <strong>{formatDate(day.date, { day: "2-digit" })}</strong>
          <span>septiembre</span>
        </time>
      </div>
      <div className="fb-day-body">
        <h4>{day.title}</h4>
        {day.transferIds.length > 0 && (
          <div className="fb-day-transfers">
            {day.transferIds.map((id) => {
              const t = transferById[id]
              return (
                <a key={id} href={`#traslado-${id}`}>
                  <span aria-hidden="true">↗</span>
                  <span>
                    <strong>{t.title}</strong>
                    <span>
                      {t.time}
                      {t.operator ? ` · ${t.operator}` : ""}
                    </span>
                  </span>
                  <span className="fb-transfer-cue">Ver traslado</span>
                </a>
              )
            })}
          </div>
        )}
        <ol className="fb-timeline">
          {day.activities.map((activity) => (
            <li
              key={activity.id}
              className={
                activity.kind ? `fb-activity--${activity.kind}` : undefined
              }
            >
              <span className="fb-time">{activity.time}</span>
              <div>
                <strong>{activity.title}</strong>
                {activity.status !== "plan" && (
                  <StatusLabel status={activity.status} />
                )}
                {activity.note && <p>{activity.note}</p>}
              </div>
            </li>
          ))}
        </ol>
        <div className="fb-overnight">
          <span aria-hidden="true">☾</span>{" "}
          <span>
            Noche en{" "}
            {hotel ? (
              <a href={`#hotel-${hotel.id}`}>{hotel.name}</a>
            ) : (
              day.overnight
            )}
          </span>
        </div>
      </div>
    </article>
  )
}
