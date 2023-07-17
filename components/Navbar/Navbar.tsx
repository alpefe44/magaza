import { View, Text, StyleSheet , Image , Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {
  const {navigate}:any = useNavigation();
  return (
    <View style={styles.ustEkran}>
      <Image style={styles.imageArea} source={require('../../assets/resim.jpeg')}></Image>
      <View style={styles.ustSag}>
        <Pressable onPress={() => navigate('Profile') }><Text style={styles.text}>Profile</Text></Pressable>
        <Pressable><Text style={styles.text}>Log Out</Text></Pressable>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  ustEkran: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop:30,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ffefe0'
  },
  imageArea: {
    padding: 25,
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 25,
  },
  text: {
    paddingHorizontal: 5
  }, 
  ustSag: {
    flexDirection: 'row',
  },
})

export default Navbar