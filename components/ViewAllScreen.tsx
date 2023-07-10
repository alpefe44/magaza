import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import alldata from '../data/alldata'
import Navbar from './Navbar/Navbar'


const ViewAllScreen = () => {
  return (
    <>
      <Navbar></Navbar>
      <FlatList
        data={alldata}
        renderItem={({ item }) => (
          <>
            <Image source={{ uri: item.image }} style={{ width: '50%', aspectRatio: 1 }}></Image>
          </>
        )}

        numColumns={2}
      ></FlatList>

    </>
  )
}

export default ViewAllScreen