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
  },
  mainContainer: {
    width: wp('40'),
    borderRadius: 15,
    marginLeft: wp('3'),
    shadowColor: '#000',
    elevation: hp('0.5'),
    marginTop: hp('1'),
    marginBottom: hp('1'),
    paddingBottom: hp('-10'),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: 'white',
  },
  topText: {
    color: 'black',
    fontSize: hp('2'),
    marginLeft: wp('3'),
    marginTop: hp('1.5'),
  },
  priceText: {
    color: color.textSecondaryColor,
    fontSize: hp('1.5'),
    marginLeft: wp('3'),
  },
  insideImage: {
    width: wp('28'),
    height: hp('15'),
    marginTop: hp('1'),
    marginBottom: hp('1'),
    alignSelf: 'center',
    borderRadius: 10,
  },
  addCartbutton: {
    marginLeft: 'auto',
    backgroundColor: color.textPrimaryColor,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: wp('10'),
    alignItems: 'center',
    marginBottom: hp('-2.5'),
    // justifyContent: 'center',
    // marginRight: wp('0.4'),
  },
});
