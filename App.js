/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//Navigation Imports
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Importing Screens
import DashboardScreen from './src/screens/DashboardScreen';
import SearchScreen from './src/screens/SearchScreen';
import PortfolioScreen from './src/screens/PortfoliioScreen';
import NewsScreen from './src/screens/NewsScreen';
import WebviewScreen from './src/screens/WebviewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name = "Dashboard" component = {DashboardScreen} options = {{headerShown : false}}/>
        <Stack.Screen name = "Search" component = {SearchScreen}/>
        <Stack.Screen name = "News" component={NewsScreen} /> 
        <Stack.Screen name = "Browser" component={WebviewScreen} />
      </Stack.Navigator>
  )
}

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "Dashboard" component={MyStack} options = {{
          headerShown : false
        }}/>
        <Tab.Screen name = "Portfolio" component={PortfolioScreen} options = {{
          headerShown : false
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default App;
