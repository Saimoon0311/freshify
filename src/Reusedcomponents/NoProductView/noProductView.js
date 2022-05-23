import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color} from '../color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function NoProductView() {
  return (
    <View style={styles.mainView}>
      <View style={styles.innerView}>
        <MaterialIcons
          name="search-off"
          color={color.themeColorDark}
          size={100}
        />
        <Text style={styles.noProductText}>No product found.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  noProductText: {
    color: color.themeColorDark,
    fontSize: hp('3'),
    fontWeight: 'bold',
  },
  innerView: {
    width: wp('90'),
    height: hp('30'),
    alignSelf: 'center',
    backgroundColor: color.themeColorlight,
    justifyContent: 'center',
    marginBottom: hp('50'),
    borderRadius: 20,
    alignItems: 'center',
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('13'),
  },
});
