import { windowW } from 'common'
import React, { memo } from 'react'
import { Text, Input, PressableRadius , Pressable } from 'components'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { ViewProps } from './models'
import { ms } from 'react-native-size-matters'

const Login = (props: any ) => {
  const {
    container, loginImage, welcomeText, foodText, emaiInputStyle, emailTextInput,
    passwordStyle, passwordTextInput, registerInnerPress, wrapperRegisterPress ,
    registerText , alreadyPress ,
  } = styles()
  const { navigation } = props
  return (
    <View style={container}>
      <ScrollView contentContainerStyle={{ paddingBottom : 20 ,}}>
        <Image style={loginImage} source={require('assets/images/login-background.png')} />
        <Text color='#FE5959' style={welcomeText} size='headingTitle' type='bold'>
          {' Welcome To'}
        </Text>
        <Text color='#FE5959' style={foodText} size='headingTitle' type='bold'>
          {'Food Delivery'}
        </Text>
        <Input
          state='vertical'
          title='Username'
          style={emaiInputStyle}
          width={ms(260)}
          height={40}
          placeholder='samSmith7421'
          textInputStyle={emailTextInput} />
        <Input
          state='vertical'
          title='Password'
          hasEye={true}
          style={passwordStyle}
          height={40}
          width={ms(260)}
          placeholder='******'
          textInputStyle={passwordTextInput} />
        <PressableRadius onPress={()=>navigation.navigate('home')} innerStyle={registerInnerPress} wrapperStyle={wrapperRegisterPress}>
          <Text size='heading' style={registerText} color='white'>
            {'Login'}
          </Text>
        </PressableRadius>
        <Pressable wrapperStyle={alreadyPress}>
          <Text color='#2A00F5'>
            Don't have an account? Sign up
          </Text>
        </Pressable>

      </ScrollView>
    </View>
  )
}

export default Login

const styles = () => {
  return (
    StyleSheet.create({
      alreadyPress:  {
        alignSelf : 'center' ,
      },
      registerText : {

      },
      registerInnerPress: {
        height : 50 , 
        width : 190 , 
        justifyContent : 'center' ,
        alignItems:  'center' ,
        
      },
      wrapperRegisterPress: {
        marginTop  : 40 ,
        marginBottom : 20 ,
        borderRadius : 25 , 
        alignSelf : 'center' ,
        backgroundColor :'#FE5959' ,
      },
      emailTextInput: {
        borderWidth: 0,
        borderRadius: 8,
        width: ms(260),
        height: 40,
        backgroundColor: '#f8f7f7' ,
        elevation : 1 ,
      },
      passwordStyle: {
        alignSelf: 'center',
      },
      passwordTextInput: {
        borderWidth: 0,
        borderRadius: 8,
        width: ms(260),
        height: 40,
        zIndex : -2000 ,
        backgroundColor: '#f8f7f7' ,
        elevation : 1 ,
      },
      emaiInputStyle: {
        alignSelf: 'center',
      },
      welcomeText: {
        alignSelf: 'center' ,
        marginTop  : -20 ,
        marginBottom : 5 , 
      },
      foodText: {
        alignSelf: 'center' , 
        marginBottom : 10 ,
      },
      loginImage: {
        marginTop : -40 ,
        alignSelf: 'center',
        width: windowW,
        height: windowW * 0.93,
      },
      container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        // alignItems: 'flex-start',
      }
    })
  )
}