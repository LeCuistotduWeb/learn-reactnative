import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Video = ({video}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Titre: {video.title}</Text>
      <Text style={styles.date}>Release Year: {video.releaseYear}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0,0,0,.1)',
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {}
});

export default Video