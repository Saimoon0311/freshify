import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  header: {
    color: 'black',
    fontSize: hp('2.5'),
    marginTop: hp('3'),
    marginLeft: wp('4.5'),
    marginBottom: hp('2'),
  },
  card: {
    width: wp('90'),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  cardInsideContainer: {
    flexDirection: 'row',
    marginTop: hp('2.5'),
    marginLeft: wp('2.5'),
  },
  cardTitleContainer: {
    marginLeft: wp('3.5'),
    marginTop: hp('-0.7'),
  },
  cardTitle: {
    color: 'black',
    fontSize: hp('2.5'),
  },
});
