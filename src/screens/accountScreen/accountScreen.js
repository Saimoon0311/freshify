import React from 'react';
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

export default function acountScreen() {
  return (
    <View>
      <LoginHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: hp('18'),
        }}>
        <Text style={styles.helloText}>Hello!</Text>
        <Text style={styles.username}>Nora</Text>
        <TouchableOpacity style={styles.touchContainer}>
          <View style={{marginLeft: wp('3'), marginRight: wp('3')}}>
            <FontAwesome5
              name="shopping-basket"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.containerText}>Order</Text>
          </View>
          <View style={{marginLeft: 'auto', marginRight: wp('3')}}>
            <FontAwesome5
              name="arrow-right"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchContainer}>
          <View style={{marginLeft: wp('3'), marginRight: wp('3')}}>
            <FontAwesome5
              name="wallet"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.containerText}>Wallet</Text>
          </View>
          <View style={{marginLeft: 'auto', marginRight: wp('3')}}>
            <FontAwesome5
              name="arrow-right"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchContainer}>
          <View style={{marginLeft: wp('3'), marginRight: wp('3')}}>
            <Ionicons
              name="location-sharp"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.containerText}>Address</Text>
          </View>
          <View style={{marginLeft: 'auto', marginRight: wp('3')}}>
            <FontAwesome5
              name="arrow-right"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.touchContainer, marginTop: hp('20')}}>
          <View style={{marginLeft: wp('3'), marginRight: wp('3')}}>
            <Ionicons
              name="notifications"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.containerText}>Notifications</Text>
          </View>
          <View style={{marginLeft: 'auto', marginRight: wp('3')}}>
            <FontAwesome5
              name="arrow-right"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchContainer}>
          <View style={{marginLeft: wp('3'), marginRight: wp('3')}}>
            <Ionicons
              name="help-circle"
              color={color.textPrimaryColor}
              size={20}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.containerText}>Help and Support</Text>
          </View>
          <View style={{marginLeft: 'auto', marginRight: wp('3')}}>
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
          <View style={{marginLeft: wp('3'), marginRight: wp('3')}}>
            <Ionicons name="help-circle" color={'white'} size={20} />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: hp('2.3'),
                fontFamily: 'Poppins-SemiBold',
                color: 'white',
              }}>
              Customer Care
            </Text>
          </View>
          <View style={{marginLeft: 'auto', marginRight: wp('3')}}>
            <FontAwesome5 name="arrow-right" color={'white'} size={20} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
