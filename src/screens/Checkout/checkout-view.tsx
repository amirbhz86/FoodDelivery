import { CardSVG, RedPlusSVG } from 'assets'
import { windowW } from 'common'
import { PressableRadius, Text, Slider } from 'components'
import { ms } from 'helper'
import React, { memo } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { ViewProps } from './models'
import { useRedux } from 'hooks'

const Checkout = (props: any) => {
  const {
    container, topContainer, checkoutText, selectText, selectCartText, addNewCartView,
    plusSvg, wrapperAddCartPress, lineView, totalAmountView, innerPayPress, wrapperPayPress
  } = styles()
  const { PaymentMethod, Header , navigation } = props
  const { Get } = useRedux()
  const { subPriceFoods } = Get().user  
  return (
    <View style={container}>
      <ScrollView
      // contentContainerStyle={{ backgroundColor : 'red'}}
      >
        <View style={topContainer}>
          <Header />
          <Text style={checkoutText} size='headingTitle'>
            {'Checkout'}
          </Text>
          <Text style={selectText} size='large'>
            {'Select Your Payment Method'}
          </Text>
          <PaymentMethod />
          <Text size='heading' style={selectCartText}>
            {'Select your card'}
          </Text>
        </View>
        <Slider />
        <PressableRadius rippleBackgroundColor='#FE5959' wrapperStyle={wrapperAddCartPress} innerStyle={addNewCartView}>
          <RedPlusSVG style={plusSvg} width={30} height={30} />
          <Text size='medium'>
            {'Add a new one'}
          </Text>
        </PressableRadius>
        <View style={lineView} />
        <View style={totalAmountView}>
          <Text color='#FF0000' size='large'>
            {'Total Amount'}
          </Text>
          <Text color='#38B86B' size='large'>
            {subPriceFoods}{'$'}
          </Text>

        </View>
        <PressableRadius onPress={()=>navigation.navigate('home')} innerStyle={innerPayPress} wrapperStyle={wrapperPayPress}>
          <Text size='headingTitle' color='white'>
            {'Pay  Now'}
          </Text>
        </PressableRadius>
      </ScrollView>
    </View>
  )
}

export default Checkout

const styles = () => {
  return (
    StyleSheet.create({
      innerPayPress: {
        width : windowW - ms(40) ,
        height : 50,
        justifyContent : 'center' ,
        alignItems : 'center' ,
      },
      wrapperPayPress: {
        borderRadius  : 25 ,
        backgroundColor : '#FE5959' ,
        width : windowW - ms(40) ,
        alignSelf : 'center' ,
        marginTop : 40 ,
        marginBottom : 20 ,
      },
      totalAmountView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: ms(20),
        marginTop : 20 ,
      },
      lineView: {
        height: 0.6,
        backgroundColor: '#881E1E',
        width: windowW,
        marginTop: 15
      },
      wrapperAddCartPress: {
        marginTop: 20,
        alignSelf: 'flex-start',
        marginLeft: ms(20),
        borderRadius: 10,
      },
      plusSvg: {

        marginRight: ms(7),
      },
      addNewCartView: {
        flexDirection: 'row',
        alignItems: "center",
        // justifyContent : 'center' ,

      },
      selectCartText: {
        marginTop: 30,
        marginBottom: 20,
      },
      selectText: {
        marginTop: 10,
      },
      checkoutText: {
        marginTop: 20,
      },
      topContainer: {
        width: '100%',
        paddingHorizontal: ms(20),
      },
      container: {
        flex: 1,
        backgroundColor : 'white' ,
      }
    })
  )
}