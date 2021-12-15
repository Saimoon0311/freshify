import React from 'react';
import {StyleSheet} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  container: {
    marginTop: hp('2'),
    marginLeft: wp('7'),
  },
  topButtonMainContainer: {
    width: wp('65'),
    height: hp('5'),
    marginLeft: wp(1),
    flexDirection: 'row',
  },

  button: {
    width: wp(20),
    height: hp(4),
    borderRadius: 5,
    borderColor: color.textPrimaryColor,
    borderWidth: 1,
    marginRight: wp('2'),
  },
  buttonText: {
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: color.textPrimaryColor,
  },

  flatListMainContainer: {
    width: wp('88%'),
    height: hp('26%'),
    marginRight: 20,
    marginLeft: 3,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: 'red',
  },
  image: {
    alignSelf: 'center',
    height: hp('18'),
    marginTop: hp('4'),
  },
  textMainContainer: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('2.5'),
    color: '#434345',
  },
  textDescription: {
    fontFamily: 'Poppins',
    fontSize: hp('3'),
    color: '#434345',
  },
  textDescriptionContainer: {
    // height: hp('16'),
    // width: wp('85'),
    backgroundColor: 'white',
    width: wp('88%'),
    height: hp('16%'),
    marginRight: 20,
    marginLeft: 3,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    marginTop: hp('1'),
    elevation: 3,
  },
  cartButton: {
    marginTop: hp('12'),
    height: hp('7'),
    width: wp('85'),
    borderRadius: 5,
    backgroundColor: color.textPrimaryColor,
  },
  textCart: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: color.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('2'),
  },
});
