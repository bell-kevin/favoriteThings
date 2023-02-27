import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

export default function App() {
  const [favThings, setFavThings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [thing, setThing] = useState('');
  const [item, setItem] = useState('');

  const addFavThing = () => {
    setFavThings((prevFavThings) => {
      return [
        ...prevFavThings,
        { id: Math.random().toString(), thing: thing, item: item },
      ];
    });
    setModalOpen(false);
  };

  const deleteFavThing = (id) => {
    setFavThings((prevFavThings) => {
      return prevFavThings.filter((favThing) => favThing.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          {/* <Text style={styles.modalTitle}>Add New Favorite Thing</Text> */}
          <TextInput
            style={styles.input}
            placeholder='Enter favorite thing'
            onChangeText={(text) => setThing(text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Enter favorite item'
            onChangeText={(text) => setItem(text)}
          />
          <View style={styles.modalButtons}>
            <Button
              title='Add'
              onPress={addFavThing}
              color='#1E90FF'
            />
            <Button
              title='Cancel'
              onPress={() => setModalOpen(false)}
              color='#DC143C'
            />
          </View>
        </View>
      </Modal>
      {/* <Text style={styles.title}>My Favorite Things</Text> */}
      <FlatList
        data={favThings}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => deleteFavThing(item.id)}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>
                Favorite {item.thing}: <Text style={{ fontWeight: 'normal' }}>{item.item}</Text>
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setModalOpen(true);
          setItem('');
          setThing('');
        }}
      >
        <Text style={styles.addButtonText}>Add New Fav</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
    alignSelf: 'center',
    position: 'absolute',
    top: 25,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem: {
    backgroundColor: 'lightyellow',
    padding: 5,
    borderRadius: 10,
    marginBottom: 1,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemText: {
    fontSize: 18,
  },
  modalContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
