import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
    marginVertical: hp(2),
  },
  topButtonMainContainer: {
    width: wp('20'),
    height: hp('4'),
    marginLeft: wp('1'),
    flexDirection: 'row',
  },

  button: {
    width: wp('20'),
    height: hp('4'),
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
  categoryContainer: {
    marginLeft: wp('6'),
  },
  mainContainer: {
    width: wp('40'),
    backgroundColor: 'red',
    borderRadius: 15,
    marginLeft: wp('1'),
    //               backgroundColor: '#F3F5F7',
    //     shadowColor: '#ECECEC',
    //     shadowOffset: {width: 1, height: 3},
    //     shadowOpacity: 0.4,
    //     shadowRadius: 15,
    //     elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 0.2,
    elevation: hp('0.5'),
    // elevation: 10,
    marginTop: hp('1'),
    marginBottom: hp('1'),
    backgroundColor: 'white',
  },
  topText: {
    color: 'black',
    fontSize: hp('2'),
    marginLeft: wp('3'),
    marginTop: hp('1.5'),
  },
  priceText: {
    color: 'green',
    fontSize: hp('1.5'),
    marginLeft: wp('3'),
  },
  insideImage: {
    width: wp('23'),
    backgroundColor: 'yellow',
    height: hp('20'),
    marginTop: hp('2'),
    marginBottom: hp('2'),
    alignSelf: 'center',
  },
  addCartbutton: {
    marginLeft: 'auto',
    backgroundColor: color.textPrimaryColor,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: wp('10'),
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: wp('0.4'),
  },
});
