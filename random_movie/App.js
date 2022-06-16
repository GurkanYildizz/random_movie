

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen'
import InfoScreen from './src/Screens/InfoScreen'
import { Dimensions } from 'react-native-windows';




const App: () => Node = () => {

  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen  name='Home' options={{headerShown:false,headerTitleAlign:"center",headerTitleStyle:{fontSize:Dimensions.get("screen").height/20,fontWeight:"900"}}} component={HomeScreen} />
        <Stack.Screen  name='Info' options={{headerShown:false}} component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default App;
