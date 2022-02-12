import { TextInputProps } from 'react-native'

export interface Props extends TextInputProps {
  multiline?: any
  height?: any
  placeholder?: any
  textInputStyle?: any
  onPress?: any
  onChangeText: any
  hasEye : boolean 
}
