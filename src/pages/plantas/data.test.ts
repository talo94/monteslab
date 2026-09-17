import { describe, expect, it } from "vitest"
import { plants, getPlant } from "./data"
import { isPlantPath } from "../../routes/routes"

describe("plant catalogue", () => {
  it("contains all eleven plants in document order with unique addresses", () => {
    expect(plants.map((p) => p.name)).toEqual([
      "Elena",
      "Eva",
      "Matilda",
      "Fortuna",
      "Juana",
      "Olivia",
      "Perla",
      "Brownie",
      "Alba",
      "Lola",
      "Pepa",
    ])
    expect(new Set(plants.map((p) => p.slug)).size).toBe(11)
    for (const plant of plants) {
      expect(getPlant(plant.slug)).toBe(plant)
      expect(plant.sections.length).toBeGreaterThanOrEqual(6)
      expect(plant.sources.length).toBeGreaterThan(0)
      expect(new Set(plant.sections.map((s) => s.id)).size).toBe(
        plant.sections.length
      )
      for (const section of plant.sections)
        expect(section.paragraphs.length).toBeGreaterThan(0)
      for (const url of plant.sources)
        expect(new URL(url).protocol).toBe("https:")
    }
    expect(getPlant("desconocida")).toBeUndefined()
    expect(getPlant(undefined)).toBeUndefined()
  })
  it("preserves specific care and uncertain identification", () => {
    expect(
      getPlant("olivia")
        ?.sections.find((s) => s.title === "Riego")
        ?.paragraphs.join(" ")
    ).toContain("no se riega tierra")
    expect(
      getPlant("alba")?.sections.some((s) =>
        s.title.includes("sustrato y raíces")
      )
    ).toBe(true)
    expect(
      getPlant("lola")?.sections.some(
        (s) => s.title === "Cómo hacerla más tupida"
      )
    ).toBe(true)
    expect(getPlant("matilda")?.identification).toContain("probablemente")
    expect(getPlant("juana")?.identification).toContain("posiblemente")
    expect(getPlant("alba")?.identification).toContain("no permite confirmar")
  })
  it("limits the section boundary and ships noindex without changing the sitemap", () => {
    for (const p of ["/plantas", "/plantas/", "/plantas/elena"])
      expect(isPlantPath(p)).toBe(true)
    for (const p of ["/", "/en", "/plantas-publicas"])
      expect(isPlantPath(p)).toBe(false)
  })
})
