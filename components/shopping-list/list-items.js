import { Alert, FlatList, Text } from "react-native"
import ListItem from "./list-item"
import ListEmpty from "./list-empty";

const ListItems = ({todos, removeTodo}) => {

  const onPress = (item) => {
    Alert.alert(
      `Supprimer l'article ${item.value}`,
      `Voulez-vous vraimment supprimer l'article ${item.value} ?`, [
        {text: 'Annuler', style: 'cancel',},
        {text: 'Supprimer', onPress: () => removeTodo(item.id)},
      ]
    );
  }

  const renderItems = ({item}) => <ListItem onPress={onPress} item={item}/>

  return (
    <FlatList 
      ListEmptyComponent={<ListEmpty/>} 
      data={todos} renderItem={renderItems} 
      keyExtractor={item => item.id}
    />
  )
}

export default ListItems;