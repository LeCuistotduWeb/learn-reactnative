import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Video from './video-card';
import useFecthVideos from '../../hooks/useFetchVideos';

const VideosList = () => {
  const {videos, loading, error, refetch} = useFecthVideos();
  const renderItems = ({item}) => <Video video={item}/>

  return (
    <View>
      <Text style={styles.titre}>Videos list</Text>
      {error && <Text style={styles.error}>{error.message}</Text>}
      {loading 
      ?<Text style={styles.loader}>...loading</Text>
      :<FlatList data={videos} renderItem={renderItems} keyExtractor={item => item.id}/>
      }
      {error && <Button onPress={refetch} title='refetch videos'/>}
    </View>
  )
}

const styles = StyleSheet.create({
  titre: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  error: {
    color: 'red',
    marginVertical: 16,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  loader: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default VideosList