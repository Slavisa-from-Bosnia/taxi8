import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import GlavniEkran from './app/screens/GlavniEkran.js'
import store from './app/store';
import {StackNavigator} from 'react-navigation';
import Ekran2 from './app/screens/Ekran2.js';

export default class App extends React.Component {
  render() {
	  const MainNavigator = StackNavigator({
			Main: { screen: GlavniEkran},
			Ekran2: {screen: Ekran2}
	  });
    return (
		<Provider store = {store}>
			<MainNavigator/>
		</Provider>
	  
    );
  }
}

