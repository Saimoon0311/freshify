import React from 'react';
import {StyleSheet} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  helloText: {
    marginTop: hp('3'),
    marginLeft: wp('5'),
    fontSize: hp('3'),
    color: 'black',
  },
  username: {
    fontFamily: 'Poppins-SemiBold',
    color: color.textPrimaryColor,
    // marginTop: hp(''),
    marginLeft: wp('5'),
    fontSize: hp('3'),
  },
  touchContainer: {
    flexDirection: 'row',
    width: wp('80'),
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    height: hp('6'),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: hp('1'),
    marginTop: hp('2'),
  },
  containerText: {
    fontSize: hp('2'),
    fontFamily: 'Poppins-SemiBold',
    color: 'gray',
  },
  leftIcon: {
    marginLeft: wp('3'),
    marginRight: wp('3'),
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    marginLeft: 'auto',
    marginRight: wp('3'),
  },
});
