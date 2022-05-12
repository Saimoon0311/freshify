import React from 'react';
import {StyleSheet} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  brandText: {
    color: 'black',
    fontSize: hp('2.5'),
    fontFamily: 'Poppins-SemiBold',
    marginLeft: wp('3'),
    marginTop: hp('1'),
    marginBottom: hp('1'),
  },
});
