import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';

export const styles = StyleSheet.create({
  headText: {
    marginLeft: wp('5'),
    marginTop: hp('3'),
    fontFamily: 'Poppins-Regular',
    fontSize: hp('2.3'),
    color: 'black',
  },
  mainContainer: {
    width: wp('90'),
    flexDirection: 'row',
    alignSelf: 'center',
    // justifyContent: 'space-around',
    flexWrap: 'wrap',
    // display: 'flex',
    justifyContent: 'space-between',
  },
  touchContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: hp('0.5'),
    backgroundColor: 'white',
    marginBottom: hp('1.5'),
    // width: wp('28'),
    // height: hp('10'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
