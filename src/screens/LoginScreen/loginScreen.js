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
          <Text
            style={{
              marginBottom: heightPercentageToDP('2'),
              // fontWeight: 'bold',
              fontSize: hp('2.5'),
              fontFamily: 'Poppins-SemiBold',
            }}>
            Enter your Phone Number
          </Text>
          {/* <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={styles.picker}>
              <Picker
                style={{
                  width: wp('29.9'),
                  justifyContent: 'center',
                }}>
                <Picker.Item value="+90" label="+92" />
              </Picker>
            </View>
            <TextInput
              style={styles.input}
              placeholder="301-2345678"
              placeholderTextColor="gray"
              keyboardType="number-pad"
            />
          </View> */}

          <PhoneInput
            defaultCode="DM"
            layout="first"
            containerStyle={styles.input}
            codeTextStyle={{
              backgroundColor: 'transparent',
              height: hp('4'),
            }}
            textContainerStyle={{
              borderRadius: 5,
              backgroundColor: 'transparent',
            }}
            textInputStyle={{
              backgroundColor: 'transparent',
              fontSize: hp('2.5'),
              height: hp('7'),
            }}
          />
          <InputField inputText="Password" placeholder="Password" />
          <TouchableOpacity style={styles.forgetText}>
            <Text style={{color: '#0088FF', fontFamily: 'Poppins-Regular'}}>
              Forget Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('MybottomTabs')}>
            <Text
              style={{
                color: 'white',
                fontSize: hp('2.8'),
                fontFamily: 'Poppins-Regular',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.loginButton,
              backgroundColor: 'transparent',
              borderColor: '#434345',
              borderWidth: 1,
            }}
            onPress={() => navigation.navigate('ProductDetail')}>
            <Text
              style={{
                color: '#434345',
                fontSize: hp('2.8'),
                fontFamily: 'Poppins-Regular',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
