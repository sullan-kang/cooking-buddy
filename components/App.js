import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, InteractionManager, Image } from 'react-native';
import Shoppinglist from './components/Shoppinglist';
export default function App() {
  return (
    <View style={styles.appContainer}>
      <Shoppinglist visible={true}/>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer:{
    backgroundColor:'linen',
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  
});


