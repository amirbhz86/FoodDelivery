import React from 'react'
import MeasureText from 'react-native-measure-text';

interface TextArrayState {
  text: string[],
  width: number,
  fontSize: number,
  fontFamily ?: string,
  // fontWeight : string
}

export const calculateTextHeights = async (textArray: TextArrayState[]) => {
  let height = 0
  for (let perText of textArray) {
    const heights = await MeasureText.measure({
      texts: perText.text,
      width: perText.width,
      fontSize: perText.fontSize,
      fontFamily: 'fontFamily' in perText ? perText.fontFamily : 'Lato' ,
      fontWeight: 'normal',
    })
    console.log(heights,'heights');
    
    for ( let perHeight of heights) {
      height = height + perHeight
    }
  }

  return height
}

export default calculateTextHeights
