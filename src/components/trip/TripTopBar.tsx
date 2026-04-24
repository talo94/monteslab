import type { TripNavItem } from "./types";

type TripTopBarProps = {
  seal?: string;
  title: string;
  subtitle: string;
  nav: TripNavItem[];
};

export function TripTopBar({ seal = "✦", title, subtitle, nav }: TripTopBarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-ml-line/50 bg-ml-bg/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-3.5">
          <div
            className="grid size-[42px] shrink-0 place-items-center rounded-full bg-ml-accent text-lg text-ml-bg"
            aria-hidden
          >
            {seal}
          </div>
          <div className="min-w-0">
            <h1 className="m-0 text-lg font-bold tracking-wide text-ml-ink">{title}</h1>
            <p className="m-0 mt-0.5 text-xs text-ml-muted">{subtitle}</p>
          </div>
        </div>
        <nav className="flex flex-wrap justify-end gap-2.5" aria-label="Secciones de la guía">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full  px-3.5 py-2.5 text-sm text-ml-ink no-underline transition hover:bg-ml-card"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
