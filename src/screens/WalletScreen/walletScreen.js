import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  NavigatorIOS,
} from 'react-native';
import {LoginHeader} from '../../Reusedcomponents/loginHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';

export default function WalletScreen({navigation}) {
  return (
    <View>
      <BackHeader
        text="Wallet"
        Iconname="arrow-back-sharp"
        navigate={() => navigation.goBack()}
      />
      <Text style={styles.header}>Cards</Text>
      <View style={styles.card}>
        <View style={styles.cardInsideContainer}>
          <Fontisto
            name="credit-card"
            size={15}
            color={color.textPrimaryColor}
          />
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>
              Add a card to enjoy seamless payment experience
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginBottom: hp('1.5'),
            marginTop: hp('1.5'),
            width: wp('20'),
          }}>
          <Text
            style={{
              color: color.textPrimaryColor,
              fontSize: hp('2'),
              marginLeft: wp('2.5'),
            }}>
            Add Card
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: wp('90'),
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 5,
          marginTop: hp('2'),
        }}>
        <Text
          style={{
            color: 'gray',
            fontSize: hp('2.4'),
            marginLeft: wp('2.5'),
            marginTop: hp('1.5'),
            marginBottom: hp('3'),
          }}>
          Transactions
        </Text>
        <Text
          style={{
            color: 'gray',
            fontSize: hp('2.4'),
            textAlign: 'center',
            marginBottom: hp('2'),
          }}>
          You have no transactions
        </Text>
      </View>
    </View>
  );
}
