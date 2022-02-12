import { } from 'components'
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { ViewProps } from './models'

const Example = (props: ViewProps ) => {
  const { container } = styles()
  const { } = props
  return (
    <View style={container}>
    </View>
  )
}

export default Example

const styles = () => {
  return (
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    })
  )
}