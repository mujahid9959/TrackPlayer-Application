import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AlbumDetails = ({trackName,artistName}) => {
  return (
   <View style={{justifyContent:"center"}}>
    <Text style={styles.name}>{trackName}</Text>
     <Text style={styles.artist}>{artistName}</Text>
   </View>
  )
}

export default AlbumDetails;

const styles = StyleSheet.create({
    name:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:40,
        color:"#fff",
    },
    artist:{
      textAlign:"center",
      fontWeight:"bold",
      fontSize:15,
      color:"#fff",
      margin:20,
  }
});