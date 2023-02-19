import { StyleSheet, Text } from "react-native";

const ListEmpty = () => <Text style={styles.text}>Aucun article ajouté</Text>

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default ListEmpty;