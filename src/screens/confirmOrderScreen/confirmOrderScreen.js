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

export default function confirmOrderScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <BackHeader
        text="Confirm Your Order"
        navigate={() => navigation.goBack()}
      />
      <View
        style={{
          width: wp('100'),
          height: hp('35'),
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'yellow',
        }}>
        <Image
          source={require('../../images/Group23.png')}
          style={{width: wp('30'), height: hp('20')}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: hp('4'),
            textAlign: 'center',
            color: 'black',
            // width: wp('43'),
          }}>
          Your Order {'\n'} has been received
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: 'white',
          paddingTop: hp('4'),
        }}>
        <BottomButton title={'Place Order'} />
        <View
          style={{marginTop: hp('3'), width: wp('80'), alignSelf: 'center'}}>
          <BottomButton title="Cancel Your Order" />
          <Text
            style={{
              fontSize: hp('2.5'),
              color: 'black',
              fontFamily: 'Poppins-SemiBold',
              marginTop: hp('2'),
            }}>
            Order#110000
          </Text>
          <Text
            style={{
              fontSize: hp('2.3'),
              color: 'gray',
              marginBottom: hp('1'),
              fontFamily: 'Poppins-Regular',
            }}>
            Delivering To
          </Text>
          <Text
            style={{
              fontSize: hp('2.5'),
              color: 'black',
              fontFamily: 'Poppins-SemiBold',
              marginBottom: hp('1'),
            }}>
            Gulshan-e-Iqbal, Karachi.
          </Text>
          <Text
            style={{
              fontSize: hp('2.3'),
              color: 'gray',
              marginBottom: hp('1'),
              fontFamily: 'Poppins-Regular',
            }}>
            Estiamated Delivery Time
          </Text>
          <Text
            style={{
              fontSize: hp('2.5'),
              color: color.textSecondaryColor,
              fontFamily: 'Poppins-SemiBold',
              marginBottom: hp('1'),
            }}>
            11:59 PM
          </Text>
          <Text
            style={{
              fontSize: hp('2.3'),
              color: 'black',
              marginBottom: hp('1'),
              fontFamily: 'Poppins-Regular',
            }}>
            11 Nov 2021
          </Text>
          <Divider
            style={{borderWidth: 1, borderColor: 'gray', marginBottom: hp('1')}}
          />
          <View style={{flexDirection: 'row'}}>
            <Text>Order Invoice</Text>
            {/* <Ionicons/> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
