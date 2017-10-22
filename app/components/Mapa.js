import React, {Component} from 'react';
import MapView from 'react-native-maps';

export default class Mapa extends Component {
	render (){
		return(
				<MapView style = {{ flex:1}}
					
					initialRegion={{
					latitude:'${crd.latitude}',
					longitude: 'this.crd.longitude',
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
					}}
					
					scrollEnabled = {false} 
					maxZoomLevel = {10}
					rotateEnabled = {false}
					minZoomLevel = {10}
					pitchEnabled = {false} 
					lodadingEnabled = {true}
					
					
				/>
		);
	}
}