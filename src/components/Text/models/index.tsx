import { StyleProp, TextProps, TextStyle } from 'react-native'

export interface Props extends TextProps {
  size?: FontSizeTypes
  type?: FontType
  color?: string
  style?: StyleProp<TextStyle>
  scaled?: boolean
  children?: Element
}
export type FontSizeTypes =
  | 'headingLargeTitle'
  | 'headingTitle'
  | 'heading'
  | 'large'
  | 'medium'
  | 'small'
  | 'xSmall'
  | 'xxSmall'

export interface FontSize {
  headingLargeTitle: number
  headingTitle: number
  heading: number
  large: number
  medium: number
  small: number
  xSmall: number
}

export type FontType = 'extraBold' | 'bold' | 'light' | 'medium'
