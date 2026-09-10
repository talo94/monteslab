import { describe, expect, it } from "vitest"
import { homeContent, sectionIds } from "./content"
import {
  getHomeLanguage,
  getLanguageUrl,
  getWhatsAppUrl,
  whatsappNumber,
} from "./contact"

describe("home contact and languages", () => {
  it("uses the approved WhatsApp number and encodes the message", () => {
    const url = getWhatsAppUrl(homeContent.es.whatsappMessage)

    expect(whatsappNumber).toBe("573006549758")
    expect(url).toContain(`https://wa.me/${whatsappNumber}?text=`)
    expect(decodeURIComponent(url)).toContain("Hola, Natalia")
  })

  it("selects a language from the stable home routes", () => {
    expect(getHomeLanguage("/")).toBe("es")
    expect(getHomeLanguage("/en")).toBe("en")
    expect(getHomeLanguage("/viajes")).toBe("es")
  })

  it("preserves the equivalent section when changing language", () => {
    expect(getLanguageUrl("es", "en", `#${sectionIds.es.included}`)).toBe(
      "/en#included"
    )
    expect(getLanguageUrl("en", "es", `#${sectionIds.en.contact}`)).toBe(
      "/#contacto"
    )
  })
})
