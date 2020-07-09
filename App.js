import React from 'react';
import {AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import ProfileToEdit from './screen/ProfileToEdit';
import ChooseIcon from './screen/ChooseIcon';
import CameraController from './screen/CameraController';
import Tabs from './routes/Tabs';
import {ProfileContext} from './context/ProfileContext';

export default class App extends React.Component {
	constructor(props){
		super(props);

		AsyncStorage.getItem('profile').then((result) => {
			this.setState({user: result});
		});

		this.changeProfile = this.changeProfile.bind(this);

		this.state = {
			user: null,
			changeProfile: this.changeProfile,
		};
	}

	changeProfile(newProfile){
		console.log('newProfile', newProfile.name);
		this.setState({user: newProfile.name});
	}

	render() {
		return (
			<ProfileContext.Provider value={this.state}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
						<Stack.Screen name="ProfileToEdit" component={ProfileToEdit} options={{headerShown: false}}/>
						<Stack.Screen name="ChooseIcon" component={ChooseIcon} options={{headerShown: false}}/>
						<Stack.Screen name="CameraController" component={CameraController} options={{headerShown: false}}/>
					</Stack.Navigator>
				</NavigationContainer>
			</ProfileContext.Provider>
			);
	}
}

/*
const App = () => {
	return (
		<ProfileContext.Provider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
					<Stack.Screen name="ProfileToEdit" component={ProfileToEdit} options={{headerShown: false}}/>
					<Stack.Screen name="ChooseIcon" component={ChooseIcon} options={{headerShown: false}}/>
					<Stack.Screen name="CameraController" component={CameraController} options={{headerShown: false}}/>
				</Stack.Navigator>
			</NavigationContainer>
		</ProfileContext.Provider>
		);
}

export default App

*/