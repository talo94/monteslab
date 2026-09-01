import type { CityTab } from "@/components/trip"
import { eurotripHero, topNav } from "./hero"
import { hotels, keyFlights, totalBudget } from "./overview"
import { lourdesCity } from "./lourdes"
import { lisboaCity } from "./lisboa"
import { parisCity } from "./paris"
import { romeCity } from "./rome"
import { valenciaCity } from "./valencia"
import { footerNote, utilityNotes } from "./notes"

export {
  eurotripHero,
  topNav,
  hotels,
  keyFlights,
  totalBudget,
  footerNote,
  utilityNotes,
}

export const eurotripCities: CityTab[] = [
  valenciaCity,
  lisboaCity,
  parisCity,
  lourdesCity,
  romeCity,
]
