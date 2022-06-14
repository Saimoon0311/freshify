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
    alignSelf: 'center',
    marginRight: wp('2'),
    // alignItems: 'center',
  },
  name: {
    color: 'black',
    fontSize: hp('1.5'),
    textAlign: 'center',
    marginBottom: hp('0.5'),
    width: wp('15'),
    alignSelf: 'center',
  },
  categoryImage: {
    width: wp('19.6'),
    height: hp('7'),
    marginTop: hp('0.5'),
  },
  placeholderView: {
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'center',
    width: wp('100'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    marginLeft: wp('3'),
    marginBottom: hp('2'),
    fontSize: hp('2.3'),
    color: color.themeColorDark,
    fontWeight: '600',
  },
});
