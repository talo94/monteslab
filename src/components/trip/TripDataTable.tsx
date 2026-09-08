import type { TableRow } from "./types"

const cols = [
  { key: "time" as const, label: "Hora" },
  { key: "plan" as const, label: "Plan" },
  { key: "entry" as const, label: "Entrada" },
  { key: "notes" as const, label: "Notas" },
] as const

type TripDataTableProps = {
  rows: TableRow[]
}

export function TripDataTable({ rows }: TripDataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm leading-normal">
        <thead>
          <tr>
            {cols.map((c) => (
              <th
                key={c.key}
                scope="col"
                className="border-b border-dotted border-[var(--color-trip-line-soft)] p-2.5 py-3 text-xs font-medium uppercase tracking-[0.08em] text-ml-muted sm:px-2.5"
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {cols.map((c) => (
                <td
                  key={c.key}
                  className="max-w-[min(32ch,100%)] border-b border-dotted border-[var(--color-trip-line-soft)] p-2.5 py-3 align-top sm:px-2.5"
                >
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
