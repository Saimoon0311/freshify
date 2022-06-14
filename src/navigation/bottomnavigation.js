import React, {useEffect, useState} from 'react';
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
  Dimensions,
} from 'react-native';
import {screens} from '../screens';
import {color} from '../Reusedcomponents/color';
import {Badge} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {store} from '../Redux/Reducer';
import Svg, {Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();
function MybottomTabs() {
  const cartDataLength = store.getState().cartDataLength.cartDataLength;
  const [dummy, setDummy] = useState(1);
  useEffect(() => {
    setDummy(1);
  }, [cartDataLength]);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: color.textPrimaryColor,
        tabBarInactiveTintColor: '#919191',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarActiveBackgroundColor: 'transparent',
        tabBarInactiveBackgroundColor: 'transparent',
        tabBarVisibilityAnimationConfig: 'hide',
        tabBarStyle: {
          height: hp(Platform?.OS == 'ios' ? '9' : '7'),
          // backgroundColor: 'rgba(182,182,182,0.1)',
          // opacity: 0.7,
          width: wp('100'),
          shadowOffset: {width: 0, height: 0},
          elevation: 0,
        },
        tabBarBackground: () => {
          return (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={wp('100')}
              height={hp('10')}
              style={{
                position: 'absolute',
                bottom: Platform.OS == 'ios' ? hp('0') : hp('-2'),
                zIndex: 1,
              }}
              viewBox="0 0 429.292 85.134">
              <Path
                id="Path_179"
                data-name="Path 179"
                d="M1472.044,984c-15.208,0-29.043,8.5-36.893,21.951C1430.5,1013.918,1422.557,1021,1409,1021s-21.5-7.082-26.151-15.049C1375,992.5,1361.164,984,1345.956,984H1195v82.5h381.8c13.573,0,36.215,4.072,46.2,0,.718-9.4,0-35.376,0-47.706V984Z"
                transform="translate(-1194.5 -983.5)"
                fill="#fff"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="1"

                // strokeWidth={wp('100')}
              />
            </Svg>
          );
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="home" color={color} size={hp('3')} />
          ),
          title: `Home`,
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.HomeScreen}
      />

      <Tab.Screen
        name="cartScreen"
        options={{
          tabBarIcon: ({focused, size}) => (
            <View style={styles.cartCircle}>
              <View style={styles.cartInsideCircle}>
                <View
                  style={{
                    position: 'absolute',
                    left: wp('8'),
                    top: hp('-2.5'),
                    borderRadius: Math.round(
                      Dimensions.get('window').width +
                        Dimensions.get('window').height,
                    ),
                    width: Dimensions.get('window').width * 0.08,
                    height: Dimensions.get('window').width * 0.08,
                    backgroundColor: color.white,
                    borderColor: 'red',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Badge size={22} style={styles.badgeContainer}>
                    {cartDataLength?.length}
                  </Badge>
                </View>
                <Ionicons
                  name="cart-outline"
                  color={'white'}
                  size={hp('5')}
                  style={{alignSelf: 'center', transform: [{rotate: '-10deg'}]}}
                />
              </View>
            </View>
          ),
          title: '',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.cartScreen}
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
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.catergoryScreen}
      />
      {/* <Tab.Screen
        name="offerScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="basket-sharp" color={color} size={hp('3')} />
          ),
          title: 'Offers',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.offerScreen}
      /> */}
      {/* <Tab.Screen
        name="acountScreen"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons name="settings-sharp" color={color} size={hp('3')} />
          ),
          title: 'Setting',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp(Platform?.OS == 'ios' ? '0' : '1'),
          },
        }}
        component={screens.acountScreen}
      /> */}
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  cartCircle: {
    backgroundColor: color.textSecondaryColor,
    position: 'absolute',
    bottom: hp('1'),
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.18,
    height: Dimensions.get('screen').width * 0.18,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cartInsideCircle: {
    backgroundColor: color.textSecondaryColor,
    position: 'absolute',
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.15,
    height: Dimensions.get('screen').width * 0.15,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'Poppins-Bold',
    fontSize: hp('1.5'),
    backgroundColor: color.badgeColor,
  },
});
