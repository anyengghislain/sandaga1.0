import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LastS from './Last.js';
import O_G from './Oder_Gro.js';
import Y_Location from './Your_Location.js';
import Homescreen from './screens/Home/Home.js';
import Rootscreen from './screens/Rootscreen.js';
import profileScreen from './screens/Profilescreen.js';
//import profileScreen from './screens/ProfileScreen.js';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="premiere page" component={Rootscreen} />
        <Tab.Screen name="deuxieme page" component={profileScreen} />
        <Tab.Screen name="troisieme page" component={LastS} />
        <Tab.Screen name="Location" component={Y_Location} />
        <Tab.Screen name="Payement" component={Homescreen} />
            <Tab.Screen name="Other" component={O_G} />
        </Tab.Navigator>
        </NavigationContainer>

        

        );
}
