import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import { BackgroundSVG, BackSVG, MinuusSVG, PlusSVG, StarSVG, TimeSVG } from '../../assets'
import { windowH, windowW } from '../../common'
import { Pressable, PressableRadius, Text } from '../../components'
import MeasureText from 'react-native-measure-text';
import { useRedux } from 'hooks'

const FoodDetail = (props: any) => {
  const {
    navigation, selectedSize, setSelectedSize, counter, setCounter,
    setReadMore, readMore,
  } = props
  let type = props?.route?.params.type
  let { image, name, price, id } = props?.route?.params.item
  const { Save, Get } = useRedux()
  const { foodSelected } = Get().user
  console.log(image, 'image');

  const {
    container, bottomContainer, innerBackPress, wrapperBackPress, wrapperDotPress,
    innerDotPress, rightCircleView, leftCircleView, foodImage, behindCircleView,
    pInnerStyle, pWrapperStyle, lInnerStyle, lWrapperStyle, pText, lText, mText,
    mInnerStyle, mWrapperStyle, contentContainer, descriRow, timeView, descriText,
    priceRowView, counterView, decInner, decWrapper, inInner, inWrapper, fullDescriText,
    detailScroll, buyPress, detailContentScroll
  } = styles({ selectedSize, image , type })

  useEffect(() => {
    console.log(foodSelected, 'foodSelected');

  }, [foodSelected])

  return (
    <View style={container}>
      <BackgroundSVG />
      <PressableRadius rippleBackgroundColor='#FE5959' wrapperStyle={wrapperBackPress} onPress={() => navigation.navigate('home')} innerStyle={innerBackPress}>
        <BackSVG />
      </PressableRadius>
      <PressableRadius rippleBackgroundColor='#FE5959' innerStyle={innerDotPress} wrapperStyle={wrapperDotPress}>
        <View style={rightCircleView} />
        <View style={leftCircleView} />
      </PressableRadius>
      <View style={bottomContainer} >
        <Image style={foodImage} source={image} />
        {type &&
          <>
            <View style={behindCircleView} />
            <PressableRadius
              onPress={() => setSelectedSize('P')}
              innerStyle={pInnerStyle}
              rippleBackgroundColor={'#FE5959'}
              wrapperStyle={pWrapperStyle}>
              <Text size='medium' style={pText}>
                {'P'}
              </Text>
            </PressableRadius>
            <PressableRadius
              rippleBackgroundColor={'#FE5959'}
              onPress={() => setSelectedSize('L')}
              innerStyle={lInnerStyle}
              wrapperStyle={lWrapperStyle}>
              <Text size='medium' style={lText}>
                {'L'}
              </Text>
            </PressableRadius>
            <PressableRadius
              rippleBackgroundColor={'#FE5959'}
              onPress={() => setSelectedSize('M')}
              innerStyle={mInnerStyle}
              wrapperStyle={mWrapperStyle}>
              <Text size='large' style={mText}>
                {'M'}
              </Text>
            </PressableRadius>
          </>
        }
        <ScrollView style={detailScroll} contentContainerStyle={detailContentScroll}>
          <Text size='large'>
            {name}
          </Text>
          <View style={descriRow}>
            <Text size='xSmall' color='#4E4B4B70' style={descriText}>
              {'Chessy Thin Crust Pepperoni Pizza'}
            </Text>
            <View style={timeView}>
              <Text style={{ marginRight: 5 }}>
                {'5-10 Min'}
              </Text>
              <TimeSVG />
            </View>
          </View>
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            {['', '', '', ''].map(() => {
              return (
                <StarSVG width={27} height={27} style={{ marginRight: 3 }} />
              )
            })}
          </View>
          <View style={priceRowView}>
            <Text>
              <Text>
                {'Price : '}
              </Text>
              <Text color='#FE5959'>
                {'$'}
              </Text>
              <Text>
                {' '} {selectedSize == 'M' ? price :
                  selectedSize == 'P' ? Math.round(Number(price)) - 3 :
                    selectedSize == 'L' ? Number(price) + 4 : undefined
                }
              </Text>
            </Text>
            <View style={counterView}>
              <PressableRadius onPress={() => counter > 1 && setCounter(counter - 1)} innerStyle={decInner} wrapperStyle={decWrapper}>
                <MinuusSVG />
              </PressableRadius>
              <Text color='white'>
                {counter}
              </Text>
              <PressableRadius onPress={() => setCounter(counter + 1)} innerStyle={inInner} wrapperStyle={inWrapper}>
                <PlusSVG />
              </PressableRadius>
            </View>
          </View>
          <Text style={fullDescriText}>
            <Text color={'#575558'}>
              {'This pepperoni pizza uses, Mozzarella cheese,Raoshomemade pizza sauce,tomatoes sauce,oila peporni ,halopinos ,onions'}
              {readMore && 'This pepperoni pizza uses, Mozzarella cheese,Raoshomemade pizza sauce,tomatoes sauce,oila peporni ,halopinos ,onions'}
            </Text>
            <Pressable onPress={() => setReadMore(!readMore)}>
              <Text style={{ top: 2 }} color='#FE5959'>
                {readMore ? ' ... Read Less' : ' ... Read More'}
              </Text>
            </Pressable>
          </Text>
          <Pressable onPress={() => {
            price = selectedSize == 'L' ? Number(price) + 4 : selectedSize == 'P' ? Number(price) - 3 : Number(price)
            let addFood = true
            for (let perFood of foodSelected) {
              if (perFood.id == id) {
                addFood = false
              }
            }
            addFood && Save({
              foodSelected: [...foodSelected, {
                name,
                image,
                price,
                id,
                number: counter,
              }]
            }, 'user')

            navigation.navigate('myCart')
          }} wrapperStyle={buyPress}>
            <Text size='large' color='white'>
              {'Add to Cart'}
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  )
}

