import React from 'react'
import SliderView from './slider-view'
import { Props } from './models'
import { StyleSheet , Image } from 'react-native'
import { CardSVG } from 'assets'
import { windowH , windowW } from 'common'

const Slider = (props : Props ) => {
const { galleryImage } = styles()



  return (
    <SliderView
     {...props}
    />
  )
}

export default Slider

const styles = () => {
  return (
    StyleSheet.create({
      galleryImage : {
  
      }
    })
  )
}