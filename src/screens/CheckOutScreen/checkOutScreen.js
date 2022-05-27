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
import {Checkbox} from 'react-native-paper';
import {SkypeIndicator} from 'react-native-indicators';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import {ActivityIndicator, Divider} from 'react-native-paper';
import {BackHeader} from '../../Reusedcomponents/Header/BackHeader';
import {color} from '../../Reusedcomponents/color';
import {InputField} from '../../Reusedcomponents/InputField/inputFeild';
import BottomButton from '../../Reusedcomponents/BottomButton/bottomButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import * as Animatable from 'react-native-animatable';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {ApiPost} from '../../Config/helperFunction';
import {PlaceOrderUrl} from '../../Config/Url';
import types from '../../Redux/type';

function checkOutScreen({route, navigation}) {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {cartData} = useSelector(state => state.cartData);
  const dispatch = useDispatch();
  const item = route.params;
  var today = moment().format('DD MMM');
  var tomorrow = moment().add(1, 'days').format('DD MMM');
  var time = new Date();
  const [topButton, setTopButton] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState();
  const [value, setValue] = useState('one');
  const [scheduleDay, setSchedulaDay] = useState(0);
  const [isDate, setIsDate] = useState(false);
  const [buttonState, setButtonState] = useState(1);
  const [orderLoading, setOrderLoading] = useState(false);

  const [shippingFirstName, setShippingFirstName] = useState('');
  const [shippingLastName, setShippingLastName] = useState('');
  const [shippinggAddress, setShippingAddress] = useState('');
  const [shippingCity, setShippingCity] = useState('');
  const [shippingState, setShippingState] = useState('');
  const [shippingZipCode, setShippingZipCode] = useState('');
  const [shippingPhone, setShippingPhone] = useState('');
  const [shippingEmail, setShippingEmail] = useState('');

  const [billingFirstName, setBillingFirstName] = useState('');
  const [billing_notes, setBilling_notes] = useState('Optional');
  const [billingLastName, setBillingLastName] = useState('');
  const [billingEmail, setBillingEmail] = useState('');
  const [billinggAddress, setBillingAddress] = useState('');
  const [billingCity, setBillingCity] = useState('');
  const [billingState, setBillingState] = useState('');
  const [billingZipCode, setBillingZipCode] = useState('');
  const [billingPhone, setBillingPhone] = useState('');
  const [mobileNumber, setMobileNumber] = useState('+14707758326');
  const [orderDetails, setOrderDetails] = useState();
  const [note, setNote] = useState('');
  const [checkBox, setCheckBox] = useState('unchecked');
  const [isFocused, setIsFocused] = useState({
    shippingFirstName: false,
    shippingLastName: false,
    shippinggAddress: false,
    shippingPhone: false,
    shippingCity: false,
    shippingEmail: false,
    shippinggAddress: false,
    shippingZipCode: false,
    shippingState: false,
    billingFirstName: false,
    billingLastName: false,
    billingEmail: false,
    billinggAddress: false,
    billingCity: false,
    billingState: false,
    billingZipCode: false,
    billingPhone: false,
    billing_notes: false,
  });

  const setdetails = () => {
    if (
      shippingFirstName !== '' &&
      shippingFirstName !== null &&
      shippingLastName !== '' &&
      shippingLastName !== null &&
      shippingPhone !== '' &&
      shippingPhone !== null &&
      shippingCity !== '' &&
      shippingCity !== null &&
      shippinggAddress !== '' &&
      shippinggAddress !== null &&
      shippingZipCode !== '' &&
      shippingZipCode !== null &&
      shippingEmail !== '' &&
      shippingEmail !== null &&
      reg.test(shippingEmail) == true
    ) {
      setCheckBox('checked');
      setBillingLastName(shippingLastName);
      setBillingFirstName(shippingFirstName);
      setBillingPhone(shippingPhone);
      setBillingState(shippingState);
      setBillingZipCode(shippingZipCode);
      setBillingCity(shippingCity);
      setBillingAddress(shippinggAddress);
      setBillingEmail(shippingEmail);
    } else {
      showMessage({
        type: 'warning',
        icon: 'warning',
        message: 'Warning',
        description: 'Please first complete all shipping details',
        backgroundColor: color.textPrimaryColor,
      });
    }
  };
  const orderPlaceFun = () => {
    setOrderLoading(true);
    if (
      shippingFirstName !== '' &&
      shippingFirstName !== null &&
      shippingLastName !== '' &&
      shippingLastName !== null &&
      shippingPhone !== '' &&
      shippingPhone !== null &&
      shippingCity !== '' &&
      shippingCity !== null &&
      shippinggAddress !== '' &&
      shippinggAddress !== null &&
      shippingZipCode !== '' &&
      shippingZipCode !== null &&
      shippingEmail !== '' &&
      shippingEmail !== null &&
      reg.test(shippingEmail) == true
    ) {
      let body = JSON.stringify({
        billing_first_name:
          checkBox == 'checked' ? shippingFirstName : billingFirstName,
        billing_last_name:
          checkBox == 'checked' ? shippingLastName : billingLastName,
        billing_address:
          checkBox == 'checked' ? shippinggAddress : billinggAddress,
        billing_address_2: checkBox == 'checked' ? shippingState : billingState,
        billing_city: checkBox == 'checked' ? shippingCity : billingCity,
        billing_zip: checkBox == 'checked' ? shippingZipCode : billingZipCode,
        billing_phone: checkBox == 'checked' ? shippingPhone : billingPhone,
        billing_email: checkBox == 'checked' ? shippingEmail : billingEmail,
        billing_notes: billing_notes,
        shipping_first_name: shippingFirstName,
        shipping_last_name: shippingLastName,
        shipping_address: shippinggAddress,
        shipping_address_2: shippingState,
        shipping_city: shippingCity,
        shipping_zip: shippingZipCode,
        shipping_phone: shippingPhone,
        shippingEmail: shippingEmail,
        cart_id: cartData.id,
      });
      console.log(67890, body);
      ApiPost(PlaceOrderUrl, body, false).then(res => {
        console.log(7567890, res);
        if (res.success == true) {
          setOrderLoading(false);
          dispatch({
            type: types.DeleteCart,
          });
          navigation.navigate('confirmOrderScreen', res.data);
        } else if (res.success == false) {
          showMessage({
            type: 'warning',
            icon: 'warning',
            message: 'Warning',
            description: 'Something is wrong',
            backgroundColor: color.textPrimaryColor,
          });
        } else {
          setOrderLoading(false);
          console.log(123456789098765432, res);
          showMessage({
            type: 'warning',
            icon: 'warning',
            message: 'Warning',
            description: 'Network Request Failed.',
            backgroundColor: color.textPrimaryColor,
          });
        }
      });
    } else {
      setOrderLoading(false);

      showMessage({
        type: 'warning',
        icon: 'warning',
        message: 'Warning',
        description: 'Please first complete all shipping details',
        backgroundColor: color.textPrimaryColor,
      });
    }
  };
  // handlers
  const handleInputFocus = textinput => {
    setIsFocused({
      [textinput]: true,
    });
  };
  const handleInputBlur = textinput => {
    setIsFocused({
      [textinput]: false,
    });
  };
  const shippingAddress = () => {
    return (
      <>
        <ScrollView>
          <View style={{...styles.box, paddingBottom: 30}}>
            <View style={styles.headingView}>
              <Text style={styles.topTitle2}>Shipping Details</Text>
            </View>

            <InputField
              inputText="First Name *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('shippingFirstName')}
              onBlur={() => handleInputBlur('shippingFirstName')}
              isFocused={isFocused.shippingFirstName}
              value={shippingFirstName}
              onChangeText={text => {
                setShippingFirstName(text);
                // updatValue(text, 'username');
              }}
            />
            <InputField
              inputText="Last Name *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('shippingLastName')}
              onBlur={() => handleInputBlur('shippingLastName')}
              isFocused={isFocused.shippingLastName}
              value={shippingLastName}
              onChangeText={text => {
                setShippingLastName(text);
                // updatValue(text, 'username');
              }}
            />

            <InputField
              inputText="Email *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('shippingEmail')}
              onBlur={() => handleInputBlur('shippingEmail')}
              isFocused={isFocused.shippingEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              value={shippingEmail}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingEmail(text);
              }}
            />
            <InputField
              inputText="Address *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('shippinggAddress')}
              onBlur={() => handleInputBlur('shippinggAddress')}
              isFocused={isFocused.shippinggAddress}
              value={shippinggAddress}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingAddress(text);
              }}
            />
            <InputField
              inputText="City *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('shippingCity')}
              onBlur={() => handleInputBlur('shippingCity')}
              isFocused={isFocused.shippingCity}
              keyboardType="default"
              value={shippingCity}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingCity(text);
              }}
            />
            <InputField
              inputText="Apartment, suite, etc. (optional)"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('shippingState')}
              onBlur={() => handleInputBlur('shippingState')}
              isFocused={isFocused.shippingState}
              value={shippingState}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingState(text);
                // updatValue(text, 'country');
              }}
            />
            <InputField
              inputText="Phone Number *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('shippingPhone')}
              onBlur={() => handleInputBlur('shippingPhone')}
              isFocused={isFocused.shippingPhone}
              keyboardType="number-pad"
              value={shippingPhone}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setShippingPhone(text);
                // updatValue(text, 'phone_number');
              }}
            />
            <InputField
              inputText="ZipCode *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('shippingZipCode')}
              onBlur={() => handleInputBlur('shippingZipCode')}
              isFocused={isFocused.shippingZipCode}
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
          </View>
        </ScrollView>
      </>
    );
  };
  const billingAddress = () => {
    return (
      <>
        <Animatable.View animation={'bounceInLeft'}>
          <View style={{...styles.box, paddingBottom: 30}}>
            <View style={styles.headingView}>
              <Text style={styles.topTitle2}>Billing Details</Text>
            </View>

            <InputField
              inputText="First Name *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('billingFirstName')}
              onBlur={() => handleInputBlur('billingFirstName')}
              isFocused={isFocused.billingFirstName}
              value={billingFirstName}
              onChangeText={text => {
                setBillingFirstName(text);
              }}
            />
            <InputField
              inputText="Last Name *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('billingLastName')}
              onBlur={() => handleInputBlur('billingLastName')}
              isFocused={isFocused.billingLastName}
              value={billingLastName}
              onChangeText={text => {
                setBillingLastName(text);
              }}
            />

            <InputField
              inputText="Email *"
              width={wp('80')}
              editable={true}
              autoCapitalize="none"
              onFocus={() => handleInputFocus('billingEmail')}
              onBlur={() => handleInputBlur('billingEmail')}
              isFocused={isFocused.billingEmail}
              keyboardType="default"
              value={billingEmail}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingEmail(text);
              }}
            />
            <InputField
              inputText="Address *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('billinggAddress')}
              onBlur={() => handleInputBlur('billinggAddress')}
              isFocused={isFocused.billinggAddress}
              value={billinggAddress}
              keyboardType="email-address"
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingAddress(text);
              }}
            />
            {/* <InputField
              
              inputText="Address Two *"
              underlineColor="gray"
              theme={{colors: "green"}}
              
              value={userDataLocal?.address_two}
              selectionColor="#FF7E33"
              onChangeText={text => {
                updatValue(text, 'address_two');
              }}
            /> */}
            <InputField
              inputText="City *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('billingCity')}
              onBlur={() => handleInputBlur('billingCity')}
              isFocused={isFocused.billingCity}
              keyboardType="default"
              value={billingCity}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingCity(text);
              }}
            />
            <InputField
              inputText="Apartment, suite, etc. (optional)"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('billingState')}
              onBlur={() => handleInputBlur('billingState')}
              isFocused={isFocused}
              value={billingState}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingState(text);
              }}
            />
            <InputField
              inputText="Phone Number *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('billingPhone')}
              onBlur={() => handleInputBlur('billingPhone')}
              isFocused={isFocused.billingPhone}
              keyboardType="number-pad"
              value={billingPhone}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingPhone(text);
              }}
            />
            <InputField
              inputText="ZipCode *"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('billingZipCode')}
              onBlur={() => handleInputBlur('billingZipCode')}
              isFocused={isFocused.billingZipCode}
              maxLength={7}
              keyboardType="numeric"
              value={billingZipCode}
              // value={JSON?.stringify(userDataLocal?.zipcode)}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBillingZipCode(text);
              }}
            />
            <InputField
              inputText="Billing Note"
              width={wp('80')}
              editable={true}
              onFocus={() => handleInputFocus('billing_notes')}
              onBlur={() => handleInputBlur('billing_notes')}
              isFocused={isFocused.billing_notes}
              keyboardType="number-pad"
              value={billing_notes}
              selectionColor="#FF7E33"
              onChangeText={text => {
                setBilling_notes(text);
              }}
            />
          </View>
        </Animatable.View>
      </>
    );
  };

  function CheckBox({inputText, status, onPress}) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.checkBoxButtonContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={
              Platform.OS == 'ios' && {
                ...styles.checkStyle,
                borderColor:
                  checkBox == 'checked' ? color.textPrimaryColor : 'gray',
                borderWidth: 0.5,
                // borderWidth: checkBox == 'checked' ? 2 : 0.5,
              }
            }>
            <Checkbox
              status={status}
              uncheckedColor={'black'}
              color={color.textPrimaryColor}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: checkBox == 'checked' ? color.textPrimaryColor : 'gray',
            }}>
            {inputText}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  const centerItem = () => {
    return (
      <>
        <View style={styles.box}>
          <View style={{...styles.headingView, marginBottom: hp('2')}}>
            <Text style={styles.topTitle2}>Bill Summary</Text>
          </View>

          {item.items.map(res => {
            return (
              <View style={styles.innerContainer}>
                <View style={{...styles.textContainer, width: wp('43')}}>
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
            <View style={{...styles.textContainer, width: wp('43')}}>
              <Text style={{color: 'black', fontSize: hp('2')}}>
                Payment Total
              </Text>
            </View>
            <View
              style={{
                ...styles.textContainer,
                alignItems: 'flex-end',
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: hp('2'),
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Rs {item.total}
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
        <View style={{...styles.box, paddingBottom: hp('2')}}>
          <View style={{...styles.headingView, marginBottom: hp('2')}}>
            <Text style={styles.topTitle2}>Payment Information</Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Ionicons name="ios-cash-outline" size={hp('3')} color={'gray'} />
            <View style={{marginLeft: hp('2')}}>
              <Text
                style={{fontSize: hp('2'), color: 'black', fontWeight: 'bold'}}>
                Cash on delivery
              </Text>
              <Text style={{color: 'black', fontSize: hp('1.7')}}>
                Pay cash at the time of order delivery
              </Text>
            </View>
          </View>
          {/* <RadioButton.Group
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
          </RadioButton.Group> */}
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
        {/* <Text style={styles.topTitle}>Select Delivery Schedule</Text>
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
        </View> */}
        {topButton == 2 && scheduleContainer()}
        {shippingAddress()}
        <CheckBox
          inputText="Same as Shipping Address"
          status={checkBox}
          onPress={() => {
            checkBox == 'checked' ? setCheckBox('unchecked') : setdetails();
          }}
        />
        {checkBox == 'unchecked' && billingAddress()}
        {centerItem()}

        {paymentInfoContainer()}
        {/* {additionalInformation()} */}
        <View style={{marginTop: hp('3')}}>
          {orderLoading ? (
            <SkypeIndicator color={color.textPrimaryColor} size={hp('6')} />
          ) : (
            <BottomButton onPress={() => orderPlaceFun()} title="Place Order" />
          )}
        </View>
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
