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
          <InputField inputText="Full Name*" placeholder="Full Name*" />
          <Text
            style={{
              marginBottom: heightPercentageToDP('2'),
              // fontWeight: 'bold',
              fontSize: hp('2.5'),
              fontFamily: 'Poppins-SemiBold',
              marginTop: hp('4'),
            }}>
            Enter your Phone Number
          </Text>
          <PhoneInput
            defaultCode="DM"
            layout="first"
            containerStyle={styles.input}
            codeTextStyle={{
              backgroundColor: 'transparent',
              height: hp('4'),
              justifyContent: 'center',
              textAlign: 'center',
            }}
            textContainerStyle={{
              borderRadius: 5,
              backgroundColor: 'transparent',
            }}
            textInputStyle={{
              backgroundColor: 'transparent',
              fontSize: hp('2.5'),
              height: hp('10'),
            }}
          />
          <InputField inputText="Email*" placeholder="Email*" />
          <InputField inputText="Password*" placeholder="Password*" />
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
