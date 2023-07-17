import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import ViewAllScreen from './components/ViewAllScreen';
import ProductDetailScreen from './components/ProductDetailScreen';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'HomeScreen' component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name = 'ViewAllScreen' component={ViewAllScreen}></Stack.Screen>
        <Stack.Screen name = 'ProductDetailScreen' component={ProductDetailScreen}></Stack.Screen>
        <Stack.Screen name = 'Profile' component={Profile}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation