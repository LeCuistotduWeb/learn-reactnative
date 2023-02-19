import React, { useState } from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'

const Form = () => {
  const [input, setInput] = useState();

  return (
    <View>
      <TextInput placeholder='Entrez du text' multiline={true} style={styles.input} onChangeText={value => setInput(value)} value={input}/>
      <Text style={styles.result}>Input value : {input}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1, 
    margin: 16,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});

export default Form