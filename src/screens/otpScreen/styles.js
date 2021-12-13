import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Text: {
    textAlign: 'center',
    fontSize: 18,
    color: color.textSecondaryColor,
    fontFamily: 'Poppins-SemiBold',
  },
  topTextContainer: {
    width: wp('58'),
    marginTop: hp('7'),
    alignSelf: 'center',
  },
  numTextContainer: {
    textAlign: 'center',
    fontSize: 18,
    color: color.textPrimaryColor,
    fontFamily: 'Poppins-SemiBold',
  },

  OtpContainer: {alignSelf: 'center'},
  InputSize: {width: wp('80%'), height: hp('25')},

  borderStyleHighLighted: {
    borderColor: color.textPrimaryColor,
  },

  underlineStyleBase: {
    width: wp(10),
    height: hp(8),
    borderWidth: 3,
    borderBottomWidth: 2,
    borderColor: color.borderThirdColor,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: color.textPrimaryColor,
  },

  underlineStyleHighLighted: {
    borderColor: color.textPrimaryColor,
  },
  buttonMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    alignSelf: 'center',
  },
  buttonResendContainer: {
    width: wp(35),
    height: hp(8),
    borderColor: color.borderThirdColor,
    borderWidth: 2,
    justifyContent: 'center',

    // backgroundColor: '#0f0',
  },
  buttonNextContainer: {
    width: wp(35),
    height: hp(8),
    borderColor: color.borderThirdColor,
    borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: color.textPrimaryColor,
  },
  button: {
    color: color.borderColor,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
