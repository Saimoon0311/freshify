import React from 'react';
import {Dimensions, Platform, StyleSheet} from 'react-native';
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
    paddingBottom: hp('1'),
    marginTop: Platform.OS == 'ios' ? hp('3') : hp('0'),
  },
  locationText: {
    width: wp('60'),
    alignItems: 'center',
    marginTop: hp('2'),
  },
  headerText: {
    fontSize: hp('1.8'),
    color: 'black',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.5,
    width: wp('90'),
    marginTop: Platform.OS == 'ios' ? hp('6') : hp('2'),
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    height: hp('6'),
    marginBottom: hp('1.5'),
  },
  viewmore: {
    marginLeft: 'auto',
    marginRight: wp('6'),
    marginTop: hp('3'),
    marginBottom: hp('3'),
  },
  fab: {
    position: 'absolute',
    // margin: 16,
    right: wp('3'),
    bottom: hp('15'),
    textAlign: 'center',
  },
  searchInput: {
    color: 'gray',
    maxWidth: wp('80'),
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    paddingTop: Platform.OS == 'ios' ? hp('0') : hp('1'),
    // top: hp('1'),
    // marginTop: hp('1'),
  },
  fab: {
    // position: 'absolute',
    // // margin: 16,
    // right: 10,
    // bottom: 10,
    // left: wp('1'),
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    // alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.2,
    height: Dimensions.get('screen').width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: hp('0.5'),
    color: 'red',
  },
  headerArrowStyle: {
    width: wp('20'),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('5'),
    alignSelf: 'center',
  },
});
