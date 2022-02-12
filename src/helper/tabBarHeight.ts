import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

export const getTabBarHeight = () => {
  const hasNotch = DeviceInfo.hasNotch()
  if (Platform.OS === 'ios' && hasNotch) {
    return 34
  }
  return 0
}
