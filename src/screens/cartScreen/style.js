import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';

export const styles = StyleSheet.create({
  maincomponent: {
    width: wp('90'),
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
  priceContainer: {
    flexDirection: 'row',
    marginLeft: wp('2'),
    marginTop: hp('4'),
  },
  TotalMaincontainer: {
    width: wp('90'),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
    fontSize: hp('2'),
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
  imageStyle: {
    width: wp('21'),
    height: hp('12'),
  },
  itemName: {
    fontSize: hp('2'),
    color: 'black',
    marginLeft: wp('2'),
  },
  innerMainView: {
    flexDirection: 'row',
    width: wp('63'),
    marginTop: hp('1'),
  },
  innerTotalView: {
    flexDirection: 'row',
    margin: wp('5'),
  },
});
