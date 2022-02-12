//@ts-nocheck
import { BasicColors } from '../../common/index'
import { LightenDarkenColor } from 'lighten-darken-color'
import React, { FC, memo } from 'react'
import { Platform, Pressable, TouchableOpacity } from 'react-native'
import { Props } from './models'

const CustomPressable: FC<Props> = memo((props) => {
  const {
    backgroundColor,
    rippleBackgroundColor,
    wrapperStyle,
    borderless = false,
    onPress,
  } = props

  const renderContent = () => {
    if (Platform.OS === 'android') {
      return (
        <Pressable
          onPress={onPress}
          style={wrapperStyle}
          android_ripple={{
            color: rippleBackgroundColor
              ? rippleBackgroundColor
              : backgroundColor
              ? LightenDarkenColor(backgroundColor, 50)
              : BasicColors.white,
            borderless: borderless,
          }}
          // {...props}
        >
          {props.children}
        </Pressable>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          {...props}
          style={[{ backgroundColor }, wrapperStyle]}>
          {props.children}
        </TouchableOpacity>
      )
    }
  }

  return <>{renderContent()}</>
})
export default CustomPressable
