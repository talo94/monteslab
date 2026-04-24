export type TableRow = {
  time: string;
  plan: string;
  entry: string;
  notes: string;
};

export type ItineraryDay = {
  id: string;
  title: string;
  rows: TableRow[];
  subtotal: string;
};

export type CityGradient = "valencia" | "lisboa" | "paris" | "lourdes" | "rome";

export type CitySnapshot = {
  label: string;
  value: string;
}[];

export type RouteLink = {
  href: string;
  label: string;
};

export type CityTab = {
  id: string;
  label: string;
  cover: {
    gradient: CityGradient;
    tag: string;
    title: string;
    description: string;
  };
  snapshot: CitySnapshot;
  itinerary: ItineraryDay[];
  checklist: string[];
  budget: { label: string; amount: string }[];
  map: {
    embedUrl: string;
    links: RouteLink[];
    callout?: string;
  };
};

export type Postcard = {
  id: string;
  gradient: CityGradient;
  cityLabel: string;
  title: string;
  /** Línea secundaria: texto y si es un enlace aún no publicado */
  descriptionParts: { text: string; pendingLink?: boolean }[];
  wide?: boolean;
};

export type Kpi = { value: string; label: string };

export type TripNavItem = { id: string; label: string };

export type HeroConfig = {
  title: string;
  subtitle: string;
  eyebrow: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  kpis: Kpi[];
  postcards: Postcard[];
};

export type FlightRow = {
  date: string;
  title: string;
  detail: string;
  tag: "confirmado" | "revisar" | "local";
};

export type HotelRow = {
  flag: string;
  name: string;
  address: string;
  mapUrl: string;
  tag: string;
};

export type UtilityNote = {
  id: string;
  title: string;
  body: string;
};
