//@ts-nocheck
import { BasicColors, FONT_TYPE } from '../../common/index'
import React, { FC, memo } from 'react'
import { Text } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { FontSize, Props } from './models'

const CustomText: FC<Props> = memo((props) => {
  const { type, color, scaled = false, style, size, children } = props
  const FONT_SIZES: FontSize = {
    headingLargeTitle: scaled ? moderateScale(30) : 30,
    headingTitle: scaled ? moderateScale(25) : 25,
    heading: scaled ? moderateScale(20) : 20,
    large: scaled ? moderateScale(18) : 18,
    medium: scaled ? moderateScale(16) : 16,
    small: scaled ? moderateScale(14) : 14,
    xSmall: scaled ? moderateScale(12) : 12,
    xxSmall: scaled ? moderateScale(10) : 10,
  }

  const fixedStyles = {
    fontFamily: type ? FONT_TYPE['bold'] : FONT_TYPE.Regular,
    fontSize: size ? FONT_SIZES[size] : FONT_SIZES.medium,
    color: color ? color : BasicColors.black,
  }
  const customTextProps = {
    ...props,
    ...{
      style: Array.isArray(style)
        ? [{ ...fixedStyles }].concat(style)
        : {
            ...fixedStyles,
            ...style,
          },
    },
  }
  return <Text {...customTextProps}>{children}</Text>
})

CustomText.defaultProps = {
  scaled: false,
  type: 'Regular',
  size: 'small',
}

export default CustomText
