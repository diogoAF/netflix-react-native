import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


import Home from './screen/Home';
import ProfileToEdit from './screen/ProfileToEdit';
import ChooseIcon from './screen/ChooseIcon';
import Camera from './screen/Camera';
import Tabs from './routes/Tabs';

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
				<Stack.Screen name="ProfileToEdit" component={ProfileToEdit} options={{headerShown: false}}/>
				<Stack.Screen name="ChooseIcon" component={ChooseIcon} options={{headerShown: false}}/>
				<Stack.Screen name="Camera" component={Camera} options={{headerShown: false}}/>
			</Stack.Navigator>
		</NavigationContainer>
		);
}

export default App
