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
    marginBottom: hp('0.5'),
  },
  mainContainer: {
    width: wp('90'),
    flexDirection: 'row',
    alignSelf: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  touchContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: hp('0.5'),
    backgroundColor: 'white',
    marginBottom: hp('1.5'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  imageStyle: {
    width: wp('28'),
    height: hp('7'),
    marginTop: hp('1'),
    borderRadius: 20,
  },
});
