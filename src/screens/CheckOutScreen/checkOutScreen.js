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
import {TextInput, Checkbox} from 'react-native-paper';

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
import * as Animatable from 'react-native-animatable';
import {showMessage} from 'react-native-flash-message';

function checkOutScreen({route, navigation}) {
  const item = route.params;
  var today = moment().format('DD MMM');
  var tomorrow = moment().add(1, 'days').format('DD MMM');
  var time = new Date();
  console.log(56, item);
  const [topButton, setTopButton] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState();
  const [value, setValue] = useState('one');
  const [scheduleDay, setSchedulaDay] = useState(0);
  const [isDate, setIsDate] = useState(false);
  const [buttonState, setButtonState] = useState(1);

  const [shippingFullName, setShippingFullName] = useState('');
  const [shippinggAddress, setShippingAddress] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingState, setShippingState] = useState('');
  const [shippingZipCode, setShippingZipCode] = useState('');
  const [shippingPhone, setShippingPhone] = useState('');

  const [billingFullName, setBillingFullName] = useState('');
  const [billinggAddress, setBillingAddress] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingState, setBillingState] = useState('');
  const [billingZipCode, setBillingZipCode] = useState('');
  const [billingPhone, setBillingPhone] = useState('');
  const [mobileNumber, setMobileNumber] = useState('+14707758326');
  const [orderDetails, setOrderDetails] = useState();
  const [note, setNote] = useState('');
  const [checkBox, setCheckBox] = useState('unchecked');

  const setdetails = () => {
    if (
      shippingFullName !== '' &&
      shippingFullName !== null &&
      shippingPhone !== '' &&
      shippingPhone !== null &&
      shippingCity !== '' &&
      shippingCity !== null &&
      shippinggAddress !== '' &&
      shippinggAddress !== null &&
      shippingZipCode !== '' &&
      shippingZipCode !== null &&
      shippingState !== '' &&
      shippingState !== null
    ) {
      setCheckBox('checked');
      setBillingFullName(shippingFullName);
      setBillingPhone(shippingPhone);
      setBillingState(shippingState);
      setBillingZipCode(shippingZipCode);
      setBillingCity(shippingCity);
      setBillingAddress(shippinggAddress);
    } else {
      showMessage({
        type: 'warning',
        icon: 'warning',
        message: 'Please first complete all shipping details',
        backgroundColor: '#E9691D',
      });
    }
  };

  const shippingAddress = () => {
    return (
      <>
        <ScrollView>
          <Text style={styles.topTitle2}>Shipping Details</Text>
          <View style={{...styles.box, paddingBottom: 30}}>
            <TextInput
              label="Full Name"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              value={shippingFullName}
              onChangeText={text => {
                setShippingFullName(text);
                // updatValue(text, 'username');
              }}
            />
            <TextInput
              label="Address:"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              value={shippinggAddress}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingAddress(text);
                // updatValue(text, 'address_one');
              }}
            />
            {/* <TextInput
              label="Address Two *"
              underlineColor="gray"
              theme={{colors: "green"}}
              style={styles.text}
              value={userDataLocal?.address_two}
              selectionColor="#FF7E33"
              onChangeText={text => {
                updatValue(text, 'address_two');
              }}
            /> */}
            <TextInput
              label="City *"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              keyboardType="default"
              value={shippingCity}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingCity(text);
                // updatValue(text, 'city');
              }}
            />
            <TextInput
              label="Country *"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              value={shippingState}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingState(text);
                // updatValue(text, 'country');
              }}
            />
            <TextInput
              label="Number"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              keyboardType="number-pad"
              value={shippingPhone}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingPhone(text);
                // updatValue(text, 'phone_number');
              }}
            />
            <TextInput
              label="ZipCode *"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              maxLength={7}
              keyboardType="numeric"
              value={shippingZipCode}
              // value={JSON?.stringify(userDataLocal?.zipcode)}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingZipCode(text);
                // updatValue(text, 'zipcode');
              }}
            />
            <TextInput
              label="Note"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              value={note}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setNote(text);
              }}
            />
          </View>
        </ScrollView>
      </>
    );
  };
  const billingAddress = () => {
    return (
      <>
        <Animatable.View
          // duration={2000}
          // onAnimationEnd={() => setStateBounce('')}
          animation={'bounceInLeft'}
          // animation={'tada'}
        >
          <Text style={styles.topTitle2}>Billing Address</Text>
          <View style={{...styles.box, paddingBottom: 30}}>
            <TextInput
              label="Full Name"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              value={billingFullName}
              onChangeText={text => {
                setBillingFullName(text);
              }}
            />
            <TextInput
              label="Address:"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              value={billinggAddress}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingAddress(text);
              }}
            />
            {/* <TextInput
              label="Address Two *"
              underlineColor="gray"
              theme={{colors: "green"}}
              style={styles.text}
              value={userDataLocal?.address_two}
              selectionColor="#FF7E33"
              onChangeText={text => {
                updatValue(text, 'address_two');
              }}
            /> */}
            <TextInput
              label="City *"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              keyboardType="default"
              value={billingCity}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingCity(text);
              }}
            />
            <TextInput
              label="Country *"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              value={billingState}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingState(text);
              }}
            />
            <TextInput
              label="Number"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              keyboardType="number-pad"
              value={billingPhone}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingPhone(text);
              }}
            />
            <TextInput
              label="ZipCode *"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              maxLength={7}
              keyboardType="numeric"
              value={billingZipCode}
              // value={JSON?.stringify(userDataLocal?.zipcode)}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingZipCode(text);
              }}
            />
            <TextInput
              label="Note"
              underlineColor="gray"
              theme={{colors: 'green'}}
              style={styles.text}
              editable={buttonState == 1 ? true : false}
              value={note}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setNote(text);
              }}
            />
          </View>
        </Animatable.View>
      </>
    );
  };

  function CheckBox({label, status, onPress}) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.checkBoxButtonContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={Platform.OS == 'ios' && styles.checkStyle}>
            <Checkbox
              status={status}
              uncheckedColor={'black'}
              color={color.themColorPrimary}
            />
          </View>
          <Text style={{fontWeight: 'bold'}}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const centerItem = () => {
    return (
      <>
        <Text style={styles.topTitle}>Bill Summary</Text>
        {shippingAddress()}
        <CheckBox
          label="Same as Shipping Address"
          status={checkBox}
          onPress={() => {
            checkBox == 'checked' ? setCheckBox('unchecked') : setdetails();
          }}
        />
        {checkBox == 'unchecked' && billingAddress()}
        {/* {billingAddress()} */}
        <View style={styles.billSummaryView}>
          {item.map(res => {
            return (
              <View style={styles.innerContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.innerText}>
                    {res?.products?.name} x {res?.quantity}
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.textContainer,
                    alignItems: 'flex-end',
                  }}>
                  <Text numberOfLines={1} style={styles.innerText}>
                    Rs {res?.rowtotal}
                  </Text>
                </View>
              </View>
            );
          })}
          <Divider
            style={{borderWidth: 1, borderColor: 'gray', marginBottom: hp('1')}}
          />
          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={{color: 'black', fontSize: hp('2')}}>
                Payment Total
              </Text>
            </View>
            <View style={{...styles.textContainer, alignItems: 'flex-end'}}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: hp('2'),
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
            width: wp('93'),
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
        <View style={styles.informationView}>
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
                  ? {...styles.topActiveText, fontSize: hp('1.6')}
                  : {...styles.topInactiveText, fontSize: hp('1.6')}
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
                  ? {...styles.topActiveText, fontSize: hp('1.6')}
                  : {...styles.topInactiveText, fontSize: hp('1.6')}
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
