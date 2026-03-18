import { ArnoSource } from './arabic/arno'

export const sources = {
  arno: ArnoSource,
}

export const sourcesNames = ['arno']

export type Sources = keyof typeof sources
