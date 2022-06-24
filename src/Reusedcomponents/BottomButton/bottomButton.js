import React from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import {color} from '../color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BottomButton = props => {
  var width = props.width ? props.width : '85';
  let bgColor = props.bgColor ? props?.bgColor : color.textPrimaryColor;
  return (
    <TouchableOpacity
      onPress={() => props?.onPress()}
      style={{
        ...styles.cartButton,
        width: wp(width),
        backgroundColor: bgColor,
      }}>
      <Text style={styles.textCart}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  cartButton: {
    height: hp('7'),
    width: wp('85'),
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCart: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: color.white,
    fontFamily: 'Poppins-SemiBold',
    fontSize: hp('2'),
  },
});
