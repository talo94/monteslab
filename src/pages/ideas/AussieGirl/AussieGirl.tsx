import "./aussie-girl.css"
import { Link } from "react-router-dom"
import { routes } from "../../../routes/routes"
import { pageInfo, scriptSections, travelEssentials } from "./data"

export default function AussieGirl() {
  return (
    <main className="aussie-girl-page relative min-h-screen overflow-x-hidden bg-[#fff5f8] text-[#4a2040]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,182,213,0.45),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(196,181,253,0.4),transparent_50%),radial-gradient(ellipse_at_center,rgba(255,228,240,0.6),transparent_70%)]"
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <Sparkle className="left-[8%] top-[12%] text-2xl opacity-70" delay="0s" />
        <Sparkle className="right-[12%] top-[18%] text-xl opacity-60" delay="1.2s" />
        <Sparkle className="left-[15%] bottom-[20%] text-lg opacity-50" delay="2.4s" />
        <Sparkle className="right-[8%] bottom-[28%] text-2xl opacity-65" delay="0.8s" />
        <Heart className="left-[6%] top-[42%] opacity-40" />
        <Heart className="right-[6%] top-[55%] opacity-35" />
      </div>

      <div className="relative mx-auto max-w-2xl px-5 py-10 pb-16 sm:px-8 sm:py-14">
        <header className="text-center">
          <Link
            to={routes.ideas}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#b5658a] transition hover:text-[#7c3a5c]"
          >
            ← Ideas
          </Link>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#d4789f]">
            {pageInfo.subtitle}
          </p>

          <h1 className="aussie-script mt-3 text-4xl leading-tight text-[#8b2e5c] sm:text-5xl">
            {pageInfo.title}
          </h1>

          <p className="mt-4 text-base text-[#9d5a7a]">{pageInfo.tagline}</p>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#f0a8c8] to-transparent" />
        </header>

        <ol className="mt-10 flex flex-col gap-5">
          {scriptSections.map((section, index) => (
            <li key={section.id}>
              <article
                className={[
                  "relative rounded-[1.75rem] border px-6 py-6 sm:px-8 sm:py-7",
                  section.highlight
                    ? "border-[#f0a8c8] bg-gradient-to-br from-[#fff0f6] via-[#fce7f3] to-[#f5e6ff] shadow-[0_8px_32px_rgba(219,112,147,0.15)]"
                    : "border-[#f5d0e3] bg-white/75 shadow-[0_4px_24px_rgba(219,112,147,0.08)] backdrop-blur-sm",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#d4789f]">
                    {section.label}
                  </p>
                  <span
                    aria-hidden
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fce7f3] text-sm font-bold text-[#d4789f]"
                  >
                    {index + 1}
                  </span>
                </div>

                <div className="mt-3 space-y-3">
                  {section.lines.map((line) => (
                    <p
                      key={line}
                      className={[
                        "leading-relaxed",
                        section.highlight
                          ? "aussie-script text-xl text-[#7c2d5a] sm:text-2xl"
                          : "text-base text-[#5c2d4a] sm:text-lg",
                      ].join(" ")}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {section.id === "travel" && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                    {travelEssentials.map((item) => (
                      <li
                        key={item.id}
                        className="flex flex-col items-center gap-2 rounded-2xl border border-[#f5d0e3] bg-gradient-to-b from-white to-[#fff5f9] px-4 py-4 text-center"
                      >
                        <span className="text-2xl" aria-hidden>
                          {item.emoji}
                        </span>
                        <span className="text-sm font-medium text-[#7c3a5c]">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>

        <footer className="mt-12 text-center">
          <p className="aussie-script text-2xl text-[#c4457a]">💜 Aussie x Nómada 💜</p>
          <p className="mt-2 text-sm text-[#b5658a]">¡A grabar se ha dicho!</p>
        </footer>
      </div>
    </main>
  )
}

function Sparkle({
  className,
  delay,
}: {
  className?: string
  delay: string
}) {
  return (
    <span
      className={`absolute animate-bounce text-[#e8a0c0] ${className ?? ""}`}
      style={{ animationDelay: delay, animationDuration: "3s" }}
      aria-hidden
    >
      ✦
    </span>
  )
}

function Heart({ className }: { className?: string }) {
  return (
    <span className={`absolute text-xl text-[#f0a8c8] ${className ?? ""}`} aria-hidden>
      ♡
    </span>
  )
}
