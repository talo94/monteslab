import { useEffect, useState } from "react";
import { citySurfaceClass } from "@/components/trip/gradients";
import {
  type CityTab,
  ItineraryDayBlock,
  Postcard,
  StatusTag,
  TripCard,
  TripPageLayout,
  TripSectionTitle,
  TripTopBar,
} from "@/components/trip";
import {
  eurotripCities,
  eurotripHero,
  footerNote,
  hotels,
  keyFlights,
  topNav,
  totalBudget,
  utilityNotes,
} from "./data";

function CityPanel({ city }: { city: CityTab }) {
  const surface = citySurfaceClass[city.cover.gradient];

  return (
    <div className="space-y-6">
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <TripCard>
          <div className={`relative h-full overflow-hidden p-7 text-white ${surface}`}>
            <div className="relative z-[1]">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1.5 text-xs font-normal  tracking-[0.03em] text-white">                {city.cover.tag}
              </span>
              <h2 className="mb-0 mt-3 font-['Source_Serif_4',serif] text-4xl font-light leading-none sm:text-5xl">
                {city.cover.title}
              </h2>
              <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-white/95 sm:text-base">
                {city.cover.description}
              </p>
            </div>
          </div>
        </TripCard>
        <TripCard className="p-7">
          <h4 className="mb-0 mt-0 font-['Source_Serif_4',serif] text-xl font-light">Snapshot</h4>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {city.snapshot.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-ml-bg/80 p-4"
              >
                <strong className="block font-['Source_Serif_4',serif] text-[22px] font-light text-ml-ink">
                  {s.label}
                </strong>
                <span className="mt-1 block text-sm text-ml-muted">{s.value}</span>
              </div>
            ))}
          </div>
        </TripCard>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <TripCard className="p-6 sm:p-8">
          <h4 className="mb-3.5 mt-0 font-['Source_Serif_4',serif] text-xl font-light">Itinerario propuesto</h4>
          {city.itinerary.map((d) => (
            <ItineraryDayBlock key={d.id} data={d} />
          ))}
        </TripCard>
        <div className="space-y-5">
          <TripCard className="p-6 sm:p-8">
            <h4 className="mb-3.5 mt-0 font-['Source_Serif_4',serif] text-xl font-light">Checklist</h4>
            <ul className="euro-checklist">
              {city.checklist.map((item) => (
                <li key={item}>
                  <input type="checkbox" name={item} aria-label={item} />
                  {item}
                </li>
              ))}
            </ul>
          </TripCard>
          <TripCard className="p-6 sm:p-8">
            <h4 className="mb-3.5 mt-0 font-['Source_Serif_4',serif] text-xl font-light">Presupuesto estimado</h4>
            {city.budget.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_auto] gap-2.5 border-b border-dotted border-[var(--color-trip-line-soft)] py-2.5 text-sm last:border-0"
              >
                <span className="text-ml-ink">
                  {row.label.includes("Total") ? <strong>{row.label}</strong> : row.label}
                </span>
                <strong className="text-ml-ink">{row.amount}</strong>
              </div>
            ))}
          </TripCard>
          <TripCard className="p-6 sm:p-8">
            <h4 className="mb-3.5 mt-0 font-['Source_Serif_4',serif] text-xl font-light">Mapa</h4>
            <div className="overflow-hidden rounded-2xl bg-ml-card/50">
              <iframe
                title={`Mapa · ${city.cover.title}`}
                className="block min-h-[330px] w-full border-0"
                loading="lazy"
                src={city.map.embedUrl}
              />
            </div>
            {city.map.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2.5">
                {city.map.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-ml-bg px-4 py-2.5 text-sm font-semibold no-underline text-ml-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            {city.map.callout && (
              <p className="mt-3.5 border-t border-dotted border-ml-line/50 bg-[#fff7ef] p-4 text-sm leading-relaxed text-[#6c5740]">
                {city.map.callout}
              </p>
            )}
          </TripCard>
        </div>
      </div>
    </div>
  );
}

