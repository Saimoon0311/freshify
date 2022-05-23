import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../color';

export const BackHeader = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: wp('15'),
          height: hp(Platform?.OS == 'ios' ? '10' : '9'),
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: Platform.OS == 'ios' ? hp('3') : hp('0'),
        }}>
        <TouchableOpacity onPress={() => props?.navigate()}>
          <Ionicons
            name={'arrow-back-sharp'}
            color={color.textPrimaryColor}
            size={hp('4')}
            style={{paddingTop: Platform.OS == 'ios' ? hp('1') : hp('0')}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.textContainer}>{props?.text}</Text>
      </View>
      <View
        style={{
          width: wp('15'),
          height: hp('5'),
        }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingLeft: wp(2),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    height: hp(Platform?.OS == 'ios' ? '10' : '9'),
    width: wp('100'),
  },
  textContainer: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS == 'ios' ? hp('4') : hp('0'),
    // marginRight: wp('10'),
  },
});
