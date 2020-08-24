import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="𝐻𝑜𝑚𝑒" component={ZipCodeScreen} 
        options={{
              headerTitleStyle: { alignSelf: 'center' , fontWeight: 'bold'},
              headerStyle: {backgroundColor : "#FDAFAB" } , headerTintColor: 'white' 
          }}/>
        <Stack.Screen name="Weather" component={WeatherScreen}
        options={{
          headerTitleStyle: {fontWeight: 'bold'},
          headerStyle: {backgroundColor : "#c0c5ff" } , headerTintColor: 'white' 
      }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


