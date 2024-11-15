import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


const Card = () => {
  return(
    <View style={menu.container}>
      {}
      <View style={menu.backgroundMenu}/>
      {}
      <Text style={menu.menuHeaderText}>Menu</Text>
      {}
      <View style={menu.buttonContainer}>
        <TouchableOpacity style={menu.ActionButton} onPress={() => Error('Create Card')}>
          <Text style={menu.ActionButtonTxt}>Create Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={menu.ActionButton} onPress={() => Error('Manage Card')}>
          <Text style={menu.ActionButtonTxt}>Manage Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={menu.ActionButton} onPress={() => Error('Search for Card')}>
          <Text style={menu.ActionButtonTxt}>Search for Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const menu = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundMenu:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#64608C',
  },

  menuHeaderText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 50,
  },

  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ActionButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },

  ActionButtonTxt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Card