import {StyleSheet} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  topTitle: {
    color: color.textPrimaryColor,
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
});
