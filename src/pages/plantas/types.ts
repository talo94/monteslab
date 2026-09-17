export interface Plant {
  slug: string
  number: number
  name: string
  identification: string
  shortIdentification: string
  imageSource: string
  imageIndex?: number
  sections: { id: string; title: string; paragraphs: string[] }[]
  sources: string[]
}
