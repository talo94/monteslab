import type { FlightRow } from "./types"

const styles: Record<FlightRow["tag"], string> = {
  confirmado: "bg-[#fff7ef] text-[#7b6140]",
  revisar: "bg-amber-50 text-amber-900",
  local: "bg-stone-100 text-stone-800",
}

type StatusTagProps = {
  variant: FlightRow["tag"]
  children: string
}

export function StatusTag({ variant, children }: StatusTagProps) {
  return (
    <span
      className={[
        "inline-block rounded-full px-2.5 py-1.5 text-xs",
        styles[variant],
      ].join(" ")}
    >
      {children}
    </span>
  )
}
