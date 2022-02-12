import React, { forwardRef, memo } from 'react'
import { TextInput, TouchableOpacity, View , StyleSheet } from 'react-native'
import { Props } from './models'
import { MainColors } from 'common'
import { log } from '../../common/index'
import { moderateScale } from 'react-native-size-matters'

const CustomTextInput = forwardRef((props: Props, ref: any) => {
  const {
    multiline,
    height,
    placeholder,
    textInputStyle,
    onPress,
    onChangeText,
    numberOfLines ,
    hasEye ,
  } = props

  const { textInput } = styles({ hasEye })
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress} >
        <View pointerEvents="none">
          <TextInput
            {...props}
            ref={ref}
            style={[
              {
                // height: 39 ,
                paddingVertical: numberOfLines !== 1 ? 10 : 0,
              },
              // textInputStyle,
            ]}
            placeholder={placeholder}
          />
        </View>
      </TouchableOpacity>
    )
  } else {
    return (

      // <View pointerEvents="none">
        <TextInput
          {...props}
          width={'100%'}
          ref={ref}
          style={[
            {
              //  backgroundColor : 'red' ,
               height: height ,
               paddingVertical: numberOfLines !== 1 ? 10 : 5
            },
            // { elevation : 7  , backgroundColor : 'white'},
            // textInputStyle,
          ]}
          placeholder={placeholder}
        />
    )
  }
})

export default memo(CustomTextInput)

const styles = ({ hasEye } : any )=>{
  return StyleSheet.create({
    textInput: {
      height: 39,
      width : '100%' ,
      borderRadius: moderateScale(26),
      paddingLeft: 17,
      borderColor: MainColors.primaryLighter,
      borderWidth: 1,
      // textAlignVertical: 'top',
      justifyContent : 'flex-end' ,
      alignItems : 'flex-end' ,
      textAlign: 'left',
      paddingRight : hasEye ? 50 : 17 ,
      fontFamily: 'Vazir',
    },
  })
}