import React, { useState , useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { AvtarSVG, BurgerSVG, ChitckenSVG, PitzzaSVG, SettingSVG } from '../../assets'
import { windowW } from '../../common'
import { ItemPicker, Pressable, PressableRadius, Text } from '../../components'
import { ms } from '../../helper'
import HomeView from './home-view'
import { countryArray , specialItems , burgerItems , chitckenItems , sandwitchItems } from 'common'




const Home = (props: any) => {
  const [selectedCategori, setSelectedCategori] = useState<'pizza' | 'burger' | 'chicken' | 'sandwitch'>('pizza')
  const [ foodItems , setFoodItems ] = useState<any>([])
  const {
    headerView, itemPickerContainer, pizzaCategoriView, burgerCategoriView,
    chickeBurgerView, wrapperCategori, iconContainer, categoriText, itemTitleRow,
    innerCardPress, popularImage, itemNameText, descriptionText, priceText, detailContainer,
    wrapperCardPress, sandwitchCategoriView,
  } = styles({ selectedCategori })
  const [selectedCity, setSelectedCity] = useState({ value: '2', label: 'Russia' })
  const { navigation } = props

  const categoriArray = [
    {
      name: 'pizza',
      style: pizzaCategoriView,
      icon: <PitzzaSVG width={35} height={35} />
    }, {
      name: 'burger',
      style: burgerCategoriView,
      icon: <BurgerSVG width={35} height={35} />,
    }, {
      name: 'chicken',
      style: chickeBurgerView,
      icon: <ChitckenSVG width={30} height={30} />,
    }, {
      name: 'sandwitch',
      style: sandwitchCategoriView,
      icon: <Image source={require('../../assets/icons/sandwitch.jpeg')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
    }]

    useEffect(() => {
      if ( selectedCategori=='burger'){
        setFoodItems(burgerItems)
      }else if ( selectedCategori=='chicken'){
        setFoodItems(chitckenItems)
      }else if ( selectedCategori=='sandwitch'){
        setFoodItems(sandwitchItems)
      }else{
        setFoodItems(specialItems)
      }
    }, [selectedCategori])

  const renderCategori = ({ item }: any) => {
    const { style, icon, name } = item
    return (
      <PressableRadius onPress={() => setSelectedCategori(name)} rippleBackgroundColor='#FF0000' wrapperStyle={wrapperCategori} innerStyle={style}>
        <View style={iconContainer}>
          {icon}
        </View>
        <Text color={selectedCategori == name ? 'white' : 'black'} style={categoriText}>
          {name}
        </Text>
      </PressableRadius>
    )
  }

  const renderPopular = ({ item }) => {
    const { image, name, price, description } = item
    return (
      <PressableRadius 
      wrapperStyle={wrapperCardPress} 
      rippleBackgroundColor='#FF0000' 
      onPress={()=>navigation.navigate('foodDetail' , { item : item ,  type : selectedCategori=='pizza' ? 'pizza' : undefined })}
      innerStyle={innerCardPress}>
        <Image style={popularImage} source={image} />
        <View style={detailContainer}>
          <Text style={itemNameText}>
            {name}
          </Text>
          <Text style={descriptionText}>
            {description}
          </Text>
          <Text style={priceText}>
            <Text color='#FF0000'> $ </Text>
            {price}
          </Text>
        </View>
      </PressableRadius>
    )
  }


  const Header = () => {
    return (
      <View style={headerView}>
        <PressableRadius onPress={()=>navigation.navigate('myCart')}  rippleBackgroundColor={'#FF5252'}>
          <AvtarSVG />
        </PressableRadius>
        <View style={itemPickerContainer}>
          <ItemPicker
            onChangeValue={(item) => setSelectedCity(item)}
            style={{ alignSelf: 'center', minWidth: ms(150) }}
            height={100}
            boxWrapperStyle={{ borderWidth: 0 }}
            value={selectedCity}
            options={countryArray}
          />
        </View>
        <PressableRadius rippleBackgroundColor={'#FF5252'}>
          <SettingSVG />
        </PressableRadius>
      </View>
    )
  }

  const ItemsTitleRow = ({ title }: any) => {
    return (
      <View style={itemTitleRow}>
        <Text size='large'>
          {title}
        </Text>
        <Pressable>
          <Text color='#FCD12A'>
            {'view all'}
          </Text>
        </Pressable>
      </View>
    )
  }

  return (
    <HomeView
    foodItems={foodItems}
      renderPopular={renderPopular}
      ItemsTitleRow={ItemsTitleRow}
      categoriArray={categoriArray}
      renderCategori={renderCategori}
      Header={Header}
    />
  )
}

export default Home

const styles = ({ selectedCategori }: any) => {
  return (
    StyleSheet.create({
      categoriText: {
        marginLeft: ms(5),
      },
      itemPickerContainer: {
        width: windowW,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
      },
      popularImage: {
        width: ms(130),
        height: ms(130),
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      iconContainer: {
        width: 38,
        height: 38,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FF5252',
      },
      pizzaCategoriView: {
        flexDirection: 'row',
        height: (51),
        // width: ms(110),
        paddingHorizontal: 10,
        backgroundColor: selectedCategori == 'pizza' ? '#FF0000' : '#E9DFDF',
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center'
      },
      burgerCategoriView: {
        flexDirection: 'row',
        height: (51),
        // width: ms(110),
        paddingHorizontal: 10,
        backgroundColor: selectedCategori == 'burger' ? '#FF0000' : '#E9DFDF',
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center'
      },
      chickeBurgerView: {
        flexDirection: 'row',
        height: (51),
        // width: ms(110),
        paddingHorizontal: 10,
        backgroundColor: selectedCategori == 'chicken' ? '#FF0000' : '#E9DFDF',
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center'
      },
      wrapperCategori: {
        marginLeft: 5,
        borderRadius: 21,
      },
      itemTitleRow: {
        width: '100%',
        paddingHorizontal: ms(20),
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      wrapperCardPress: {
        marginVertical: 10,
        backgroundColor: 'white',
        marginLeft: ms(13),
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: ms(155),
        height: 200,
        borderWidth : 0.4 ,
        borderColor : '#8d8c8e'
      },
      innerCardPress: {
        width: ms(155),
        height: 200,
        // backgroundColor: 'white',
        borderRadius: 20,
      },
      itemNameText: {
        alignSelf: 'center',
        marginTop: 3,
      },
      descriptionText: {
        alignSelf: 'center',
        marginTop: 3,
      },
      priceText: {
        alignSelf: 'center',
        marginTop: 3,
      },
      detailContainer: {
        position: 'absolute',
        bottom: 5,
        alignSelf: 'center'
      },
      sandwitchCategoriView: {
        flexDirection: 'row',
        height: (51),
        paddingHorizontal: 10,
        backgroundColor: selectedCategori == 'sandwitch' ? '#FF0000' : '#E9DFDF50',
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center'
      },
      headerView: {
        marginTop: 10,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: ms(40, 0.5) ,
      },
    })
  )
}