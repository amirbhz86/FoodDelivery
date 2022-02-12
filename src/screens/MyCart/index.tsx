import React, { useState, useEffect } from 'react'
import MyCartView from './myCart-view'
import { Props } from './models'
import { View, StyleSheet, Image } from 'react-native'
import { ms } from 'helper'
import { Text, OrderItem } from 'components'
import { windowW } from 'common'
import { useRedux } from 'hooks'
import { SafeAreaView } from 'react-native-safe-area-context'

const MyCart = (props: Props) => {
  const {
    headerView , emptyText 
  } = styles()

  const { Get , Save } = useRedux()
  const { foodSelected } = Get().user
  const [foodPrices, setFoodPrices] = useState(0)
  const [subFoods, setSubFoods] = useState(0)

  const renderOrders = ({ item }) => {
    const { image, name, price, number, id } = item
    return (
      <OrderItem name={name} image={image} id={id} price={price} number={number} />
    )
  }

  const EmptyOrders = () => {
    return (
      <Text size='large' style={emptyText}>
        {'There is no order'}
      </Text>
    )
  }

  useEffect(() => {
    let subPrices = 0
    for (let perFood of foodSelected) {
      subPrices = subPrices + perFood.price * perFood.number
    }
    setSubFoods(Math.round(subPrices * 100) / 100)
    Save({ subPriceFoods : Math.round(subPrices * 100) / 100 + 8 },'user')
  }, [foodSelected])

  return (
    <MyCartView
      EmptyOrders={EmptyOrders}
      subFoods={subFoods}
      renderOrders={renderOrders}
      {...props}
    />
  )
}

export default MyCart

const styles = () => {
  return (
    StyleSheet.create({
      emptyText : {
        alignSelf : 'center',
        marginTop : 30 ,
      },
      headerView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }
    })
  )
}