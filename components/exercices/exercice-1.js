import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';

const data = [
    {name: 'John', age: 32},
    {name: 'Jane', age: 26},
    {name: 'sophie', age: 3},
    {name: 'Robert', age: 76},
    {name: 'Margueritte', age: 87},
]


const Exercice1 = () => {
  const addData = async () => {
    await data.push(
      {name: 'Remond', age: 58},
      {name: 'Calie', age: 12},
      {name: 'Bérangère', age: 37}
    )
  }

  const RenderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.name}>name: {item.name}</Text>
      <Text style={styles.age}>age: {item.age} ans</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={RenderItem} 
        data={data}
        keyExtractor={(item,index) => index}
        // horizontal={true}
        refreshing={true}
        refreshControl={
          <RefreshControl 
            onRefresh={addData}
            refreshing={false}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    flexGrow: 1,
    marginLeft: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  age: {}
});

export default Exercice1;