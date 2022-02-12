import { PressableProps, StyleProp, ViewStyle } from 'react-native'

export interface Props extends PressableProps {
  backgroundColor?: string
  borderless?: boolean
  rippleBackgroundColor?: string
  style?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle>
}