export default function EurotripFamiliar() {
  const [activeCity, setActiveCity] = useState<string>(eurotripCities[0].id);

  useEffect(() => {
    const prev = document.title;
    document.title = "Eurotrip 2026 · Talo Family Guide";
    return () => {
      document.title = prev;
    };
  }, []);

  const current = eurotripCities.find((c) => c.id === activeCity) ?? eurotripCities[0];

  return (
    <TripPageLayout>
      <TripTopBar
        title="Eurotrip 2026"
        subtitle="Guía aesthetic · Valencia, Lisboa, Fátima, París, Lourdes y Roma"
        nav={topNav.map((n) => ({ id: n.id, label: n.label }))}
      />
      <main className="mx-auto max-w-[1240px] space-y-10 px-4 pb-16 pt-2 sm:px-6 sm:pt-3">
        <section className="pt-4 sm:pt-8" aria-label="Bienvenida">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <TripCard>
              <div className="relative min-h-[320px] p-7 sm:min-h-[400px] sm:p-8 lg:min-h-[430px]">
                <p className="mb-0 inline-flex items-center gap-2 rounded-full bg-ml-card px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-ml-accent">
                  {eurotripHero.eyebrow}
                </p>
                <h2 className="mb-0 mt-4 max-w-[12ch] font-['Source_Serif_4',serif] text-[2.4rem] font-light leading-[0.98] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                  Nuestro primer viaje soñado.
                </h2>
                <p className="mb-0 mt-4 max-w-[60ch] text-lg leading-relaxed text-ml-muted sm:text-lg">
                  {eurotripHero.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={eurotripHero.primaryCta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ml-ink px-4 py-3.5 text-sm font-semibold text-ml-bg no-underline"
                  >
                    {eurotripHero.primaryCta.label}
                  </a>
                  <a
                    href={eurotripHero.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ml-bg px-4 py-3.5 text-sm font-semibold no-underline text-ml-ink"
                  >
                    {eurotripHero.secondaryCta.label}
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                  {eurotripHero.kpis.map((k) => (
                    <div
                      key={k.label}
                      className="rounded-3xl bg-ml-bg/90 p-4.5"
                    >
                      <strong className="block font-['Source_Serif_4',serif] text-2xl font-light text-ml-ink">
                        {k.value}
                      </strong>
                      <span className="text-sm text-ml-muted">{k.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TripCard>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-3.5">
              {eurotripHero.postcards.map((p) => (
                <Postcard key={p.id} data={p} />
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className="scroll-mt-24">
          <TripSectionTitle>Resumen general</TripSectionTitle>
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <TripCard className="p-6 sm:p-8">
              <h3 className="mb-0 mt-0 font-['Source_Serif_4',serif] text-2xl font-light text-ml-ink sm:text-3xl">
                Vuelos y trayectos clave
              </h3>
              <div className="mt-1 space-y-0">
                {keyFlights.map((f) => (
                  <div
                    key={f.title + f.date}
                    className="grid border-b border-dotted border-[var(--color-trip-line-soft)] py-4 last:border-0 md:grid-cols-[minmax(5rem,auto)_1fr_auto] md:items-start md:gap-3.5"
                  >
                    <div className="min-w-[4.5rem] text-sm font-bold text-ml-ink">{f.date}</div>
                    <div>
                      <strong className="text-ml-ink">{f.title}</strong>
                      <div className="text-sm text-ml-muted">{f.detail}</div>
                    </div>
                    <div className="mt-1 md:mt-0 md:text-right">
                      <StatusTag variant={f.tag}>
                        {f.tag === "confirmado"
                          ? "confirmado"
                          : f.tag === "revisar"
                            ? "revisar"
                            : "local"}
                      </StatusTag>
                    </div>
                  </div>
                ))}
              </div>
            </TripCard>
            <div className="space-y-5">
              <TripCard className="p-6 sm:p-8">
                <h3 className="mb-0 mt-0 font-['Source_Serif_4',serif] text-2xl font-light text-ml-ink sm:text-3xl">Hoteles</h3>
                {hotels.map((hotel) => (
                  <div
                    key={hotel.name + hotel.mapUrl}
                    className="grid border-b border-dotted border-[var(--color-trip-line-soft)] py-4 last:border-0 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-3.5"
                  >
                    <div className="text-2xl" aria-hidden>
                      {hotel.flag}
                    </div>
                    <div className="min-w-0">
                      <strong className="text-ml-ink">{hotel.name}</strong>
                      <a
                        href={hotel.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-0.5 block text-sm text-ml-muted no-underline hover:underline"
                      >
                        {hotel.address}
                      </a>
                    </div>
                    <div className="mt-1 md:mt-0 md:shrink-0 md:justify-self-end">
                      <span className="inline-block rounded-full bg-[#fff7ef] px-2.5 py-1.5 text-xs text-[#7b6140]">
                        {hotel.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </TripCard>
              <TripCard className="p-6 sm:p-8">
                <h3 className="mb-0 mt-0 font-['Source_Serif_4',serif] text-2xl font-light text-ml-ink sm:text-3xl">Presupuesto total estimado</h3>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                  <strong>Total aproximado por persona</strong>
                  <strong className="text-ml-ink">{totalBudget.summary}</strong>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ml-muted">{totalBudget.description}</p>
              </TripCard>
            </div>
          </div>
        </section>

        <section id="cities" className="scroll-mt-20">
          <TripSectionTitle>Itinerarios detallados por ciudad</TripSectionTitle>
          <div
            className="mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-2xl bg-ml-card p-2 sm:flex-row sm:rounded-full"
            role="tablist"
            aria-label="Destinos"
          >
            {eurotripCities.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={activeCity === c.id}
                className={[
                  "flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition sm:rounded-full",
                  activeCity === c.id
                    ? "bg-ml-bg text-ml-ink"
                    : "text-ml-muted hover:bg-ml-bg/70",
                ].join(" ")}
                onClick={() => setActiveCity(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="mt-5" role="tabpanel" aria-label={current.cover.title}>
            <CityPanel city={current} />
          </div>
        </section>

        <section id="notes" className="scroll-mt-24">
          <TripSectionTitle>Notas útiles para la versión final</TripSectionTitle>
          <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
            {utilityNotes.map((u) => (
              <TripCard key={u.id} className="p-5 sm:p-6">
                <h4 className="m-0 font-['Source_Serif_4',serif] text-lg font-light text-ml-ink">{u.title}</h4>
                <p className="m-0 mt-2.5 text-sm leading-relaxed text-ml-muted">{u.body}</p>
              </TripCard>
            ))}
          </div>
        </section>

        <footer className="pt-2 text-sm text-ml-muted sm:pt-6">
          <p className="m-0 max-w-4xl leading-relaxed">{footerNote}</p>
        </footer>
      </main>
    </TripPageLayout>
  );
}
