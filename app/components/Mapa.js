import React, {Component} from 'react';
import MapView from 'react-native-maps';

export default class Mapa extends Component {
	
	constructor(props) {
		super (props); 
		this.state = {
			region: {
			latitude: 42,
			longitude: 19.2133461,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
			}
		};
	}

	onRegionChange(region) {
	this.setState({ region });
	}

	
	
	render (){
	
		return(
				<MapView style = {{ flex:1}}
					
					region = {this.state.region}
					onRegionChange={this.onRegionChange}
					
					scrollEnabled = {false} 
					maxZoomLevel = {19}
					rotateEnabled = {false}
					minZoomLevel = {19}
					pitchEnabled = {false} 
					showsUserLocation = {true}
					zoomEnabled = {false}
					loadingEnabled = {true}
					
					
					
				/>
		);
	}
}