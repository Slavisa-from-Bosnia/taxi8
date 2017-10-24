import { AppRegistry, View } from 'react-native';
import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import {StackNavigator } from 'react-navigation';
import Mapa from '../components/Mapa.js'
import Label1 from '../components/Label1.js';

export default class GlavniEkran extends Component {
	static navigationOptions = {
    title: 'Welcome',
	header: null
	};
	render () {
	const { navigate } = this.props.navigation;
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

	function success(pos) {
		var crd = pos.coords;
		console.log('Your current position is:');
		console.log(`Latitude : ${crd.latitude}`);
		console.log(`Longitude: ${crd.longitude}`);
		console.log(`More or less ${crd.accuracy} meters.`);
	};

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);
	return (
		<View style={{
				flex: 1,
				}}  >
			<View style = {{ flex: 1.1 }}>
				<Header
					backgroundColor='#506d58'
					leftComponent={{ icon: 'menu', color: '#fff' }}
					centerComponent={{ text: 'SUPER TAXI', style: { color: '#fff' } }} 
					rightComponent={{ icon: 'home', color: '#fff' }}
				/>
			</View>
			<View style={{flex: 3.9 }} >
					<Mapa/>
				
			</View>
			<View style={{flex: 5 }} >
				
					<Label1/>
		
			</View>
		</View>	
		);

	}
}