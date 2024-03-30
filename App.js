import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Controls from './components/Controls';
import { songs } from './components/Data';
import AlbumCover from './components/AlbumCover';
import AlbumDetails from './components/AlbumDetails';

export default function App() {
  
  const [selectedTrack , setSelectedTrack] = useState(0);
  const currentTrack = songs [selectedTrack]
  function playNextSong() {
    if (selectedTrack === songs.length - 1){
      setSelectedTrack(0)
    }else{
    setSelectedTrack(selectedTrack + 1)
    }
  }

  function playPrevSong() {
    if (selectedTrack === 0){
      setSelectedTrack(songs.length - 1)
    }else{
    setSelectedTrack(selectedTrack - 1)
    }
  }
  return (
    <View style={styles.container}>
      <AlbumCover albumCover={currentTrack.artwork}/>
      <AlbumDetails trackName={currentTrack.title} 
      artistName={currentTrack.artist}
      />

      <Controls {...{playNextSong}}
      {...{playPrevSong}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111436',
  },
});
