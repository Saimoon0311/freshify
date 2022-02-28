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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import  from 'react-native-modal-datetime-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

function checkOutScreen({navigation}) {
  var today = moment().format('DD MMM');
  var tomorrow = moment().add(1, 'days').format('DD MMM');
  var time = new Date();

  const [topButton, setTopButton] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState();
  const [value, setValue] = useState('one');
  const [scheduleDay, setSchedulaDay] = useState(0);
  const [isDate, setIsDate] = useState(false);
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
  // var Date;
  const scheduleContainer = () => {
    return (
      <View>
        <View
          style={{
            ...styles.topButtonView,
            width: wp('80'),
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setSchedulaDay(1)}
            style={
              scheduleDay == 1
                ? {...styles.topActiveButton, width: wp('30')}
                : {...styles.topInactiveButton, width: wp('30')}
            }>
            <Text
              style={
                scheduleDay == 1
                  ? {...styles.topActiveText, fontSize: hp('2')}
                  : {...styles.topInactiveText, fontSize: hp('2')}
              }>
              Today -{today}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSchedulaDay(2)}
            style={
              scheduleDay == 2
                ? {...styles.topActiveButton, width: wp('30')}
                : {...styles.topInactiveButton, width: wp('30')}
            }>
            <Text
              style={
                scheduleDay == 2
                  ? {...styles.topActiveText, fontSize: hp('2')}
                  : {...styles.topInactiveText, fontSize: hp('2')}
              }>
              Tomorrow -{tomorrow}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsDate(true), console.log(195, isDate);
          }}
          style={{
            ...styles.topInactiveButton,
            width: wp('60'),
            alignSelf: 'center',
            marginTop: hp('2'),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: wp('7')}} />
          <Text
            style={{
              ...styles.topInactiveText,
              fontSize: hp('2'),
              textAlign: 'center',
              alignSelf: 'center',
            }}>
            Select a Time of Delivery
          </Text>
          <Ionicons
            name="chevron-down-sharp"
            color={'gray'}
            size={20}
            // style={{alignSelf: 'bas/'}}
          />
        </TouchableOpacity>
      </View>
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
        {topButton == 2 && scheduleContainer()}
        {centerItem()}
        {paymentInfoContainer()}
        {additionalInformation()}
        <BottomButton
          onPress={() => navigation.navigate('confirmOrderScreen')}
          title="Place Order"
        />
      </ScrollView>
      {isDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={'time'}
          is24Hour={false}
          display="default"
          onChange={e => {
            console.log(143, e), setIsDate(false);
          }}
          onTouchCancel={() => {
            console.log(276), setIsDate(false);
          }}
        />
      )}
    </View>
  );
}

export default checkOutScreen;
