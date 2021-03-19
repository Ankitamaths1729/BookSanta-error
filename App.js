import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {TabNavigator} from './components/TabNavigator';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {DrawNavigator} from './components/DrawNavigator';

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
  }
}

const switchNavigator = createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  Drawer:{screen:DrawNavigator}
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
