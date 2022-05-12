import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: hp('5'),
    // fontWeight: 'bold',
    color: color.textPrimaryColor,
    marginTop: hp('5'),
    fontFamily: 'Poppins-SemiBold',
  },
  body: {
    width: wp('87'),
    alignSelf: 'center',
    marginTop: hp('5'),
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    width: wp('87'),
    //     marginLeft: 'auto',
    //     paddingLeft: wp('3'),
    borderRadius: 5,
    backgroundColor: 'transparent',
    height: hp('6'),
  },
  codeTextStyle: {
    backgroundColor: 'transparent',
    height: hp('4'),
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: Platform.OS == 'ios' ? hp('0.8') : hp('0'),
  },
  textContainerStyle: {
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  textInputStyle: {
    backgroundColor: 'transparent',
    fontSize: hp('2.5'),
    height: hp('7'),
    color: 'black',
  },
  forgetText: {
    marginLeft: 'auto',
    marginTop: hp('1'),
    color: '#0088FF',
  },
  termText: {
    textAlign: 'center',
    color: 'gray',
  },
  loginButton: {
    backgroundColor: color.textPrimaryColor,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    width: Platform.OS == 'ios' ? wp('60') : wp('50'),
    height: hp('6'),
    alignSelf: 'center',
    marginTop: hp('5'),
    alignItems: 'center',
    borderRadius: 5,
  },
  inputTitle: {
    marginBottom: hp('2'),
    fontSize: hp('2'),
    fontFamily: 'Poppins-SemiBold',
    color: 'gray',
    marginTop: hp('2'),
  },
  loginSignUpText: {
    color: '#434345',
    fontSize: Platform.OS == 'ios' ? hp('2.5') : hp('2.3'),
    fontFamily: 'Poppins-Regular',
  },
});
