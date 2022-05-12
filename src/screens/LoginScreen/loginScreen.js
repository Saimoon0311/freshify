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
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';

export default function loginScreen({navigation}) {
  return (
    <>
      <LoginHeader />
      <ScrollView>
        <Text style={styles.title}>Login</Text>
        <View style={styles.body}>
          <Text style={styles.inputTitle}>Enter your Phone Number</Text>

          <PhoneInput
            defaultCode="DM"
            layout="first"
            containerStyle={styles.input}
            codeTextStyle={styles.codeTextStyle}
            textContainerStyle={styles.textContainerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputField
            keyboardType="visible-password"
            inputText="Password"
            placeholder="Password"
          />
          <TouchableOpacity style={styles.forgetText}>
            <Text style={styles.forgetPassword}>Forget Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('MybottomTabs')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.loginButton,
              backgroundColor: 'transparent',
              borderColor: '#434345',
              borderWidth: 1,
              marginTop: hp('3'),
            }}
            onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={{...styles.loginButtonText, color: '#434345'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
