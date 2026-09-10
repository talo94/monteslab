import type { HomeLanguage, HomeSection } from "./types"
import { sectionIds } from "./content"

export const whatsappNumber = "573006549758"

export function getHomeLanguage(pathname: string): HomeLanguage {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es"
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function getLanguageUrl(
  language: HomeLanguage,
  targetLanguage: HomeLanguage,
  hash: string
): string {
  const section = (Object.keys(sectionIds[language]) as HomeSection[]).find(
    (key) => `#${sectionIds[language][key]}` === hash
  )
  const targetPath = targetLanguage === "es" ? "/" : "/en"

  return section
    ? `${targetPath}#${sectionIds[targetLanguage][section]}`
    : targetPath
}
