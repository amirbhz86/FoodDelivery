import React, { useEffect, useState } from 'react'
import MapView from './map-view'
import { Keyboard } from 'react-native'
import { Props } from './models'

const Map = (props: Props) => {
  const [showButton, setShowButton] = useState(true)
  function onKeyboardDidShow() {
    setShowButton(false)

  }

  const onKeyboardDidHide = () => {
    setShowButton(true)
  }

  useEffect(() => {
    const showKeyListener =  Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    const hideKeyListener = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return (): void => {
      hideKeyListener.remove()
      showKeyListener.remove()
    };
  }, []);

  return (
    <MapView
      showButton={showButton}
      {...props}
    />
  )
}

export default Map

