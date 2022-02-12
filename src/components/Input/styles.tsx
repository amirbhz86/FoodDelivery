import { MainColors } from '../../common/index'
import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export default StyleSheet.create({
  inputLoginContainer: {
    alignSelf: 'center',
    marginTop: 20, 
  },
  horizInputLoginView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHorizView: {
    marginLeft: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstRow: {
    height: 20,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 7,
  },
  iconText: {
    // marginRight: moderateScale(7),
  },
  textInput: {
    height: 39 ,
    backgroundColor :'red' ,
    borderRadius: moderateScale(26),
    paddingRight: 17,
    borderColor: MainColors.primaryLighter,
    borderWidth: 1,
    // textAlignVertical: 'top',
    textAlign: 'right',
    fontFamily: 'Vazir',
  },
})
