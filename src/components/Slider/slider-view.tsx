import { CardSVG } from 'assets'
import { windowH, windowW } from 'common'
import React from 'react'
import { Text } from 'components'
import { StyleSheet, View } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { scale } from '../../helper/index'

const Slider = (props: any) => {
  const { container } = styles()
  const {
    sliderView, galleryImage, visaText, nameText, cardNumberText,
    cartDetailView, lastRowView, sliderContainer , detailContainer
  } = styles()

  const renderSlider = ({ item }: any) => {
    return (
      <View >
        <CardSVG
          width={windowW * 0.79}
          style={{ alignSelf: 'center' }}
          height={windowW * 0.48} />
        <View style={cartDetailView}>
          <View style={detailContainer}>
            <Text size='heading' color='white' style={visaText}>
              {'VISA'}
            </Text>
            <Text style={cardNumberText} size='headingTitle' color='white'>
              {'****  ****  ****  4564'}
            </Text>
            <View style={lastRowView}>
              <Text style={nameText} color='white'>
                {'Sam Smith'}
              </Text>
              <Text color='white'>
                {'01/01'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }



  return (
    <View style={sliderContainer}>
      <Carousel
        enableMomentum={true}
        data={['', '' ,'']}
        layout={'default'}
        style={{ backgroundColor: 'blue' }}
        renderItem={renderSlider}
        sliderWidth={windowW}
        itemWidth={windowW * 0.79}
      />
    </View>
  )
}

export default Slider

const styles = () => {
  return (
    StyleSheet.create({
      detailContainer : {
        marginTop: (windowW * 0.48 - 100)/2,
        height : 95, 
        width : 220 ,
        alignSelf : 'center' ,
      },
      sliderContainer: {
        width: windowW,
        height: windowW * 0.48
      },
      lastRowView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: windowH * 0.025 ,
      },
      cartDetailView: {
        position: 'absolute',
        width: windowW * 0.79,
        alignSelf: 'center',
        height: windowW * 0.48,
        // paddingLeft: windowH * 0.05,
        // backgroundColor : 'blue'
      },
      cardNumberText: {
        marginTop: windowH * 0.025
      },
      nameText: {
      },
      visaText: {
        
      },
      galleryImage: {
        width: scale(340),
        height: scale(179),
        borderRadius: scale(20),
      },
      sliderView: {
        backgroundColor: 'red',
        width: '90%',
        alignSelf: 'center',
        height: scale(229),
        borderRadius: 20,
      },
    })
  )
}