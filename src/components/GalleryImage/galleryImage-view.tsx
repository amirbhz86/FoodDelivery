import { } from 'components'
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { ViewProps } from './models'

const GalleryImage = (props: ViewProps ) => {
  const { container } = styles()
  const { } = props
  return (
    <View style={container}>
    </View>
  )
}

export default GalleryImage

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