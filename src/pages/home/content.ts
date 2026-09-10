import type { HomeContent, HomeLanguage, HomeSection } from "./types"

export const sectionIds: Record<HomeLanguage, Record<HomeSection, string>> = {
  es: {
    services: "servicios",
    included: "incluye",
    contact: "contacto",
  },
  en: {
    services: "services",
    included: "included",
    contact: "contact",
  },
}

export const homeContent: Record<HomeLanguage, HomeContent> = {
  es: {
    locale: "es-ES",
    nav: {
      services: "Servicios",
      included: "Qué incluye",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Diseño y desarrollo web",
      title: "Una web clara para presentar tu negocio y facilitar el contacto.",
      description:
        "Diseño y desarrollo páginas web para pequeños negocios y profesionales que necesitan presentar sus servicios y facilitar el contacto con sus clientes.",
      primaryAction: "Cuéntame tu proyecto",
      whatsappAction: "Hablar por WhatsApp",
    },
    services: {
      eyebrow: "Servicios",
      title: "Dos opciones, una misma forma de trabajar.",
      intro:
        "Webs claras y adaptables, construidas alrededor de lo que necesita tu negocio.",
      items: [
        {
          name: "Web Esencial",
          scope: "Una página · hasta 6 secciones",
          description:
            "Para presentar tu actividad, tus servicios y una vía clara de contacto.",
        },
        {
          name: "Web Completa",
          scope: "Hasta 5 páginas",
          description:
            "Para negocios que necesitan organizar más contenido y explicar mejor su oferta.",
        },
      ],
    },
    included: {
      eyebrow: "Qué incluye",
      title: "Lo necesario para publicar una web cuidada.",
      items: [
        "Diseño responsive",
        "Contacto",
        "SEO básico",
        "2 rondas de cambios",
        "Publicación",
      ],
    },
    complements: {
      eyebrow: "Complementos",
      title: "Reservas y herramientas útiles",
      description:
        "También integro reservas online y, cuando aporta valor, asistentes sencillos de WhatsApp.",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Tecnología con criterio y acompañamiento cercano.",
      description:
        "Llevo 10 años desarrollando software, más de 6 con React. Integro herramientas de IA en mi proceso para trabajar con agilidad sin descuidar la calidad.",
    },
    form: {
      eyebrow: "Contacto",
      title: "Cuéntame qué necesitas",
      description:
        "Comparte una idea general de tu proyecto y te responderé para entenderlo mejor.",
      fields: {
        name: "Nombre",
        email: "Correo",
        business: "Tipo de negocio",
        message: "¿Qué necesitas?",
      },
      placeholders: {
        name: "Tu nombre",
        email: "tu@correo.com",
        business: "Por ejemplo, consulta, estudio o tienda",
        message: "Cuéntame brevemente sobre tu proyecto",
      },
      submit: "Enviar consulta",
      sending: "Enviando…",
      success: "Gracias. He recibido tu consulta.",
      error: "No se pudo enviar. Inténtalo de nuevo o escríbeme por WhatsApp.",
      unavailable:
        "El formulario todavía no está activo. Puedes escribirme por WhatsApp.",
      privacy:
        "Usaré estos datos únicamente para responder a tu consulta. No envíes información sensible.",
    },
    footer: "Diseño y desarrollo web",
    whatsappMessage:
      "Hola, Natalia. Me gustaría hablar contigo sobre una página web para mi negocio.",
    imageAlt: {
      wireframes:
        "Revisión de wireframes de una web y su adaptación a varios tamaños de pantalla",
      responsive:
        "Una web mostrada en una pantalla de escritorio y en un teléfono",
    },
  },
  en: {
    locale: "en",
    nav: {
      services: "Services",
      included: "What's included",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Web design and development",
      title:
        "A clear website to present your business and make contact easier.",
      description:
        "I design and develop websites for small businesses and professionals who need to present their services and make it easy for clients to get in touch.",
      primaryAction: "Tell me about your project",
      whatsappAction: "Chat on WhatsApp",
    },
    services: {
      eyebrow: "Services",
      title: "Two options, the same thoughtful process.",
      intro:
        "Clear, responsive websites built around what your business actually needs.",
      items: [
        {
          name: "Essential Website",
          scope: "One page · up to 6 sections",
          description:
            "For presenting your work, your services and a clear way to get in touch.",
        },
        {
          name: "Complete Website",
          scope: "Up to 5 pages",
          description:
            "For businesses that need to organise more content and explain their offer in depth.",
        },
      ],
    },
    included: {
      eyebrow: "What's included",
      title: "Everything needed to publish a thoughtful website.",
      items: [
        "Responsive design",
        "Contact",
        "Basic SEO",
        "2 revision rounds",
        "Publication",
      ],
    },
    complements: {
      eyebrow: "Add-ons",
      title: "Bookings and useful tools",
      description:
        "I also integrate online bookings and, when they add value, simple WhatsApp assistants.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Technical judgement and a close working relationship.",
      description:
        "I have 10 years of software development experience, including more than 6 with React. I use AI tools in my process to work efficiently without compromising quality.",
    },
    form: {
      eyebrow: "Contact",
      title: "Tell me what you need",
      description:
        "Share a general idea of your project and I'll reply so I can understand it better.",
      fields: {
        name: "Name",
        email: "Email",
        business: "Type of business",
        message: "What do you need?",
      },
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        business: "For example, a practice, studio or shop",
        message: "Tell me briefly about your project",
      },
      submit: "Send enquiry",
      sending: "Sending…",
      success: "Thank you. I've received your enquiry.",
      error: "It couldn't be sent. Try again or message me on WhatsApp.",
      unavailable: "The form isn't active yet. You can message me on WhatsApp.",
      privacy:
        "I'll use these details only to respond to your enquiry. Please don't send sensitive information.",
    },
    footer: "Web design and development",
    whatsappMessage:
      "Hi Natalia. I'd like to talk to you about a website for my business.",
    imageAlt: {
      wireframes:
        "Reviewing website wireframes and their layout across different screen sizes",
      responsive: "A website displayed on a desktop screen and a phone",
    },
  },
}
