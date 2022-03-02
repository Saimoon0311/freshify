import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {LoginHeader} from '../../Reusedcomponents/loginHeader';
import {styles} from './style';
import {Picker} from '@react-native-picker/picker';
import PhoneInput from 'react-native-phone-number-input';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {InputField} from '../../Reusedcomponents/InputField/inputFeild';

export default function Signup({navigation}) {
  return (
    <>
      <LoginHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp('10')}}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.body}>
          <InputField
            inputText="Full Name*"
            keyboardType="default"
            placeholder="Full Name*"
          />
          <Text style={styles.inputTitle}>Enter your Phone Number</Text>
          <PhoneInput
            defaultCode="DM"
            layout="first"
            containerStyle={styles.input}
            placeholderTextColor="red"
            codeTextStyle={styles.codeTextStyle}
            textContainerStyle={styles.textContainerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputField
            inputText="Email*"
            keyboardType="email-address"
            placeholder="Email*"
          />
          <InputField
            inputText="Password*"
            keyboardType="visible-password"
            placeholder="Password*"
          />
          <TouchableOpacity style={styles.forgetText}>
            <Text style={{color: '#0088FF', fontFamily: 'Poppins-Regular'}}>
              Forget Password?
            </Text>
          </TouchableOpacity>

          <Text style={styles.termText}>
            By clicking "Sign Up" you are agreeing to The Freshify's Terms &
            Conditions
          </Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('OtpScreen')}>
            <Text
              style={{
                color: 'white',
                fontSize: hp('2.8'),
                fontFamily: 'Poppins-Regular',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.loginButton,
              backgroundColor: 'transparent',
              borderColor: '#434345',
              borderWidth: 1,
            }}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={{
                color: '#434345',
                fontSize: hp('2.8'),
                fontFamily: 'Poppins-Regular',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
