import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
// import Navbar from './components/NavBar';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigations/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});
