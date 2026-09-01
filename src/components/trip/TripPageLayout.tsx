import type { ReactNode } from "react"

type TripPageLayoutProps = {
  children: ReactNode
  className?: string
}

/**
 * Fondo y tipografía base para guías de viaje (Grecia: crema, sin degradado de fondo).
 */
export function TripPageLayout({
  children,
  className = "",
}: TripPageLayoutProps) {
  return (
    <div
      className={[
        "font-family-trip-sans min-h-screen bg-ml-bg text-ml-ink",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}
