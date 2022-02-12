import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './src/redux/index';
import {
  Home, Map, FoodDetail, Login, MyCart, Checkout
} from './src/screens/index';



const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="map" component={Map} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="foodDetail" component={FoodDetail} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="myCart" component={MyCart} />
        <Stack.Screen name="checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const AppContainer = () => {
  const [store] = useState(createStore(Reducers))
  const styles = StyleSheet.create({
    containerSafeAreaView: {
      flex: 1,
      backgroundColor: 'white'
    }
  })

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <Provider store={store}>
        <SafeAreaView style={styles.containerSafeAreaView}>
          <App />
        </SafeAreaView>
      </Provider>
    </>
  )
}

export default AppContainer
