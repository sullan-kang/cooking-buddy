import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const container = {
  alignItems: 'center',
  // justifyContent: 'center',
  padding: 12,
  display: 'flex',
  width: 75,
};

const item = {
  height:50,
  width:50,
}

const paragraph = {
  marginTop: 4,
  fontSize: 14,
  textAlign: 'center',
}

export default function InventoryItem(props) {
  return (
    <View style={container}>
      <Image style={item} source={require('../assets/tomato.png')} />
      <Text style={paragraph}> {props.name} </Text>
    </View>
  );
}

