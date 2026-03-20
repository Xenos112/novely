import { sources } from '@/sources'
import type { Sources } from '@/sources'
import type { Source } from '@/sources/base'

export function getSource(sourceName: Sources): Source {
  return new (sources[sourceName] as unknown as new () => Source)()
}
