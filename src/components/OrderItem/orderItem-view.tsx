import React, { memo , useState } from 'react'
import { View, StyleSheet , Image } from 'react-native'
import { ViewProps } from './models'
import { windowW } from 'common'
import { Text , PressableRadius } from 'components'
import { PlusSVG , MinuusSVG } from 'assets'
import { ms } from 'helper'
// do ta bug hast 
// yeki inke vaghti ye pitza ro dobar click mikonm
// dobare oono ezafe mikone
// axaye categori haye mokhtalef ro dorost kob

const OrderItem = (props: any  ) => {
  const { 
    container , orderView , orderImage , middleOrderView , nameText ,
    counterView , decInner , inWrapper ,  decWrapper , inInner 
  } = styles()
  const { image , name , price  ,number , increaseFun , decreaseFun } = props
  // const [ counter , setCounter ] = useState(number)
  return (
    <View style={orderView}>
    <Image style={orderImage} source={image} />
    <View style={middleOrderView}>
      <Text style={nameText}>
        {name}
      </Text>
      <Text>
        {Math.round(price*number*100)/100}{' $'}
      </Text>
    </View>
    <View style={counterView}>
      <PressableRadius onPress={() => decreaseFun()} innerStyle={decInner} wrapperStyle={decWrapper}>
        <MinuusSVG />
      </PressableRadius>
      <Text color='white'>
        {number}
      </Text>
      <PressableRadius onPress={() => increaseFun()} innerStyle={inInner} wrapperStyle={inWrapper}>
        <PlusSVG />
      </PressableRadius>
    </View>
  </View>
  )
}

export default OrderItem

const styles = () => {
  return (
    StyleSheet.create({
      inWrapper: {
        borderRadius: 19,
      },
      inInner: {
        width: 30,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      decInner: {
        width: 30,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      counterView: {
        width: ms(69),
        height: 33,
        alignSelf : 'center' ,
        backgroundColor: '#FE5959',
        borderRadius: 19,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      middleOrderView: {
        alignSelf: 'center',
        marginLeft: 5,
      },
      decWrapper: {
        borderRadius: 19,
      },
      nameText: {
        marginBottom: 7,
      },
      orderImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      orderView: {
        width: windowW < ms(300) ? windowW * 0.9 : ms(300),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent : 'space-between' ,
        paddingHorizontal: ms(10),
        height: 93,
        borderColor: '#8D8D8D',
        borderWidth: 0.5,
        borderRadius: 16,
        marginBottom: 20,
        elevation: 5,
        backgroundColor: 'white',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    })
  )
}