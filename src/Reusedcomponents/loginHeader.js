import React from 'react';
import {View, Image} from 'react-native';
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
      }}>
      <Image
        style={{width: wp('49'), height: hp('7')}}
        source={require('../images/header.png')}
      />
    </View>
  );
};
