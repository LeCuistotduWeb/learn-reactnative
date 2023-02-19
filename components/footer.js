import { StyleSheet, View, Text, StatusBar } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
        <Text style={styles.headerBrand}>@lecuistotduweb</Text>
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'grey',
    padding: 24,
  }
});

export default Footer;