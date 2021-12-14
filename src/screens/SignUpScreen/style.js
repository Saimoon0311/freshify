import React from 'react';
import {StyleSheet} from 'react-native';
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
    height: hp('7'),
  },
  forgetText: {
    marginLeft: 'auto',
    marginTop: hp('5'),
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
    width: wp('60'),
    height: hp('6'),
    alignSelf: 'center',
    marginTop: hp('5'),
    alignItems: 'center',
    borderRadius: 5,
  },
});
