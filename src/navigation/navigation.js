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
      initialRouteName="MybottomTabs">
      <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
      <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
      <Stack.Screen name="SignupScreen" component={screens.SignupScreen} />
      <Stack.Screen name="OtpScreen" component={screens.OtpScreen} />
      <Stack.Screen name="ProductDetail" component={screens.ProductDetail} />
      <Stack.Screen name="SubCategory" component={screens.SubCategory} />
      <Stack.Screen name="WalletScreen" component={screens.WalletScreen} />
      <Stack.Screen name="checkOutScreen" component={screens.checkOutScreen} />

      <Stack.Screen
        name="confirmOrderScreen"
        component={screens.confirmOrderScreen}
      />
      <Stack.Screen
        name="orderInvoiceScreen"
        component={screens.orderInvoiceScreen}
      />
    </Stack.Navigator>
  );
}
