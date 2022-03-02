import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';

export const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    marginVertical: hp('4'),
  },
  quantityContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: wp('20'),
    borderWidth: 1,
    borderColor: color.textPrimaryColor,
    borderRadius: 5,
  },
  operaMilkTextContainer: {
    fontSize: hp('2.0'),
    color: 'black',
    marginLeft: wp('4'),
    marginTop: hp('1'),
    fontFamily: 'Poppins-SemiBold',
  },
  priceContainer: {
    flexDirection: 'row',
    marginLeft: wp('4'),
    marginTop: hp('3'),
  },
  TotalMaincontainer: {
    width: wp('90'),
    height: hp('14'),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: hp('0.8'),
    borderRadius: 10,
    alignSelf: 'center',
  },
  processButton: {
    width: wp('90'),
    backgroundColor: color.textPrimaryColor,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: hp('5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  processText: {
    color: 'white',
    fontSize: hp('2.5'),
    fontFamily: 'Poppins-SemiBold',
  },
  totalText: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('2.5'),
  },
  bottomTotalText: {
    color: 'gray',
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('1.5'),
  },
});
