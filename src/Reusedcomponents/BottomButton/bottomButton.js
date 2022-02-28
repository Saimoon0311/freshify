import React from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import {color} from '../color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BottomButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props?.navigate()}
      style={styles.cartButton}>
      <Text style={styles.textCart}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  cartButton: {
    height: hp('7'),
    width: wp('85'),
    borderRadius: 5,
    backgroundColor: color.textPrimaryColor,
    // position: 'absolute',
    // bottom: Platform?.OS == 'ios' ? 110 : 20,
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
