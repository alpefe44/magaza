import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, FlatList } from 'react-native'
import React from 'react'
import products from '../data/products'
import Navbar from './Navbar/Navbar'


type IProps = {

}


const HomeScreen = (props: IProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar></Navbar>
      <View style={styles.products}>
        <Text style={{ color: 'blue', paddingHorizontal: 10 , fontWeight:'bold'}}>View All</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={styles.products}>
              <Image source={{ uri: item.image }} style={styles.image}></Image>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>

      <View style={styles.detailProducts}>
        <Text style = {{paddingHorizontal:10 , fontWeight:'500' , color:'gray'}}>Product Details</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View style={{ alignItems: 'center', padding: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Image source={{ uri: item.image }} style={styles.image}></Image>
              <Text style={{ fontWeight: 'bold' }}>{item.price} $</Text>
            </View>
          )}
          pagingEnabled={true}
          horizontal
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>

    </SafeAreaView>
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

  }
})

export default HomeScreen