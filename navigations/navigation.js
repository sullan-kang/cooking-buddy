// import React from 'react'
// import {createStackNavigator} from '@react-navigation/stack'
// import {NavigationContainer} from '@react-navigation/native'
// import {createDrawerNavigator} from '@react-navigation/drawer'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import Home from '../screens/home';
import Inventory from '../screens/Inventory';
import Shoppinglist from '../screens/Shoppinglist';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// const homeStack = createStackNavigator({
//     home: {
//         screen: Home,
//         navigationOptions: ({navigation}) => ({
//             headerStyle: {
//                 // backgroundColor: COLORS.primary,
//                 shadowOpacity: 0,
//             },
//             // headerTitle: 'Find Best Restaurents',
//             headerTitleStyle: {
//                 // color: COLORS.white,
//                 fontWeight: '800',
//             },
//             // headerRight: (
//             //     <Icon2 name="options-sharp"
//             //         size={30} color={COLORS.white}
//             //         style={{paddingRight: 10}}
//             //         onPress={() => { navigation.openDrawer() }}
//             //     />
//             // ),
//         })
//     },
//     // restaurent: {
//     //     screen: RestaurentDetails,
//     //     navigationOptions: {
//     //         headerTitle: null,
//     //     }
//     // }
// }, {
//     defaultNavigationOptions: ({navigation}) => ({
//         headerStyle: {
//             // backgroundColor: COLORS.primary,
//             shadowOpacity: 0,
//         },
//         headerBackTitle: 'back',
//         headerBackTitleStyle: {
//             fontWeight: 'bold',
//         },
//         headerTintColor: 'white',
//     }),
// })
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarLabel: 'Inventory',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fridge" color={color} size={size} />
          ),
        //   tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Shopping List"
        component={Shoppinglist}
        options={{
          tabBarLabel: 'Shopping List',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
        
      />
      <Tab.Screen
        name="Cooking"
        component={Home}
        options={{
          tabBarLabel: 'Cooking',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pot-steam" color={color} size={size} />
          ),
        }}
       />
    </Tab.Navigator>
  );
}

export default MyTabs;
