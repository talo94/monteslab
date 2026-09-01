import type { ItineraryDay, TableRow } from "./types"

export const r = (
  time: string,
  plan: string,
  entry: string,
  notes: string
): TableRow => ({
  time,
  plan,
  entry,
  notes,
})

export const day = (
  id: string,
  title: string,
  rows: TableRow[],
  subtotal: string
): ItineraryDay => ({
  id,
  title,
  rows,
  subtotal,
})
