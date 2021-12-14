import React from 'react';
import {StyleSheet} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: wp('100'),
    borderBottomWidth: 0.5,
    paddingBottom: hp('1.5'),
  },
  locationText: {
    width: wp('60'),
    alignItems: 'center',
  },
  headerText: {
    fontSize: hp('2'),
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.5,
    width: wp('90'),
    marginTop: hp('2'),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    height: hp('7'),
  },
  viewmore: {
    marginLeft: 'auto',
    marginRight: wp('6'),
    marginTop: hp('3'),
    marginBottom: hp('3'),
  },
});
