import { ArnoSource } from './arabic/ArnoSource'

export const sources = {
  arno: ArnoSource,
}

export const sourcesNames = ['arno']

export type Sources = keyof typeof sources
