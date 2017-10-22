import React from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import GlavniEkran from './app/screens/GlavniEkran.js'
import store from './app/store';
import {StackNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
	  const MainNavigator = StackNavigator({
			Main: { screen: GlavniEkran}
	  });
    return (
		<Provider store = {store}>
			<MainNavigator/>
		</Provider>
	  
    );
  }
}

