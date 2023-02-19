import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

const BasicFlatList = () => {
  
  const data = [
    {id: '1', name: 'John', age: 32},
    {id: '2', name: 'Jane', age: 26},
    {id: '3', name: 'sophie', age: 3},
    {id: '4', name: 'Robert', age: 87},
    {id: '5', name: 'Robert', age: 87},
    {id: '6', name: 'Robert', age: 87},
    {id: '7', name: 'Robert', age: 87},
    {id: '8', name: 'Robert', age: 87},
    {id: '9', name: 'Robert', age: 87},
    {id: '10', name: 'Robert', age: 87},
  ]

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.name}>name: {item.name}</Text>
      <Text style={styles.age}>age: {item.age} ans</Text>
    </View>
  );

  return (
    <View>
      <Text style={styles.titre}>List Map</Text>
      <FlatList 
        renderItem={renderItem} 
        data={data}
        keyExtractor={item => item.id}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  titre: {
    fontWeight: 'bold',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: 'red',
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

export default BasicFlatList