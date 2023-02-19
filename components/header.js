import { StyleSheet, View, Text} from "react-native";
import fonts from "../constants/fonts";

const Header = () => {
  const brand = 'Mon App';
  return (
    <View style={styles.header}>
        <Text style={styles.headerBrand}>{brand}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: 'green',
    paddingTop: 90,
  },
  headerBrand: {
    fontSize: 22,
    color: 'white',
    fontFamily: fonts.ShantellSansRegular,
  },
});

export default Header;