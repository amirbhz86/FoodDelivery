import { log, MainColors } from '../../common/index'
import { Text, TextInput, PressableRadius, Pressable } from '../../components/index'
import { ms } from '../../helper/index'
import React, { forwardRef, memo, useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { EyeSVG, EyeSlash } from 'assets'
import { Props } from './models'
import styles from './styles'
import { moderateScale } from 'react-native-size-matters'
import { StyleSheet } from 'react-native'
const VerticalOrHorizontalInputLogin = forwardRef((props: any, ref) => {

  const {
    title,
    width = '100%',
    style,
    Icon,
    onPress,
    textInputStyle,
    height,
    placeholder,
    multiline = false,
    state = 'vertical',
    textStyle,
    onChangeValue,
    numberOfLines = 1,
    onChangeText,
    value,
    showInput,
    setShowInput,
    hasEye = false,
  } = props

  const {
    inputLoginContainer,
    firstRow,
    titleHorizView,
    horizInputLoginView,
  } = styles

  const {
    iconText,
    wrapprEyePress,
    innerEyePress,
    textInput,
    fixTextInput
  } = funStyles({ Icon, height, hasEye })

  if (state === 'vertical') {
    return (
      <View
        style={[inputLoginContainer, { width, ...style }]}>
        {title && (
          <View style={[firstRow]}>
            {Icon
              && <Icon width={15} height={15} style={{ marginLeft: ms(17), marginRight: ms(10) }} />
            }
            <Text size={'small'} type={'bold'} style={[iconText, textStyle]}>
              {title}
            </Text>
          </View>
        )}
        <View style={[textInputStyle , textInputStyle == undefined ? textInput : {}, fixTextInput]}>
            <TextInput
              blurOnSubmit={!multiline ? true : undefined}
              returnKeyType={!multiline ? "done" : undefined}
              numberOfLines={!multiline ? 1 : 5}
              onChangeText={onChangeText}
              onPress={onPress}
              value={value}
              secureTextEntry={!showInput}
              textInputStyle={{
                // position : 'absolute',
                // zIndex: 2000 ,
                backgroundColor: 'black'
              }}
              height={height}
              ref={ref}
              {...props}
            />
            {hasEye && <PressableRadius
              rippleBackgroundColor={'#FE5959'}
              wrapperStyle={wrapprEyePress}
              onPress={() => { setShowInput((value: boolean) => !value) }}
              innerStyle={innerEyePress}>
              {showInput
                ? <EyeSlash width={15} height={15} />
                : <EyeSVG width={15} height={15} />
              }
            </PressableRadius>}
        </View >
      </View>
    )
  } else {
    return (
      <View
        // pointerEvents="none"
        style={[horizInputLoginView, { ...style }]}>
        <TextInput
          numberOfLines={!multiline ? 1 : 5}
          blurOnSubmit={true}
          returnKeyType={"done"}
          onChangeText={onChangeText}
          onPress={onPress}
          value={value}
          textInputStyle={{ ...textInputStyle }}
          height={height}
          ref={ref}
          {...props}
        />
        {hasEye && <PressableRadius
          rippleBackgroundColor={'#FE5959'}
          wrapperStyle={wrapprEyePress}
          onPress={() => setShowInput((value: boolean) => !value)}
          style={innerEyePress}>
          {showInput
            ? <EyeSlash width={15} height={15} />
            : <EyeSVG width={15} height={15} />
          }
        </PressableRadius>}
        {title && (
          <View style={[titleHorizView]}>
            <Text style={textStyle} size={'xSmall'} type={'bold'}>
              {title}
            </Text>
            {Icon && <Icon style={{ marginRight: ms(17) }} />}
          </View>
        )}
      </View>
    )
  }
})

export default memo(VerticalOrHorizontalInputLogin)

const funStyles = (props: any) => {
  const { Icon, height, hasEye } = props

  return StyleSheet.create({
    textInput: {
      height: 39,
      width: '100%',
      borderRadius: moderateScale(26),
      borderColor: MainColors.primaryLighter,
      borderWidth: 1,
      // textAlignVertical: 'top',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    fixTextInput: {
      paddingLeft: 10,
      paddingRight: hasEye ? 50 : 10 ,
      fontFamily: 'Vazir',
      textAlign: 'left',
    },
    wrapprEyePress: {
      position: 'absolute',
      zIndex: 2000,
      right: 12,
      bottom: (height - 30) / 2,
      borderRadius: 15,
      width: 30,
      height: 30,
    },
    innerEyePress: {
  
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconText: {
      marginRight: Icon ? moderateScale(7) : 10,
    },

  })
}