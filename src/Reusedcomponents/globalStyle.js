import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from './color';

export const globalStyles = StyleSheet.create({
  globalInsideImage: {
    width: wp('35'),
    height: hp('15'),
    marginTop: hp('1'),
    marginBottom: hp('-1'),
    alignSelf: 'center',
    borderRadius: 10,
  },
});
