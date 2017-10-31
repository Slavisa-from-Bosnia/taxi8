import { AppRegistry, View } from 'react-native';
import React, { Component } from 'react';
import {StackNavigator } from 'react-navigation';
import Mapa from '../components/Mapa.js'
import Label1 from '../components/Label1.js';
import Header from '../components/Header.js';



export default class GlavniEkran extends Component {
	constructor (){
		super();
			
		
	}
		izbor =()=>  {console.log('jes');this.props.navigation.navigate('Ekran2', this.props);}
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
				<Header/>
			</View>
			<View style={{flex: 3.9 }} >
					<Mapa/>
				
			</View>
			<View style={{flex: 5 }} >
				
					<Label1 izbor = {this.izbor.bind(this)}/>
		
			</View>
		</View>	
		);

	}
}
