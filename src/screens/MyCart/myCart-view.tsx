import React, { memo } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { ViewProps } from './models'
import { PressableRadius, Text } from 'components'
import { ms } from 'helper'
import { windowW, windowH } from 'common'
import { HomeSVG } from 'assets'
import { useRedux } from 'hooks'

const MyCart = (props: any) => {
  const {
    container, alignHeaderTitle, myCartText, homeSvg, ordersFlatList,
    ordersParentView, bottomConatiner, firstRow, secondRow, thirdRow,
    buyInnerStyle, buyWrapperStyle
  } = styles()
  const { Get } = useRedux()
  const { foodSelected } = Get().user
  const { renderOrders, navigation , subFoods , EmptyOrders } = props



  return (
    <View style={container}>
      <View style={alignHeaderTitle}>
        <Text size='heading' style={myCartText}>
          {'My Cart'}
        </Text>
      </View>
      <PressableRadius onPress={() => navigation.navigate('home')}>
        <HomeSVG style={homeSvg} width={30} height={30} />
      </PressableRadius>
      <View style={ordersParentView}>
        <FlatList
          style={ordersFlatList}
          ListEmptyComponent={EmptyOrders}
          renderItem={renderOrders}
          data={foodSelected}
        />
      </View>
      <View style={bottomConatiner}>
        <View style={firstRow}>
          <Text size='large'>
            {'Food Prices'}
          </Text>
          <Text size='large'>
            {subFoods}{'$'}
          </Text>
        </View>
        <View style={secondRow}>
          <Text size='large'>
            {'Shipping'}
          </Text>
          <Text size='large'>
            {subFoods!==0 ? '8$' : '0$'}
          </Text>
        </View>
        <View style={thirdRow}>
          <Text size='large' type='bold'>
            {'Total Price'}
          </Text>
          <Text  color='#FF0000' size='large' type='bold'>
            { subFoods!==0 ? subFoods+8 : 0 }{'$'}
          </Text>
        </View>
        <PressableRadius onPress={()=>navigation.navigate('map')} innerStyle={buyInnerStyle} wrapperStyle={buyWrapperStyle}>
          <Text color='white' size='large'>
            {'Buy Now'}
          </Text>
        </PressableRadius>
      </View>
    </View>
  )
}

export default MyCart

const styles = () => {
  return (
    StyleSheet.create({
      secondRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'blue'
      },
      thirdRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'blue' ,
        marginVertical: 10,
      },
      firstRow: {
        marginVertical: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'blue'
      },
      bottomConatiner: {
        flex: 1,
        justifyContent : 'flex-end' ,
        paddingBottom : 20 ,
        // height : 100 ,
        backgroundColor : 'white' ,
      },
      ordersFlatList: {
        marginTop: 25,

      },
      myCartText: {
        alignSelf: 'center',
      },
      homeSvg: {
        marginTop: 16,

      },
      buyInnerStyle: {
        width : ms(180) ,
        height : 40 , 
        justifyContent : 'center' ,
        alignItems : 'center' ,
      },
      buyWrapperStyle: {
        borderRadius : 25 ,
        alignSelf : 'center' ,
        backgroundColor : '#FE5959' , 
      },
      ordersParentView: {
        height: (windowH) - 230,
      },
      alignHeaderTitle: {
        width: windowW,
        position: 'absolute',
        top: 20,
      },
      container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: ms(18)
      }
    })
  )
}