import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import { Feather } from "@expo/vector-icons";
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Profile = () => {
  const cartItem = useSelector((state) => state.cart.items)
  return (
    <View>
      <FlatList
        data={cartItem}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: item.product.image }} style={{ aspectRatio: 1, width: 200 }}></Image>
            <View style={{ marginTop: 10, flex: 1 }}>
              <Text style={styles.name}>{item.product.name}</Text>
              <Text style={styles.size}>Size {cartItem.size}</Text>
              <View style={styles.footer}>
                <Feather
                  name="minus-circle"
                  size={24}
                  color="gray"
                />
                <Text style={styles.quantity}>{cartItem.quantity}</Text>
                <Feather
                  name="plus-circle"
                  size={24}
                  color="gray"
                />
                <Text style={styles.itemTotal}>$320.0</Text>
              </View>
            </View>
          </View>

        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontWeight: "500",
    fontSize: 18,
  },

  size: {
    fontSize: 16,
    color: "gray",
  },

  footer: {
    marginTop: "auto",
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity:{

  },
  itemTotal:{
    
  }

})

export default Profile