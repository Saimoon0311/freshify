import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../color';

export const BackHeader = ({text, icon}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} color={color.textPrimaryColor} size={35} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: hp('1'),
          marginRight: wp('10'),
        }}>
        <Text style={styles.textContainer}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp(2),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    height: hp(Platform?.OS == 'ios' ? '10' : '9'),
  },
  textContainer: {
    fontSize: 18,
    color: color.textSecondaryColor,
    fontFamily: 'Poppins-SemiBold',
  },
});
