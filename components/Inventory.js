import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import InventoryItem from './components/InventoryItem';

export default function Inventory() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Inventory
      </Text>
      <TextInput style={styles.textinput} placeholder='Search...'/>
      <View style={styles.fridgewrap}>
        <View style={styles.fridge}>
          <InventoryItem name='tomato'/>
          <InventoryItem name='tomato'/>
          <InventoryItem name='tomato'/>
          <InventoryItem name='tomato'/>
          <InventoryItem name='tomato'/>
          <InventoryItem name='tomato'/>
          <InventoryItem name='tomato'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 20,
    textAlign: 'center',
  },
  fridgewrap:{
    width: 340,
    height: 550,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  fridge:{
    width: 304,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textinput:{
    backgroundColor: 'white',
    padding:12,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    width:300,
  }
});
