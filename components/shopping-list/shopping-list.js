import { useState } from "react"
import { Button, StyleSheet, Text, View, Pressable, Image, ImageBackground } from "react-native"
import useShoppingList from "../../hooks/useShoppingList"
import ListItems from './list-items'
import AddProductModal from "./add-product-modal"
import imageUrl from '../../assets/legumes.jpg'
import backgroundUrl from '../../assets/background.jpg'
import { Ionicons } from '@expo/vector-icons'; 
import colors from "../../constants/colors"

const ShoppingList = () => {
  const {todos, addTodo, clearTodos, removeTodo} = useShoppingList();
  const [modalVisible, setModalVisible] = useState(false);

  const onSubmit = (input) => {
    setModalVisible(false);
    if(input){
      addTodo({value: input, id: new Date().toString()});
    }
  }  

  const onPress = () => {
    setModalVisible(true);
  }

  return (
    <ImageBackground source={backgroundUrl} resizeMode="cover" style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.title}>Ma shopping list</Text>
      
      <Image style={styles.bannerImg} source={imageUrl} />
      
      <ListItems todos={todos} removeTodo={removeTodo}/>
      
      <Pressable style={[styles.button, styles.addButton]} onPress={onPress}>
        <Text style={[styles.buttonText, styles.addButtonText]}>
          <Text>Add product</Text>
          <Ionicons 
            size={22} 
            name="add" 
            color={colors.white}
            style={styles.iconAdd}
          />
        </Text>
      </Pressable>

      {(todos.length > 0) && (
        <Pressable
          style={[styles.button, styles.buttonDanger]} 
          onPress={clearTodos}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      )}

      <AddProductModal 
        onSubmit={onSubmit}
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
      />
    </View>
    </ImageBackground>
  )
} 

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 32,
    flex:1,
    marginBottom: 54,
  },
  bannerImg: {
    width: '100%',
    height: 150,
    marginBottom: 30,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 16,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'green',
  },
  buttonDanger: {
    backgroundColor: 'red',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addButtonText: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  addButton: {
    marginTop: 32,
  },
  background: {
    height: '100%',
  },
  iconAdd: {
    marginLeft: 24,
  },
});

export default ShoppingList