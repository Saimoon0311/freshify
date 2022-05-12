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
    fontSize: hp('2.5'),
    color: color.textColor,
    fontFamily: 'Poppins-SemiBold',
  },
  topTextContainer: {
    width: wp('58'),
    marginTop: hp('7'),
    alignSelf: 'center',
  },
  numTextContainer: {
    textAlign: 'center',
    fontSize: hp('3'),
    color: color.textSecondaryColor,
    fontFamily: 'Poppins-SemiBold',
  },

  OtpContainer: {alignSelf: 'center'},
  InputSize: {width: wp('80%'), height: hp('25')},

  borderStyleHighLighted: {
    borderColor: color.textPrimaryColor,
  },

  underlineStyleBase: {
    width: wp('15'),
    height: hp('8'),
    borderWidth: 3,
    borderBottomWidth: 2,
    borderColor: color.borderThirdColor,
    fontSize: hp('3'),
    fontFamily: 'Poppins-SemiBold',
    color: color.textPrimaryColor,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom: hp('-0.01'),
    // marginTop: hp('5'),
  },

  underlineStyleHighLighted: {
    borderColor: color.textPrimaryColor,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 5,
  },
  buttonNextContainer: {
    width: wp('35'),
    height: hp('8'),
    // borderColor: color.textPrimaryColor,
    // borderWidth: 2,
    justifyContent: 'center',
    backgroundColor: color.textPrimaryColor,
    borderRadius: 7,
  },
  button: {
    color: color.textColor,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});
