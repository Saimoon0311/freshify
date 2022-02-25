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

function checkOutScreen({navigation}) {
  const [topButton, setTopButton] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState();
  const [value, setValue] = useState('one');
  const centerItem = () => {
    return (
      <>
        <Text style={styles.topTitle}>Bill Summary</Text>
        <View style={styles.billSummaryView}>
          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.innerText}>Payment Total</Text>
            </View>
            <View style={{...styles.textContainer, alignItems: 'flex-end'}}>
              <Text style={styles.innerText}>Rs 150</Text>
            </View>
          </View>
          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.innerText}>Fresify Delivery</Text>
            </View>
            <View style={{...styles.textContainer, alignItems: 'flex-end'}}>
              <Text style={styles.innerText}>Rs 150</Text>
            </View>
          </View>
          <Divider
            style={{borderWidth: 1, borderColor: 'gray', marginBottom: hp('1')}}
          />
          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={{color: 'black', fontSize: hp('2.3')}}>
                Payment Total
              </Text>
            </View>
            <View style={{...styles.textContainer, alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontSize: hp('2.3'),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Rs 150
              </Text>
            </View>
          </View>
          <Text style={styles.totalSubTitle}>(Inc. of taxes)</Text>
        </View>
      </>
    );
  };
  const paymentInfoContainer = () => {
    return (
      <>
        <Text style={styles.topTitle}>Payment Information</Text>
        <View
          style={{
            width: wp('80'),
            alignSelf: 'center',
            marginTop: hp('1'),
          }}>
          <RadioButton.Group
            onValueChange={newValue => setPaymentInfo(newValue)}
            value={paymentInfo}>
            <View style={styles.paymentRadioButtonView}>
              <RadioButton
                color={color.textPrimaryColor}
                value="Cash On Delivery"
              />
              <Text style={styles.radioButtonText}>Cash On Delivery</Text>
            </View>
            <View style={styles.paymentRadioButtonView}>
              <RadioButton
                color={color.textPrimaryColor}
                value="Credit/Debit Card"
              />
              <Text style={styles.radioButtonText}>Credit/Debit Card</Text>
            </View>
            <View style={styles.paymentRadioButtonView}>
              <RadioButton
                color={color.textPrimaryColor}
                value="Direct Transfer"
              />
              <Text style={styles.radioButtonText}>Direct Transfer</Text>
            </View>
            <View style={styles.paymentRadioButtonView}>
              <RadioButton color={color.textPrimaryColor} value="Easypaisa" />
              <Text style={styles.radioButtonText}>Easypaisa</Text>
            </View>
          </RadioButton.Group>
        </View>
      </>
    );
  };
  const additionalInformation = () => {
    return (
      <>
        <Text style={styles.topTitle}>Additional Information</Text>
        <View
          style={{
            alignSelf: 'center',
            marginTop: hp('-5'),
            marginBottom: hp('2'),
          }}>
          <InputField placeholder="Delivery Instructions" />
        </View>
      </>
    );
  };
  return (
    <View style={{flex: 1}}>
      <BackHeader text="Checkout" navigate={() => navigation.goBack()} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: hp('10')}}>
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
        {paymentInfoContainer()}
        {additionalInformation()}
        <BottomButton
          navigate={() => navigation.navigate('confirmOrderScreen')}
          title="Place Order"
        />
      </ScrollView>
    </View>
  );
}

export default checkOutScreen;
