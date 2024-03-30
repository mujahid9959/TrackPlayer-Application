import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'


const {width} =Dimensions.get('window').width
const AlbumCover = ({albumCover}) => {
  return (
    <View style={{margin:10}}>
        <Image source={{uri:albumCover}} 
        style={{width,height:350,borderRadius:25,margin:10}}
        resizeMode={'contain'}/>
    </View>
  )
}

export default AlbumCover;