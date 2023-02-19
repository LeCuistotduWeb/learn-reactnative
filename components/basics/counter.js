import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const onPress = (value) => {
    setCount(count + value);
  }

  const reset = () => setCount(0);

  return (
    <View>
      <Text style={styles.count}>value: {count}</Text>
      <Button 
        accessibilityLabel="incrementer +1" 
        onPress={() => onPress(+1)} 
        title="incrementer +1"
        />
      <Button 
        accessibilityLabel="decrementer +1" 
        onPress={() => onPress(-1)} 
        title="decrementer +1"
        />
      <Button 
        accessibilityLabel="reset" 
        disabled={count === 0} 
        onPress={reset} 
        title="reset" color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});