export const APP = {
  GRID_COLUMNS: 3,
  SKELETON_ITEMS: 12,
  MAX_DESCRIPTION_LENGTH: 300,
  CHAPTER_SKELETON_COUNT: 10,
} as const

export const QUERY = {
  STALE_TIME: 5 * 60 * 1000,
  GC_TIME: 10 * 60 * 1000,
  RETRY: 2,
} as const
