import type { CityGradient } from "./types";

/**
 * Fondos sólidos por ciudad (sin degradados, alineado con guía de estilo).
 */
export const citySurfaceClass: Record<CityGradient, string> = {
  valencia: "bg-[#9a7a55]",
  lisboa: "bg-[#a86a52]",
  paris: "bg-[#5a6b82]",
  lourdes: "bg-[#5c7879]",
  rome: "bg-[#7a4f42]",
};
