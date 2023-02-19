import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import colors from "../../constants/colors";

const ListItem = ({item, onPress}) => {
  return (
    <TouchableHighlight 
      style={styles.card}
      underlayColor="#DDDDDD"
      onPress={() => onPress(item)} 
    >
      <View>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    padding: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  value: {
    fontWeight: 'bold',
  },
});

export default ListItem;