import {StyleSheet, Platform} from 'react-native';
import {color} from '../../Reusedcomponents/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  topTitle: {
    color: 'black',
    fontSize: hp('2.3'),
    fontFamily: 'Poppins-Regular',
    marginLeft: wp('5'),
    marginTop: hp('2'),
  },
  centerContainer: {
    width: wp('85'),
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerTitle: {
    fontSize: hp('2'),
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  boldText: {
    fontSize: hp('2.5'),
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: hp('2'),
  },
});
