import { View, Text, FlatList, Image, StyleSheet, Dimensions, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { productSlice } from '../src/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '../src/cartSlice';

const { width } = Dimensions.get('screen');

const ProductDetailScreen = () => {

  const product = useSelector((state) => state.products.selectedProduct)
  const dispatch = useDispatch();
  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <>
              <Image source={{ uri: item }} style={styles.images}></Image>
            </>
          )}

          horizontal
          pagingEnabled={true}
        ></FlatList>

        <FlatList
          data={product.sizes}
          renderItem={({ item }) => (
            <>
              <TouchableOpacity onPress={ () => dispatch(productSlice.actions.setSelectedSize(item)) }><Text style= {{ paddingHorizontal: 10 }}>{item}</Text></TouchableOpacity>
            </>
          )}

          horizontal
        ></FlatList>

        <View style={{ padding: 10, marginBottom: 75 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 22, marginBottom: 15 }}>{product.name}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500', paddingHorizontal: 10 }}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable style={styles.button} onPress={() => dispatch(cartSlice.actions.addCartItem({ product }))}>
        <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', color: 'white' }}>Add to Card</Text>
      </Pressable>




    </View>
  )
}

const styles = StyleSheet.create({
  images: {
    aspectRatio: 1,
    width: width
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    bottom: 10,
    width: '80%',
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 30,
    marginBottom: 10



  }
})

export default ProductDetailScreen