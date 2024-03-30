import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';


const Controls = ({playNextSong , playPrevSong}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  const handlePlaySound = async () => {
    if (!sound) {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3' },
        { shouldPlay: true }
      );
      setSound(newSound);
    } else {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View >
          <View>
        <Slider style={styles.bar}
        minimumValue={0}
        thumbTintColor='#fff'
        minimumTrackTintColor='#fff'
        maximumTrackTintColor='#FFD369'/>
    </View>
    <View style={styles.progressLabel}>
        <Text style={styles.progressTxt}>0:00</Text>
        <Text style={styles.progressTxt}>4:00</Text>
    </View>

<View style={styles.container}>
         <TouchableOpacity onPress={playPrevSong} style={styles.playButton}>
        <AntDesign  name="banckward" size={30} color="white"/>
    </TouchableOpacity>
      <TouchableOpacity onPress={handlePlaySound} style={styles.playPauseBtn}>
        <AntDesign name={isPlaying ? 'pausecircleo' : 'playcircleo'} size={50} color="#000000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={playNextSong} style={styles.playButton}>
    <AntDesign name="forward" size={30} color="white"/>
    </TouchableOpacity>
    </View>
    </View>
  );
};

export default Controls;


const styles = StyleSheet.create({
  container :{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginTop:10,
  },
  playPauseBtn :{
      width:120,
      height:120,
      backgroundColor:"#fff",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:100,
      borderWidth:20,
      borderColor:"#1B1246",
      margin:10,
  
  },
  bar :{
      width:350,
      height:40,
      marginTop:10,
      marginLeft:20,
      flexDirection:"row",
  },
  progressLabel :{
      width:340,
      flexDirection:"row",
      marginLeft:20,
      justifyContent:"space-between",
  },
  progressTxt :{
      color:"#fff",
  },
  });