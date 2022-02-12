//@ts-nocheck
import { BasicColors } from '../../common/index'
import { LightenDarkenColor } from 'lighten-darken-color'
import React, { FC, memo } from 'react'
import { Platform, Pressable, TouchableOpacity, View } from 'react-native'
import { Props } from './models'
import styles from './styles'


// height and width > innerStyle
// borderRadius > wrapperStyle
// padding > innerStyle
// margin ? wrapperStyle

const PressableRadius: FC<Props> = memo((props) => {
  const {
    backgroundColor,
    rippleBackgroundColor,
    innerStyle,
    wrapperStyle,
    borderless = true,
    onPress,
  } = props
  const { innerPress } = styles
  const renderContent = () => {
    
    if (Platform.OS === 'android') {
      return (
        <View style={[wrapperStyle, { overflow: 'hidden' }]}>
          <Pressable
            onPress={onPress}
            style={[ innerStyle, innerPress]}
            android_ripple={{
              color: rippleBackgroundColor
                ? rippleBackgroundColor
                : backgroundColor
                ? LightenDarkenColor(backgroundColor, 50)
                : BasicColors.white,
              borderless: borderless,
            }}
            {...props}>
            {props.children}
          </Pressable>
        </View>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          {...props}
          style={[{ backgroundColor }, wrapperStyle, innerStyle]}>
          {props.children}
        </TouchableOpacity>
      )
    }
  }

  return <>{renderContent()}</>
})
export default PressableRadius
