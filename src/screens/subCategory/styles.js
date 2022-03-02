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
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: color.textPrimaryColor,
  },
  inactiveButtonText: {
    fontFamily: 'Poppins-Regular',

    flex: 1,
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
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 0.2,
    elevation: hp('0.5'),
    // elevation: 10,
    marginTop: hp('1'),
    marginBottom: hp('1'),
    backgroundColor: 'white',
  },
  topText: {
    fontFamily: 'Poppins-SemiBold',
    color: color.textColor,
    fontWeight: 'bold',
    fontSize: hp('2.3'),
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
    width: wp('23'),
    height: hp('12'),
    alignSelf: 'center',
    marginBottom: hp('1'),
    marginTop: hp('0.5'),
  },
  addCartbutton: {
    marginLeft: 'auto',
    backgroundColor: color.textPrimaryColor,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: wp('10'),
    height: hp('5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
