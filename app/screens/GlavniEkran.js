import { AppRegistry, TextInput, Text, View } from 'react-native';
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Header, Icon, } from 'react-native-elements';
import {StackNavigator } from 'react-navigation';
import Mapa from '../components/Mapa.js'

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
			<View style={{
				flex: 3.9 }} >
					<Mapa/>
				
			</View>
			<View style={{
			flex: 5 }} >
				
				<View style={{ flexDirection: 'column', justifyContent: 'center', flex:7.5, alignItems: 'center', paddingLeft: 25, paddingRight: 25 }}>
					<Text style={{fontSize: 18}} >
						Da biste odredili putanju molimo pritisnite dugme u dnu ekrana
					</Text>
				</View>
				<View style={{ flex:2.5, justifyContent: 'flex-end', flexDirection: 'row', paddingRight:15}} >
					<Icon
						reverse
						name='ios-add'
						type='ionicon'
						color='#506d58' 
						onPress = {() => navigate ('Profile')}
					/>
				</View>
			</View>
		
		</View>
				
		);

	}
}