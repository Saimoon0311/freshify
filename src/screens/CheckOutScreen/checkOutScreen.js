import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicatorBase,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ActivityIndicator} from 'react-native-paper';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {color} from '../../Reusedcomponents/color';

function checkOutScreen({navigation}) {
  const [topButton, setTopButton] = useState(1);
  const centerItem = () => {
    return (
      <>
        <Text style={styles.topTitle}>Bill Summary</Text>
      </>
    );
  };
  return (
    <View>
      <BackHeader text="Checkout" navigate={() => navigation.goBack()} />
      <Text style={styles.topTitle}>Select Delivery Schedule</Text>
      <View style={styles.topButtonView}>
        <TouchableOpacity
          onPress={() => setTopButton(1)}
          style={
            topButton == 1 ? styles.topActiveButton : styles.topInactiveButton
          }>
          <Text
            style={
              topButton == 1 ? styles.topActiveText : styles.topInactiveText
            }>
            Fresify Delivery
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTopButton(2)}
          style={
            topButton == 2 ? styles.topActiveButton : styles.topInactiveButton
          }>
          <Text
            style={
              topButton == 2 ? styles.topActiveText : styles.topInactiveText
            }>
            Schedule Delivery
          </Text>
        </TouchableOpacity>
      </View>
      {centerItem()}
    </View>
  );
}

export default checkOutScreen;
