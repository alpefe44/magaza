import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import product from '../data/products'
import Navbar from './Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { productSlice } from '../src/productSlice'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'


const HomeScreen = () => {
  const { navigate }: any = useNavigation();
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar></Navbar>
      <View style={styles.products}>
        <Text style={{ color: 'blue', paddingHorizontal: 10, fontWeight: 'bold' }}>View All</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={styles.products}>
              <Pressable onPress={() => {
                dispatch(productSlice.actions.setSelectedProduct(item.id))
                navigate('ProductDetailScreen')
              }
              } >
                <Image source={{ uri: item.image }} style={styles.image}></Image>
              </Pressable>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View >

      <View style={styles.detailProducts}>
        <Text style={{ paddingHorizontal: 10, fontWeight: '500', color: 'gray' }}>Product Details</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={{ alignItems: 'center', padding: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Pressable onPress={() => {
                navigate('ProductDetailScreen')
                dispatch(productSlice.actions.setSelectedProduct(item.id))
              }} >
                <Image source={{ uri: item.image }} style={styles.image}></Image>
              </Pressable>
              <Text style={{ fontWeight: 'bold' }}>{item.price} $</Text>
            </View>

          )}
          pagingEnabled={true}
          horizontal
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>

      <View style={styles.footer}>
        <Pressable style={{ padding: 10 }}><FontAwesome5 name='facebook' size={26} ></FontAwesome5></Pressable>
        <Pressable style={{ padding: 10 }}><FontAwesome5 name='github' size={26} ></FontAwesome5></Pressable>
        <Pressable style={{ padding: 10 }}><FontAwesome5 name='linkedin' size={26} ></FontAwesome5></Pressable>
      </View>

      <Text style = {{fontWeight:'300' , fontSize:16 , color:'gray' , alignSelf:'center'}}>...</Text>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({



  products: {
    marginTop: 20,
    paddingHorizontal: 2
  },

  image: {
    width: 150,
    aspectRatio: 1,
  },

  detailProducts: {
    marginTop: 50,

  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'relative',
    marginTop:50


  }
})

export default HomeScreen