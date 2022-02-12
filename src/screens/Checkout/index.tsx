import React, { useState } from 'react'
import CheckoutView from './checkout-view'
import { Props } from './models'
import { View, StyleSheet, Image } from 'react-native'
import { BoldBackSVG, PaySVG, PpSVG, WhiteCartSVG } from 'assets'
import { PressableRadius, Text } from 'components'
import { windowW } from 'common'

const Checkout = (props: Props) => {
  const [selectedPayment, setSelectedPayment] = useState<'card' | 'pay' | 'pp'>('card')
  const {
    headerView, backText, cardsContainer, cardInnerPress, wrapperCardPress,
    payInnerPress, wrapperPayPress, ppInnerPress, ppWrapperPress, wrapperBackPress,
    backInnerPress
  } = styles({ selectedPayment })
  const { navigation } = props

  const Header = () => {
    return (
      <View style={headerView}>
        <PressableRadius
         rippleBackgroundColor='#FE5959' 
         wrapperStyle={wrapperBackPress}
         onPress={()=>navigation.goBack()}
          innerStyle={backInnerPress}>
          <BoldBackSVG width={20} height={20} />
        </PressableRadius>
        <Text style={backText} size='medium'>
          {'Back to Cart'}
        </Text>
      </View>
    )
  }

  const PaymentMethod = () => {
    return (
      <View style={cardsContainer}>
        <PressableRadius onPress={() => setSelectedPayment('card')} innerStyle={cardInnerPress} wrapperStyle={wrapperCardPress}>
          {selectedPayment == 'card'
            ? <WhiteCartSVG width={80} height={80} />
            : <Image style={{ width: 60, height: 60 }} source={require('assets/icons/orangeCart.png')} />
          }
        </PressableRadius>
        <PressableRadius onPress={() => setSelectedPayment('pay')} innerStyle={payInnerPress} wrapperStyle={wrapperPayPress}>
          {selectedPayment == 'pay'
            ? <Image style={{ width: 60, height: 60 }} source={require('assets/icons/whitePay.png')} />
            : <PaySVG width={60} height={60} />
          }
        </PressableRadius>
        <PressableRadius onPress={() => setSelectedPayment('pp')} innerStyle={ppInnerPress} wrapperStyle={ppWrapperPress}>
          <Image style={{ width: 60, height: 60 }} source={require('assets/icons/pp.png')} />
        </PressableRadius>
      </View>
    )
  }
  return (

    <CheckoutView
      Header={Header}
      PaymentMethod={PaymentMethod}
      {...props}
    />
  )
}

export default Checkout

const styles = ({ selectedPayment }: any) => {
  return (
    StyleSheet.create({
      wrapperBackPress: {
        backgroundColor: 'white',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        borderRadius: 19,
        marginLeft: -10,
      },
      backInnerPress: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
      },
      ppInnerPress: {
        width: windowW * 0.25,
        height: windowW * 0.25 * 0.65 ,
        justifyContent: 'center',
        alignItems: 'center',
      },
      ppWrapperPress: {
        width: windowW * 0.25,
        height: windowW * 0.25 * 0.65 ,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FE5959',
        backgroundColor: selectedPayment == 'pp' ? '#FE5959' : 'white',
      },
      payInnerPress: {
        width: windowW * 0.25,
        height: windowW * 0.25 * 0.65 ,
        justifyContent: 'center',
        alignItems: 'center',
      },
      wrapperPayPress: {
        width: windowW * 0.25,
        height: windowW * 0.25 * 0.65 ,
        borderWidth: 1,
        borderColor: '#FE5959',
        borderRadius: 10,
        marginHorizontal: 13,
        backgroundColor: selectedPayment == 'pay' ? '#FE5959' : 'white'
      },
      cardInnerPress: {
        width: windowW * 0.25 ,
        height: windowW * 0.25 *0.65 ,
        justifyContent: 'center',
        alignItems: 'center',
      },
      wrapperCardPress: {
        borderRadius: 10,
        borderWidth: 1,
        width: windowW * 0.25 ,
        height: windowW * 0.25 *0.65 ,
        borderColor: '#FE5959',
        backgroundColor: selectedPayment == 'card' ? '#FE5959' : 'white',
      },
      cardsContainer: {
        flexDirection: 'row',
        marginTop: 20,
      },
      backText: {
        // marginLeft: 10,
      },
      headerView: {
        marginTop: 15,
        width: '100%',
        flexDirection : 'row',
        alignItems : 'center' ,
      }
    })
  )
}