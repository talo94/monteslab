export type Status = "documentado" | "plan" | "pendiente"
export type Source = { label: string; url: string; checked: string }
export type Cost = {
  label: string
  amount: number
  basis: "persona" | "grupo de tres"
  kind: "tarifa publicada" | "estimación"
  sourceId: string
}
export type Transfer = {
  id: string
  date: string
  title: string
  time: string
  operator?: string
  status: Status
  provenance: "billete" | "familia" | "propuesta"
  detail: string
  options: string[]
  costs?: Cost[]
  sourceIds?: string[]
}
export type Hotel = {
  id: string
  name: string
  city: string
  address: string
  checkIn: string
  checkOut: string
  hours: string
  note: string
}
export type Activity = {
  id: string
  time: string
  title: string
  note?: string
  status: Status
  kind?: "libre" | "descanso"
  start?: string
  end?: string
}
export type Day = {
  date: string
  title: string
  hotelId?: string
  overnight?: string
  transferIds: string[]
  activities: Activity[]
}
export type Stage = {
  id: string
  city: string
  country: string
  dates: string
  intro: string
  accent: "sage" | "blue" | "rose" | "gold"
  days: Day[]
  tips: string[]
  sourceIds: string[]
}
