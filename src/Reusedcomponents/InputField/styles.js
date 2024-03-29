import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';

export const styles = StyleSheet.create({
  textinput: {
    width: wp('87'),
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: wp('3'),
    marginTop: hp('2'),
    height: hp('6'),
    color: 'black',
  },
  inputtext: {
    marginTop: hp('2'),
    fontSize: hp('2'),
    fontFamily: 'Poppins-SemiBold',
    color: 'gray',
  },
});
