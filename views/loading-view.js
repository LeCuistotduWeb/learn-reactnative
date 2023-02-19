import { StyleSheet, Text, View } from 'react-native';
import color from '../constants/colors';
import fonts from '../constants/fonts';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: fonts.fontRegular,
    fontSize: 18,
  }
})

export default LoadingView;