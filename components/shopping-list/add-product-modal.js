import React, {useEffect, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';

const AddProductModal = ({onSubmit, modalVisible, setModalVisible}) => {
  const [input, setInput] = useState('');

  const handleCancel = () => {
    setInput('');
    setModalVisible(!modalVisible);
  }
  
  const handleSubmit = () => {
    setInput('');
    onSubmit(input);
  }

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={[
            styles.centeredView,
            modalVisible ? styles.centeredViewOpen: null,
          ]}>
          <View style={styles.modalView}>
            
            <TextInput
              autoFocus={true}
              style={styles.input} value={input} 
              placeholder="orange, banane, lait..." 
              onChangeText={value => setInput(value)}
            />
            
            <View style={styles.buttonGroup}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleCancel}>
                <Text style={styles.textStyleCancel}>Cancel</Text>
              </Pressable>
              <Pressable 
                style={[styles.button, styles.submitButton]}
                onPress={handleSubmit} 
                disabled={!input}
              >
                <Text style={styles.textStyle}>Add product to list</Text>
              </Pressable>
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredViewOpen: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    padding: 32,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    width: '100%',
    minHeight: '40%',
    shadowRadius: 4,
    alignItems:'stretch',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: -5,
    },
  },
  input: {
    padding: 10,
    borderWidth: 1, 
    borderRadius: 5,
    marginBottom: 24,
    width: '100%',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginBottom: 16,
    flex: 2,
  },
  submitButton: {
    backgroundColor: 'green',
  },
  buttonClose: {
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
    textStyleCancel: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default AddProductModal;