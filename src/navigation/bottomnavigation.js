import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Linking,
  Platform,
} from 'react-native';
import {screens} from '../screens';
import {color} from '../Reusedcomponents/color';

const Tab = createBottomTabNavigator();

function MybottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#E9691D',
        tabBarInactiveTintColor: '#512500',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarActiveBackgroundColor: '#FFDDC9',
        tabBarInactiveBackgroundColor: '#FFDDC9',
        tabBarStyle: {
          height: hp(Platform?.OS == 'ios' ? '10%' : '8%'),
          backgroundColor: '#FFDDC9',
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="home" color={color} size={hp('3')} />
          ),
          title: 'Home',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.HomeScreen}
      />

      <Tab.Screen
        name="catergoryScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="list" color={color} size={hp('3')} />
          ),
          tabBarIconStyle: {
            color: 'red',
          },
          title: 'Category',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.catergoryScreen}
      />
      <Tab.Screen
        name="offerScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="basket-sharp" color={color} size={hp('3')} />
          ),
          title: 'Offers',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.offerScreen}
      />
      <Tab.Screen
        name="cartScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="cart" color={color} size={hp('3')} />
          ),
          title: 'Offers',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.cartScreen}
      />
      <Tab.Screen
        name="acountScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="settings-sharp" color={color} size={hp('3')} />
          ),
          title: 'Setting',
          tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.acountScreen}
      />
    </Tab.Navigator>
  );
}
export default MybottomTabs;
