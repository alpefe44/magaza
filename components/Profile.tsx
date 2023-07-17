import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Profile = () => {
  const cartItem = useSelector((state) => state.cart.items)
  return (
    <FlatList
      data={cartItem}
      renderItem={({item}) => (
        <Text>{item.name}</Text>
      )}
    ></FlatList>
  )
}

export default Profile