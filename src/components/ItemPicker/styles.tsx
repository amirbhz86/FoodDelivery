import {BasicColors, FONT_SIZES, FONT_TYPE, MainColors} from '../../common';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapperView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  boxWrapperView: {
    alignItems: 'center',
    justifyContent  :'center' ,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: MainColors.primary,
    borderWidth: 1,
    borderRadius: 1,
    flex: 1,
  },
  titleText: {
    color: MainColors.text,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    alignItems: 'flex-end',
  },
  textStyle: {
    // flex: 1,
    alignItems : 'center' ,
    justifyContent : 'center' ,
    color: MainColors.text,
    textAlign: 'center',
    fontFamily: FONT_TYPE.medium,
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
  },
  iconWrapper: {
    marginLeft : 5 , 
    alignItems: 'center',
    justifyContent: 'center',
  },
  starSvg: {
    position: 'absolute',
    right: -15,
    top: 0,
  },
});
