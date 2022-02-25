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
      <BackHeader text="Wallet" navigate={() => navigation.goBack()} />
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
        <TouchableOpacity style={styles.addCartButton}>
          <Text style={styles.addCartButtonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transcationView}>
        <Text style={styles.transcationText}>Transactions</Text>
        <Text style={styles.transcationBottomText}>
          You have no transactions
        </Text>
      </View>
    </View>
  );
}
