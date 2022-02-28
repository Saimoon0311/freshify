import {StyleSheet, Platform} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  topTitle: {
    color: color.textSecondaryColor,
    textAlign: 'center',
    marginTop: hp('2'),
    fontSize: hp('2.5'),
  },
  topButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp('100'),
    marginTop: hp('2'),
  },
  topActiveButton: {
    width: wp('40'),
    borderRadius: 5,
    borderWidth: 0.8,
    height: hp('5'),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.textPrimaryColor,
  },
  topInactiveButton: {
    width: wp('40'),
    borderRadius: 5,
    borderWidth: 0.8,
    height: hp('5'),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: color.borderThirdColor,
  },
  topActiveText: {
    color: color.textPrimaryColor,
    fontSize: hp('2.5'),
  },
  topInactiveText: {
    color: 'gray',
    fontSize: hp('2.5'),
  },
  billSummaryView: {
    width: wp('80'),
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  innerContainer: {
    flexDirection: 'row',
    width: wp('80'),
    marginBottom: hp('1'),
  },
  innerText: {color: '#434345', fontSize: hp('2.3')},
  totalSubTitle: {
    alignSelf: 'flex-end',
    fontSize: hp('1.5'),
    color: 'black',
  },
  textContainer: {width: wp('40')},
  radioText: {
    // marginTop: hp('0.9'),
    color: 'gray',
    marginLeft: wp('3'),
  },
  paymentRadioButtonView: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    alignItems: 'center',
    marginBottom: hp('-1.5'),
  },
  radioButtonText: {
    color: 'black',
    fontSize: hp('2.3'),
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
});
