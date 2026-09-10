export type HomeLanguage = "es" | "en"

export type HomeSection = "services" | "included" | "contact"

export type Service = {
  name: string
  scope: string
  description: string
}

export type HomeContent = {
  locale: string
  nav: Record<HomeSection, string>
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryAction: string
    whatsappAction: string
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    items: readonly [Service, Service]
  }
  included: {
    eyebrow: string
    title: string
    items: readonly string[]
  }
  complements: {
    eyebrow: string
    title: string
    description: string
  }
  experience: {
    eyebrow: string
    title: string
    description: string
  }
  form: {
    eyebrow: string
    title: string
    description: string
    fields: {
      name: string
      email: string
      business: string
      message: string
    }
    placeholders: {
      name: string
      email: string
      business: string
      message: string
    }
    submit: string
    sending: string
    success: string
    error: string
    unavailable: string
    privacy: string
  }
  footer: string
  whatsappMessage: string
  imageAlt: {
    wireframes: string
    responsive: string
  }
}
