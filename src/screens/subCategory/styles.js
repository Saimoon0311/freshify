import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
    marginVertical: hp(2),
  },
  topButtonMainContainerActive: {
    width: wp('20'),
    height: hp('4'),
    marginLeft: wp('1'),
    flexDirection: 'row',
  },

  button: {
    width: wp('20'),
    height: hp('4'),
    borderRadius: 5,
    borderColor: color.textPrimaryColor,
    borderWidth: 1,
    marginRight: wp('2'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveButton: {
    width: wp('20'),
    height: hp('4'),
    borderRadius: 5,
    borderColor: color.borderThirdColor,
    borderWidth: 1,
    marginRight: wp('2'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: color.textPrimaryColor,
  },
  inactiveButtonText: {
    fontFamily: 'Poppins-Regular',
    textAlignVertical: 'center',
    textAlign: 'center',
    color: color.borderThirdColor,
  },
  categoryContainer: {
    marginLeft: wp('6'),
  },
  mainContainer: {
    width: wp('40'),
    backgroundColor: 'red',
    borderRadius: 15,
    marginLeft: wp('1'),
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 0.6,
    elevation: hp('0.5'),
    marginTop: hp('1'),
    marginBottom: hp('1'),
    backgroundColor: 'white',
  },
  topText: {
    fontFamily: 'Poppins-SemiBold',
    color: color.textColor,
    fontWeight: 'bold',
    fontSize: hp('2'),
    marginLeft: wp('3'),
    marginTop: hp('1.5'),
  },
  priceText: {
    fontFamily: 'Poppins-Regular',
    color: color.textSecondaryColor,
    fontWeight: 'bold',
    fontSize: hp('1.7'),
    marginLeft: wp('3'),
    top: hp('2'),
  },
  mlText: {
    fontFamily: 'Poppins-Regular',
    color: color.textColor,
    fontSize: hp('1.7'),
    marginLeft: wp('3'),
    top: hp('1.5'),
  },
  insideImage: {
    width: wp('28'),
    height: hp('15'),
    marginTop: hp('1'),
    marginBottom: hp('-1'),
    alignSelf: 'center',
    borderRadius: 10,
  },
  addCartbutton: {
    marginLeft: 'auto',
    backgroundColor: color.textPrimaryColor,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: wp('12'),
    height: hp('4'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
