import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

export const getTabBarHeight = () => {
  const hasNotch = DeviceInfo.hasNotch()
  if (Platform.OS === 'ios') {
    if (hasNotch) {
      return 34
    }
    return 20
  }
  return 0
}
