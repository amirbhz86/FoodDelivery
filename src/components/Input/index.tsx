


import React, { useState } from 'react'
import InputView from './input-view'
import { Props } from './models'

const Input = (props : Props) => {
  const { onChangeValue , secureTextEntry } = props
  const [value, setValue] = useState<string>()
  const [ showInput , setShowInput ] = useState( secureTextEntry ? secureTextEntry : true)

  const onChangeText = (value: string) => {
    onChangeValue && onChangeValue(value)
    setValue(value)
  }

  return (
    <InputView
      setShowInput={setShowInput}
      showInput={showInput}
      {...props}
      value={value}
      onChangeText={onChangeText}
    />
  )
}

export default Input




