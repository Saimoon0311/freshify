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
    backgroundColor: 'white',
    width: wp('85'),
    height: hp('25'),
    borderRadius: 18,
    borderColor: color.borderThirdColor,
    borderWidth: 1,
    marginTop: hp('1'),
  },
  image: {
    alignSelf: 'center',
  },
  textMainContainer: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#434345',
  },
  textDescription: {
    fontFamily: 'Poppins',
    fontSize: hp('3'),
    color: '#434345',
  },
  textDescriptionContainer: {
    height: hp('16'),
    width: wp('85'),
    backgroundColor: 'white',
    borderColor: color.borderThirdColor,
    borderWidth: 1,
    borderRadius: 18,
  },
  cartButton: {
    marginTop: hp('5'),
    height: hp('7'),
    width: wp('85'),
    borderRadius: 5,
    backgroundColor: color.textPrimaryColor,
  },
});