export default FoodDetail

const styles = ({ selectedSize, image , type }: any) => {
  return (
    StyleSheet.create({
      priceRowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      },
      timeView: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      descriText: {
        marginRight: 10,
        flex: 1,
      },
      contentContainer: {
        width: '100%',
        // backgroundColor: 'red',
      },
      pWrapperStyle: {
        width: 27,
        height: 27,
        borderRadius: 13.5,
        position: 'absolute',
        top: 105,
        left: (windowW - 27) / 2 - 55,
        zIndex: 3000,
      },
      mWrapperStyle: {
        width: 33,
        height: 33,
        borderRadius: 16.5,
        position: 'absolute',
        top: 120,
        left: (windowW - 33) / 2,
        zIndex: 3000,
      },
      lWrapperStyle: {
        width: 27,
        height: 27,
        borderRadius: 13.5,
        position: 'absolute',
        top: 105,
        left: (windowW - 27) / 2 + 55,
        zIndex: 3000,
      },
      behindCircleView: {
        width: 190,
        height: 135,
        borderBottomLeftRadius: 90,
        borderBottomRightRadius: 90,
        borderTopLeftRadius: 0,
        // borderTopColor : 'white' ,
        borderTopWidth: 0,
        borderTopRightRadius: 0,
        borderWidth: 2,
        borderColor: '#FE5959',
        zIndex: -3000,
        left: (windowW - 190) / 2,
        position: 'absolute',
        top: 0,
      },
      decInner: {
        width: 40,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      decWrapper: {
        borderRadius: 19,
      },
      inInner: {
        width: 40,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      },
      inWrapper: {
        borderRadius: 19,
      },
      foodImage: {
        position: 'absolute',
        width: image == 7 ? 219
          : image == 6 ? 214 : 203,

        height: image == 7 ? 219 :
          image == 6 ? 214 : 203,

        left: image == 7 ? (windowW - 210) / 2
          : image == 6 ? (windowW - 214) / 2 : (windowW - 203) / 2,

        top: image == 7 ? -110 :
          image == 6 ? -100 : -95,

        zIndex: 2000,
        resizeMode: 'contain',

      },
      pText: {
        color: selectedSize == 'P' ? 'white' : '#FE5959'
      },
      lText: {
        color: selectedSize == 'L' ? 'white' : '#FE5959'
      },
      mText: {
        color: selectedSize == 'M' ? 'white' : '#FE5959'
      },
      wrapperBackPress: {
        position: 'absolute',
        top: 20,
        left: ms(20),
        borderRadius: 8,
        backgroundColor: 'white',
      },
      innerBackPress: {
        width: 43,
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      innerDotPress: {
        flexDirection: 'row',
        width: 43,
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rightCircleView: {
        width: 6,
        height: 6,
        backgroundColor: '#4E4B4B',
        marginRight: 4,
        borderRadius: 3,
      },
      leftCircleView: {
        width: 6,
        height: 6,
        backgroundColor: '#4E4B4B',
        borderRadius: 3,
      },
      wrapperDotPress: {
        position: 'absolute',
        top: 20,
        right: ms(20),
        borderRadius: 8,
        backgroundColor: 'white',
      },
      lInnerStyle: {
        width: 27,
        height: 27,
        borderRadius: 13.5,
        borderWidth: 1,
        borderColor: '#FE5959',
        justifyContent: 'center',
        backgroundColor: selectedSize == 'L' ? '#FE5959' : 'white',
        alignItems: 'center',
      },
      pInnerStyle: {
        width: 27,
        height: 27,
        borderRadius: 13.5,
        borderWidth: 1,
        borderColor: '#FE5959',
        justifyContent: 'center',
        backgroundColor: selectedSize == 'P' ? '#FE5959' : 'white',
        alignItems: 'center',
      },
      mInnerStyle: {
        width: 33,
        height: 33,
        borderRadius: 19.5,
        borderWidth: 1,
        borderColor: '#FE5959',
        justifyContent: 'center',
        backgroundColor: selectedSize == 'M' ? '#FE5959' : 'white',
        alignItems: 'center',
      },
      descriRow: {
        // backgroundColor  :'red' ,
        marginTop: 8,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      },
      counterView: {
        width: ms(109),
        height: 33,
        backgroundColor: '#FE5959',
        borderRadius: 19,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      fullDescriText: {
        marginTop: 19,
      },
      detailScroll: {
        width: '100%',
        marginTop: type=='pizza' ?  178 : 120,
        paddingHorizontal: ms(25),
      },
      buyPress: {
        position: ( type=='pizza' && windowH - 570 > 0 ) ? 'absolute' : windowH - 628 > 0 ? 'absolute' : 'relative',
        marginVertical: windowH - 570 > 0 ? 20 : 20,
        bottom: windowH - 570 > 0 ? 60 : undefined,
        width: ms(200),
        height: 50,
        backgroundColor: '#FE5959',
        borderRadius: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      detailContentScroll: {
        // backgroundColor : 'blue',
        flex: windowH - 570 > 0 ? 1 : undefined,
      },
      bottomContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: windowH - 140,
        borderTopLeftRadius: 51,
        borderTopRightRadius: 51,
        backgroundColor: 'white'
      }
    })
  )
}