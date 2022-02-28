import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {LoginHeader} from '../../Reusedcomponents/loginHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomButton from '../../Reusedcomponents/BottomButton/bottomButton';

export default function acountScreen({navigation}) {
  const [isLogined, setIslogined] = useState(false);
  const ifLogin = () => {
    return (
      <>
        <Text style={styles.helloText}>Hello!</Text>
        <Text style={styles.username}>Nora</Text>
        <TouchableOpacity style={styles.touchContainer}>
          <View style={styles.leftIcon}>
            <FontAwesome5
              name="shopping-basket"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={styles.centerText}>
            <Text style={styles.containerText}>Order</Text>
          </View>
          <View style={styles.rightIcon}>
            <FontAwesome5
              name="arrow-right"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('WalletScreen')}
          style={styles.touchContainer}>
          <View style={styles.leftIcon}>
            <FontAwesome5
              name="wallet"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={styles.centerText}>
            <Text style={styles.containerText}>Wallet</Text>
          </View>
          <View style={styles.rightIcon}>
            <FontAwesome5
              name="arrow-right"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchContainer}>
          <View style={styles.leftIcon}>
            <Ionicons
              name="location-sharp"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={styles.centerText}>
            <Text style={styles.containerText}>Address</Text>
          </View>
          <View style={styles.rightIcon}>
            <FontAwesome5
              name="arrow-right"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
        </TouchableOpacity>
      </>
    );
  };
  const forLogin = () => {
    return (
      <View style={{marginBottom: hp('10')}}>
        <Text
          style={{
            ...styles.helloText,
            fontSize: hp('3'),
            marginBottom: hp('3'),
          }}>
          Welcome ! Nice to meet you
        </Text>
        <BottomButton
          width="80"
          title="Login/Signup"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    );
  };
  return (
    <View>
      <LoginHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: hp('18'),
        }}>
        {isLogined ? ifLogin() : forLogin()}
        <TouchableOpacity
          onPress={() => setIslogined(true)}
          style={{...styles.touchContainer}}>
          <View style={styles.leftIcon}>
            <Ionicons
              name="notifications"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={styles.centerText}>
            <Text style={styles.containerText}>Notifications</Text>
          </View>
          <View style={styles.rightIcon}>
            <FontAwesome5
              name="arrow-right"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIslogined(false)}
          style={styles.touchContainer}>
          <View style={styles.leftIcon}>
            <Ionicons
              name="help-circle"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={styles.centerText}>
            <Text style={styles.containerText}>Help and Support</Text>
          </View>
          <View style={styles.rightIcon}>
            <FontAwesome5
              name="arrow-right"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.touchContainer,
            backgroundColor: color.textPrimaryColor,
          }}>
          <View
            style={{
              marginLeft: wp('3'),
              marginRight: wp('3'),
            }}>
            <Ionicons name="help-circle" color={'white'} size={20} />
          </View>
          <View style={styles.centerText}>
            <Text
              style={{
                fontSize: hp('2.3'),
                fontFamily: 'Poppins-SemiBold',
                color: 'white',
              }}>
              Customer Care
            </Text>
          </View>
          <View style={styles.rightIcon}>
            <FontAwesome5 name="arrow-right" color={'white'} size={20} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
