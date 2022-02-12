import React, { memo } from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import { ViewProps } from './models'
import { BannerSVG } from '../../assets'
import { PressableRadius, Text } from '../../components'
import { windowW } from '../../common'
import { ms, vs } from '../../helper'



const Home = (props: any) => {
  const {
    container, bannerContainer, bannerTextView, orderInner, orderWrapper, categoriText,
    categoriContainer, popularContainer , topgadgetText 
  } = styles()
  const {
    Header, renderCategori, categoriArray, ItemsTitleRow, renderPopular , foodItems
  } = props
  return (

    <View style={container}>
      <Header />
      <ScrollView >
      <View style={bannerContainer}>
        <BannerSVG width={windowW} height={windowW * 0.52} style={{ alignSelf: 'center' }} />
        <View style={bannerTextView}>
          <Text size='headingTitle' color='white' style={{}}>
            {'Best Quality &'}
          </Text>
          <Text size='headingTitle' color='white'>
            {'Fast Delivery'}
          </Text>
        </View>
        <PressableRadius
          wrapperStyle={orderWrapper}
          innerStyle={orderInner}>
          <Text size='large' color='white'>
            {'Order Now'}
          </Text>
        </PressableRadius>
      </View>
      <Text size='large' style={categoriText}>
        {'Categories'}
      </Text>
      <View style={categoriContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.name}
          renderItem={renderCategori}
          data={categoriArray}
        />
      </View>
      <ItemsTitleRow title={'Popular Now'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={foodItems}
          horizontal
          keyExtractor={(item) => item.name}
          renderItem={renderPopular}
        />
        <ItemsTitleRow title={'Special Offers'} />
        <FlatList
          style={{ marginBottom : 17 }}
          showsHorizontalScrollIndicator={false}
          data={foodItems}
          horizontal
          keyExtractor={(item) => item.name}
          renderItem={renderPopular}
        />
      </ScrollView>
    </View>
  )
}

export default Home

const styles = () => {
  return (
    StyleSheet.create({ 
      categoriContainer: {
        width: '100%',
        marginTop: 10 , 
      },
      categoriText: {
        marginTop: 10,
        marginLeft: ms(20),
      },
      orderWrapper: {
        borderRadius: 27,
        position: 'absolute',
        top: windowW * 0.3,
        left: windowW * 0.13
      },
      orderInner: {
        justifyContent: 'center',
        alignItems: 'center',
        height: (51),
        width: ms(135),
        borderRadius: 27,
        backgroundColor: '#FF0000'
      },
      bannerTextView: {
        position: 'absolute',
        left: windowW * 0.1,
        top: windowW * 0.1
      },
      popularContainer :{
        paddingVertical : 10 ,
        // backgroundColor:'red'
      },
      bannerContainer: {
        marginTop: (10),
        width: '100%',
      },
      container: {
        flex: 1,
        backgroundColor : 'white'
      }
    })
  )
}