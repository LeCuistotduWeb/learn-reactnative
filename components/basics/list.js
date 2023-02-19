import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const List = () => {
  
  const data = [
    {id: 1, name: 'John', age: 32},
    {id: 2, name: 'Jane', age: 26},
    {id: 3, name: 'sophie', age: 3},
    {id: 4, name: 'Robert', age: 87},
    {id: 5, name: 'Robert', age: 87},
    {id: 6, name: 'Robert', age: 87},
    {id: 7, name: 'Robert', age: 87},
    {id: 8, name: 'Robert', age: 87},
    {id: 9, name: 'Robert', age: 87},
    {id: 10, name: 'Robert', age: 87},
  ]

  return (
    <View style={styles.list}>
      <Text style={styles.titre}>List Map</Text>
      {data.map(user => (
        <View key={user.id} style={styles.card}>
          <Text style={styles.name}>name: {user.name}</Text>
          <Text style={styles.age}>age: {user.age} ans</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  titre: {
    fontWeight: 'bold',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  name: {
    fontWeight: 'bold',
  },
  age: {}
});

export default List