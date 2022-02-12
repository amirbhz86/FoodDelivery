import React, { useState, useEffect } from 'react'
import FoodDetailView from './foodDetail-view'
import { Props } from './models'
import MeasureText from 'react-native-measure-text';
import { calculateTextHeights, ms } from 'helper'
import { windowW } from 'common';

const FoodDetail = (props: Props) => {
  const [selectedSize, setSelectedSize] = useState<'M' | 'L' | 'P'>('M')
  const [counter, setCounter] = useState(1)
  const [readMore, setReadMore] = useState(false)


  return (
    <FoodDetailView
      setReadMore={setReadMore}
      readMore={readMore}
      setSelectedSize={setSelectedSize}
      selectedSize={selectedSize}
      setCounter={setCounter}
      counter={counter}
      {...props}
    />
  )
}

export default FoodDetail