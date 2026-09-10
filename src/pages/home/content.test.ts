import { describe, expect, it } from "vitest"
import { homeContent } from "./content"

describe("bilingual home content", () => {
  it("keeps both languages structurally aligned", () => {
    expect(Object.keys(homeContent.es.nav)).toEqual(
      Object.keys(homeContent.en.nav)
    )
    expect(homeContent.es.services.items).toHaveLength(2)
    expect(homeContent.en.services.items).toHaveLength(2)
    expect(homeContent.es.included.items).toHaveLength(5)
    expect(homeContent.en.included.items).toHaveLength(5)
  })

  it("keeps the approved service limits", () => {
    expect(homeContent.es.services.items[0].scope).toContain("6 secciones")
    expect(homeContent.es.services.items[1].scope).toContain("5 páginas")
    expect(homeContent.en.services.items[0].scope).toContain("6 sections")
    expect(homeContent.en.services.items[1].scope).toContain("5 pages")
  })

  it("does not publish unresolved commercial terms", () => {
    const publishedContent = JSON.stringify(homeContent).toLowerCase()

    for (const excluded of [
      "249 €",
      "29 €",
      "12 meses",
      "20 minutos",
      "12 months",
      "20 minutes",
    ]) {
      expect(publishedContent).not.toContain(excluded)
    }
  })
})
