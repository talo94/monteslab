import { useState, type FormEvent } from "react"
import type { HomeContent, HomeLanguage } from "./types"

type FormStatus = "idle" | "sending" | "success" | "error" | "unavailable"

type ContactFormProps = {
  content: HomeContent["form"]
  language: HomeLanguage
}

export default function ContactForm({ content, language }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

    if (!endpoint) {
      setStatus("unavailable")
      return
    }

    setStatus("sending")
    const form = event.currentTarget
    const payload = new FormData(form)
    payload.set("language", language)

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      })

      if (!response.ok) throw new Error("Contact request failed")

      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  const feedback =
    status === "success"
      ? content.success
      : status === "error"
        ? content.error
        : status === "unavailable"
          ? content.unavailable
          : ""

  return (
    <form className="home-contact-form" onSubmit={handleSubmit}>
      <div className="home-form-grid">
        <label>
          <span>{content.fields.name}</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder={content.placeholders.name}
            required
          />
        </label>
        <label>
          <span>{content.fields.email}</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder={content.placeholders.email}
            required
          />
        </label>
      </div>
      <label>
        <span>{content.fields.business}</span>
        <input
          name="business"
          type="text"
          autoComplete="organization"
          placeholder={content.placeholders.business}
          required
        />
      </label>
      <label>
        <span>{content.fields.message}</span>
        <textarea
          name="message"
          rows={5}
          placeholder={content.placeholders.message}
          required
        />
      </label>
      <p className="home-form-privacy">{content.privacy}</p>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? content.sending : content.submit}
      </button>
      <p className="home-form-feedback" aria-live="polite">
        {feedback}
      </p>
    </form>
  )
}
