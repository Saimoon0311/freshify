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
    // marginRight: wp('3.6'),
    marginLeft: wp('3.5'),
    borderRadius: 10,
    marginBottom: hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: hp('0.5'),
    backgroundColor: 'white',
    alignSelf: 'flex-start',
  },
  main: {
    width: wp('93'),
    // marginLeft: wp('3'),
    // alignSelf: 'center',
    // alignItems: 'center',
  },
});
