import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens';
const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_left',
        headerShown: false,
      }}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
      <Stack.Screen name="SignupScreen" component={screens.SignupScreen} />
      <Stack.Screen name="HomeScreen" component={screens.HomeScreen} />
      <Stack.Screen name="ProductScreen" component={screens.ProductScreen} />
    </Stack.Navigator>
  );
}
