import React from 'react';
import {View, Image, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const LoginHeader = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomWidth: 0.3,
        borderBottomColor: 'gray',
        justifyContent: 'center',
        paddingTop: Platform.OS == 'ios' ? hp('4') : hp('0'),
        alignContent: 'center',
      }}>
      <Image
        style={{
          width: wp('60'),
          height: hp('7'),
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        source={require('../images/header.png')}
      />
    </View>
  );
};
