import type { ReactNode } from "react"

type TripCardProps = {
  children: ReactNode
  className?: string
}

export function TripCard({ children, className = "" }: TripCardProps) {
  return (
    <div
      className={[
        "overflow-hidden rounded-3xl",
        "bg-[var(--color-trip-paper)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}
