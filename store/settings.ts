import { getItem } from 'expo-secure-store'
import { atom } from 'jotai'

export type Settings = {
  fontSize: number
  isOnPressScroll: boolean
  keepAwake: boolean
}

export const settingsAtom = atom<Settings>({
  fontSize: Number(getItem('fontSize')) || 16,
  isOnPressScroll: !!getItem('isOnPressScroll') || false,
  keepAwake: !!getItem('keepAwake') || false,
})
