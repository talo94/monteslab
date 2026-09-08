import { describe, expect, it } from "vitest"
import { days, stages } from "./itinerary"
import { hotels, hotelMapUrl } from "./hotels"
import { sources } from "./sources"
import { transfers, transferById } from "./transfers"

const activity = (id: string) =>
  days.flatMap((d) => d.activities).find((a) => a.id === id)!
const minutes = (time: string) => {
  const [h, m] = time.split(":").map(Number)
  return h * 60 + m
}
describe("Guía familiar de septiembre", () => {
  it("incluye todos los días una sola vez y en orden", () => {
    expect(days.map((d) => d.date)).toEqual(
      Array.from(
        { length: 19 },
        (_, i) => `2026-09-${String(i + 6).padStart(2, "0")}`
      )
    )
    expect(new Set(stages.map((s) => s.id)).size).toBe(stages.length)
    expect(
      new Set(days.flatMap((d) => d.activities.map((a) => a.id))).size
    ).toBe(days.flatMap((d) => d.activities).length)
  })
  it("cada día enlaza alojamientos vigentes y traslados existentes", () => {
    for (const day of days) {
      expect(day.activities.length).toBeGreaterThan(0)
      expect(Boolean(day.hotelId || day.overnight)).toBe(true)
      if (day.hotelId) {
        const hotel = hotels.find((h) => h.id === day.hotelId)!
        expect(hotel).toBeDefined()
        expect(day.date >= hotel.checkIn && day.date < hotel.checkOut).toBe(
          true
        )
      }
      for (const id of day.transferIds) expect(transferById[id]).toBeDefined()
    }
    for (const transfer of transfers)
      expect(days.some((d) => d.transferIds.includes(transfer.id))).toBe(true)
  })
  it("los seis mapas identifican establecimiento y dirección, sin enlaces privados", () => {
    expect(hotels).toHaveLength(6)
    for (const hotel of hotels) {
      const url = new URL(hotelMapUrl(hotel))
      expect(url.origin).toBe("https://www.google.com")
      expect(url.pathname).toBe("/maps/search/")
      expect(url.searchParams.get("api")).toBe("1")
      expect(url.searchParams.get("query")).toBe(
        `${hotel.name}, ${hotel.address}`
      )
      expect([...url.searchParams.keys()]).toEqual(["api", "query"])
    }
  })
  it("conserva los horarios aportados y distingue su procedencia", () => {
    expect(transferById["vlc-lis"]).toMatchObject({
      date: "2026-09-08",
      operator: "Ryanair",
      time: "Salida 21:20",
      provenance: "familia",
      status: "plan",
    })
    expect(transferById["par-ven"]).toMatchObject({
      time: "07:40 → 09:20",
      status: "documentado",
    })
    expect(transferById["ven-rom"]).toMatchObject({
      title: "Venezia Mestre → Roma Termini",
      time: "08:34 → 12:04",
      status: "documentado",
    })
    expect(transferById["rom-vlc"].time).toBe("Salida 19:40")
    expect(transferById["mad-clo"].time).toBe("Salida 12:00")
    expect(activity("versalles")).toMatchObject({
      time: "13:00",
      status: "documentado",
    })
  })
  it("mantiene las confirmaciones pendientes sin convertirlas en reservas", () => {
    for (const id of ["lis-par", "lis-fat", "fat-lis", "ven-mestre", "vlc-mad"])
      expect(transferById[id].status).toBe("pendiente")
    expect(transferById["lis-par"].time).toContain("Sobre 06:00")
    expect(transferById["vlc-mad"].time).toContain("23 o 24")
    expect(activity("disney").status).toBe("plan")
  })
  it("mantiene las celebraciones del jueves y el texto público del lunes", () => {
    expect(activity("misa")).toMatchObject({
      time: "19:15",
      title: "Misa en español",
    })
    expect(activity("rosario")).toMatchObject({
      time: "21:30",
      title: "Rosario y procesión eucarística",
    })
    expect(activity("eiffel")).toEqual({
      id: "eiffel",
      time: "19:30",
      title: "Visita y atardecer en la Torre Eiffel",
      status: "plan",
      note: undefined,
    })
    const monday = days.find((d) => d.date === "2026-09-14")!
    expect(monday.activities.some((a) => a.id === "eiffel")).toBe(true)
  })
  it("reserva al menos tres horas seguidas al Foro y descanso antes del Coliseo", () => {
    const forum = activity("foro")
    expect(minutes(forum.end!) - minutes(forum.start!)).toBeGreaterThanOrEqual(
      180
    )
    expect(forum.time).toBe(`${forum.start}–${forum.end}`)
    const thursday = days.find((d) => d.date === "2026-09-17")!
    const indexForum = thursday.activities.findIndex((a) => a.id === "foro")
    const indexColosseum = thursday.activities.findIndex(
      (a) => a.id === "coliseo"
    )
    expect(
      thursday.activities
        .slice(indexForum + 1, indexColosseum)
        .some((a) => a.kind === "descanso")
    ).toBe(true)
    expect(activity("coliseo")).toMatchObject({
      time: "17:30–18:45",
      status: "documentado",
    })
  })
  it("mantiene libres los días de Valencia sin compromisos", () => {
    for (const date of [
      "2026-09-07",
      "2026-09-19",
      "2026-09-20",
      "2026-09-21",
      "2026-09-22",
    ]) {
      const day = days.find((d) => d.date === date)!
      expect(day.activities).toHaveLength(1)
      expect(day.activities[0]).toMatchObject({
        title: "Tiempo libre",
        kind: "libre",
        time: "Todo el día",
      })
    }
  })
  it("los costes comparables incluyen base, fuente y fecha de consulta", () => {
    const costs = transfers.flatMap((t) => t.costs ?? [])
    expect(costs.length).toBeGreaterThan(0)
    for (const c of costs) {
      expect(c.amount).toBeGreaterThan(0)
      expect(c.basis).toBe("grupo de tres")
      expect(c.kind).toBe("tarifa publicada")
      expect(sources[c.sourceId].checked).toBe("2026-09-08")
    }
    expect(transferById["lis-par"].costs?.map((c) => c.amount)).toEqual([
      42, 45, 56,
    ])
    expect(transferById["rom-vlc"].costs?.map((c) => c.amount)).toEqual([
      21, 42, 55,
    ])
    for (const id of [
      ...stages.flatMap((s) => s.sourceIds),
      ...transfers.flatMap((t) => t.sourceIds ?? []),
    ])
      expect(new URL(sources[id].url).protocol).toBe("https:")
  })
})
