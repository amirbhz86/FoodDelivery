import { Platform } from 'react-native'

export const SP = (androidPadding: number) => {
  return Platform.select({ android: androidPadding, ios: androidPadding + 4 })
}
