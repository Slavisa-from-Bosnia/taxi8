import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {AppRegistry, View, Text} from 'react-native';

export default class Label1 extends Component {
	render (){
		
		return(
				<View style = {{flex:1}}>	
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
		);
	}
}