import React, { useEffect, useState } from 'react'
import OrderItemView from './orderItem-view'
import { Props } from './models'
import { useRedux } from 'hooks'
import { SafeAreaView } from 'react-native-safe-area-context'
import { editArrayObjects } from 'helper'

const OrderItem = (props: any) => {
  const { Get, Save } = useRedux()
  const { id, number } = props
  const { foodSelected } = Get().user


  const increaseFun = () => {

    let newFoodSelected = editArrayObjects(foodSelected, { id: id }, { number: number + 1 })
    Save({ foodSelected: newFoodSelected }, 'user')
  }

  const decreaseFun = () => {

    if (number < 2) {
      let foodSelectedVar = [...foodSelected]
      let deletedFoodSelected = foodSelectedVar.filter((value) => {
        return value.id !== id
      })
      Save({ foodSelected: deletedFoodSelected }, 'user')
    } else {
      let newFoodSelected = editArrayObjects(foodSelected, { id: id }, { number: number - 1 })
      Save({ foodSelected: newFoodSelected }, 'user')
    }
  }


  return (
    <OrderItemView
      decreaseFun={decreaseFun}
      increaseFun={increaseFun}
      {...props}
    />
  )
}

export default OrderItem