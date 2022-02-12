import { TextInputProps } from 'react-native'

export interface Props extends TextInputProps {
  title?: string
  Icon?: any
  width?: string | number
  style?: any
  placeholder?: string
  height : number
  multiline?: boolean
  secureTextEntry?: boolean
  hasEye ?: boolean
  textInputStyle?: any
  onPress?: () => void
  state?: 'vertical' | 'horizontal'
  textStyle?: any
  keyboardType?: any
  value?: any
  onChangeText?: any
  onChangeValue?: any
  onSubmitEditing?: any
}
