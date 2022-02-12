import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { ViewProps } from './models'
import MapView from 'react-native-maps';
import { Text, Input, PressableRadius } from '../../components/index'
import { vs } from '../../helper/index'
import { SearchSVG  , MarkerSVG } from '../../assets'
import { ms } from 'react-native-size-matters';
import { windowH, windowW } from '../../common';

const Map = (props: any ) => {
  const {
    searchView, mapStyle, performanceText, inputView, inputStyle,
    inputWrapper, bottomView, locationPress, locationInnerStyle,
    selectText, markerSvg ,
  } = styles()
const { navigation , showButton } = props
  return (
    <>
      <MapView
        style={mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <MarkerSVG width={40} height={40} style={markerSvg}/>
      <View style={searchView}>
        <Text size='small' style={performanceText}>
          {'For Best Preformance Select Your Location'}
        </Text>
        <View style={inputView}>
          <Input
            placeholder='Search places'
            state='horizontal'
            style={inputWrapper}
            textInputStyle={inputStyle}
          />
          <SearchSVG />
        </View>
      </View>
       { showButton && <PressableRadius
          onPress={()=>navigation.navigate('checkout')}
          innerStyle={locationInnerStyle}
          wrapperStyle={locationPress}>
          <Text color='white' size='heading' style={selectText}>
            {'Select  Location'}
          </Text>

        </PressableRadius>}


    </>
  )
}

export default Map

const styles = () => {
  return (
    StyleSheet.create({
      bottomView: {
        bottom: 0,
        width: '100%',
        backgroundColor: '#FFFDFD',
        height: (65),
        position: 'absolute',
      },
      inputWrapper: {
        width: '90%',
        borderWidth: 0,
        height: 30,
      },
      inputStyle: {
        borderWidth: 0,
        textAlign: 'left',
        height: (34),
      },
      inputView: {
        backgroundColor: 'white',
        width: '80%',
        paddingRight: 10,
        paddingLeft:  6 ,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: (39),
        alignSelf: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
      },
      performanceText: {
        textAlign: 'center',
        marginBottom: (20),
      },
      selectText: {
        alignSelf: 'center',
      },
      searchView: {
        paddingVertical: 20,
        width: ms(300),
        paddingTop: (25),
        paddingBottom: (25),
        borderRadius: 25,
        backgroundColor: 'white',
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
      },
      mapStyle:
      {
        flex: 1,
        backgroundColor: 'white',
      },
      locationInnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: ms(200),
        height: 60,
      },
      markerSvg : {
        position : 'absolute' ,
        left : (windowW - 40 )/2,
        top :  ( windowH - 40 ) /2 ,
      },  
      locationPress: {
        zIndex : 2000 ,
        position: 'absolute',
        bottom : 30,
        alignSelf: 'center',
        borderRadius: 32,
        backgroundColor: '#FE5959'
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    })
  )
}