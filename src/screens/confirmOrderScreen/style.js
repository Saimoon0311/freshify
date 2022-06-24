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
    paddingTop: hp('3'),
    // width: wp('80'),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: color.backgroundColor,
  },
  bottomBoldText: {
    fontSize: hp('2.5'),
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    width: wp('85'),

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
  orderNumberView: {
    borderWidth: 2,
    borderColor: 'gray',
    marginBottom: hp('2'),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    width: wp('85'),
    alignSelf: 'center',
  },
  box: {
    padding: 13,
    margin: wp('7'),
    marginBottom: hp('1'),
    backgroundColor: 'white',
    //     backgroundColor: '#F3F5F7',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 1, height: 3},
    shadowRadius: 2,
    elevation: 5,
    // height: hp('30'),
    borderRadius: 10,
    width: wp('90'),
  },
  headingView: {
    // width: wp('70'),
    height: hp('7'),
    backgroundColor: color.textPrimaryColor,
    borderRadius: 10,
  },
  topTitle2: {
    color: 'white',
    marginTop: hp('2'),
    fontSize: hp('2.3'),
    textAlign: 'center',
    fontWeight: 'bold',
    // marginLeft: wp('7'),
  },
  innerContainer: {
    flexDirection: 'row',
    width: wp('45'),
    marginBottom: hp('1'),
  },
  textContainer: {width: wp('40')},
  radioText: {
    // marginTop: hp('0.9'),
    color: 'gray',
    marginLeft: wp('3'),
  },
  innerText: {color: '#434345', fontSize: hp('2')},
  totalSubTitle: {
    alignSelf: 'flex-end',
    fontSize: hp('1.5'),
    color: 'black',
  },
});
