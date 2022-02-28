import React from 'react';
import {StyleSheet, Platform} from 'react-native';
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
    paddingTop: hp('2'),
    // marginLeft: wp('7'),
  },
  topButtonMainContainer: {
    width: wp('20'),
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
  inactiveButton: {
    width: wp(20),
    height: hp(4),
    borderRadius: 5,
    borderColor: color.borderThirdColor,
    borderWidth: 1,
    marginRight: wp('2'),
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: color.textPrimaryColor,
  },
  inactiveButtonText: {
    fontFamily: 'Poppins-Regular',
    flex: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: color.borderThirdColor,
  },

  flatListMainContainer: {
    width: wp('95'),
    height: hp('35'),
    marginBottom: hp('2'),
    marginRight: wp('4'),
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginLeft: wp('5'),
  },
  textDescription: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('3'),
    color: '#434345',
  },
  textDescriptionContainer: {
    backgroundColor: 'white',
    width: wp('93%'),
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    marginTop: hp('1'),
    elevation: 3,
    padding: 10,
  },
  cartButton: {
    height: hp('7'),
    width: wp('85'),
    borderRadius: 5,
    backgroundColor: color.textPrimaryColor,
    position: 'absolute',
    bottom: Platform?.OS == 'ios' ? 110 : 20,
    alignSelf: 'center',
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
  bottomView: {
    position: 'absolute',
    bottom: Platform?.OS == 'ios' ? 110 : 20,
    alignSelf: 'center',
  },
});
