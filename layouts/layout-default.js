import { StyleSheet, View } from "react-native";
import Header from "../components/header";

const DefaultLayout = ({children}) => {
  return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.main}>
          {children}
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  main: {
    flex: 1,
  },
});

export default DefaultLayout;