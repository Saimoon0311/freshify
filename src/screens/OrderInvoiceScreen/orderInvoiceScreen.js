import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicatorBase,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ActivityIndicator, Divider} from 'react-native-paper';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {color} from '../../Reusedcomponents/color';
import {Radio, NativeBaseProvider} from 'native-base';
import {RadioButton} from 'react-native-paper';
import {InputField} from '../../Reusedcomponents/InputField/inputFeild';
import BottomButton from '../../Reusedcomponents/BottomButton/bottomButton';

function orderInvoiceScreen({navigation}) {
  return (
    <View>
      <BackHeader text="Order Invoive" navigate={() => navigation.goBack()} />
      <Text style={styles.topTitle}>In Progress Orders</Text>
      <View style={styles.centerContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.innerTitle}>Order Number</Text>
          <TouchableOpacity>
            <Ionicons name="arrow-forward" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.boldText}>100005</Text>
        <Text style={styles.innerTitle}>Estimated Delivery Time</Text>
        <Text style={styles.boldText}>11:59 PM / 11 Nov 2021</Text>
      </View>
    </View>
  );
}

export default orderInvoiceScreen;
