import React from 'react';
import {StyleSheet} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  touchContainer: {
    //                 backgroundColor: 'red',
    marginRight: wp('3.6'),
    borderRadius: 10,
    marginBottom: hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: hp('0.5'),
    backgroundColor: 'white',
  },
  main: {
    width: wp('93'),
    alignSelf: 'center',
    alignItems: 'center',
  },
});
