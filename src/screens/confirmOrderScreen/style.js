import {StyleSheet, Platform} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  upperContainer: {
    width: wp('100'),
    height: hp('35'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  upperContainerText: {
    fontSize: hp('4'),
    textAlign: 'center',
    color: 'black',
  },
  bottomContainer: {
    marginTop: hp('3'),
    width: wp('80'),
    alignSelf: 'center',
  },
  bottomBoldText: {
    fontSize: hp('2.5'),
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    // marginTop: hp('2'),
  },
  bottomNormalText: {
    fontSize: hp('2.3'),
    color: 'gray',
    marginBottom: hp('0.5'),
    fontFamily: 'Poppins-Regular',
  },
  divider: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: hp('1'),
  },
  invoiceContainer: {
    flexDirection: 'row',
    width: wp('80'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  invoiceIcon: {
    fontSize: hp('2.3'),
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  buttonstyle: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: color.textPrimaryColor,
  },
});
