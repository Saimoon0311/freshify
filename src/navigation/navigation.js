import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screens';
import MybottomTabs from './bottomnavigation';

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
      <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
      <Stack.Screen name="OtpScreen" component={screens.OtpScreen} />
      <Stack.Screen name="AddtoCart" component={screens.AddtoCart} />
      {/* <Stack.Screen name="HomeScreen" component={screens.HomeScreen} />
      <Stack.Screen name="ProductScreen" component={screens.ProductScreen} /> */}
    </Stack.Navigator>
  );
}
