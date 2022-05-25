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
import AwesomeAlert from 'react-native-awesome-alerts';
import {CommonActions} from '@react-navigation/native';

export default function confirmOrderScreen({route, navigation}) {
  const [showAlert, setShowAlert] = useState(false);
  const item = route.params;
  const resetNavigation = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'MybottomTabs'}],
      }),
    );
  };
  const cancelContainer = () => {
    return (
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Confirmation"
        message="Sure? You Want To Cancel Your Order."
        contentContainerStyle={{
          width: wp('80%'),
          backgroundColor: 'white',
        }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={true}
        showCancelButton={true}
        showConfirmButton={true}
        confirmText="YES"
        cancelText="No"
        confirmButtonStyle={styles.buttonstyle}
        cancelButtonStyle={styles.buttonstyle}
        confirmButtonTextStyle={{
          textAlign: 'center',
          color: color.textPrimaryColor,
          fontSize: hp('2.2%'),
        }}
        cancelButtonTextStyle={{
          textAlign: 'center',
          color: color.textPrimaryColor,
          fontSize: hp('2.2%'),
        }}
        titleStyle={{color: color.textPrimaryColor, textAlign: 'center'}}
        messageStyle={{color: 'gray', textAlign: 'center'}}
        onConfirmPressed={() => {
          resetNavigation();
          setShowAlert(false);
        }}
        onCancelPressed={() => {
          setShowAlert(false);
        }}
      />
    );
  };
  const centerItem = () => {
    return (
      <>
        <View style={styles.box}>
          <View style={{...styles.headingView, marginBottom: hp('2')}}>
            <Text style={styles.topTitle2}>Bill Summary</Text>
          </View>

          {item.product_items.map(res => {
            return (
              <>
                <View style={styles.innerContainer}>
                  <View style={{...styles.textContainer, width: wp('43')}}>
                    <Text style={styles.innerText}>
                      {res?.product?.name} x {res?.quantity}
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
                <Divider
                  style={{
                    borderWidth: 1,
                    borderColor: '#E9E9E9',
                    marginBottom: hp('1'),
                  }}
                />
              </>
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
                Rs {item?.total}
              </Text>
            </View>
          </View>
          <Text style={styles.totalSubTitle}>(Inc. of taxes)</Text>
        </View>
      </>
    );
  };
  return (
    <>
      <BackHeader text="Order Details" navigate={() => resetNavigation()} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // backgroundColor: 'white',
            paddingBottom: hp('4'),
          }}>
          <View style={styles.upperContainer}>
            <Image
              source={require('../../images/Group23.png')}
              style={{width: wp('30'), height: hp('20')}}
              resizeMode="contain"
            />
            <Text style={styles.upperContainerText}>
              Your Order {'\n'} has been received
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
            }}>
            <View style={styles.bottomContainer}>
              <View style={styles.orderNumberView}>
                <Text style={{...styles.bottomBoldText, color: 'gray'}}>
                  Order#{item.id}
                </Text>
              </View>
              {/* <Text style={styles.bottomNormalText}>Delivering To</Text> */}
              <Text style={{...styles.bottomBoldText}}>
                We have received your order. The Freshify customer service agent
                will call you shortly for Order Confirmation.
              </Text>
              {centerItem()}
              {/* <Text style={styles.bottomNormalText}>
                Estiamated Delivery Time
              </Text>
              <Text
                style={{
                  ...styles.bottomBoldText,
                  color: color.textSecondaryColor,
                }}>
                11:59 PM
              </Text>
              <Text style={{...styles.bottomNormalText, color: 'black'}}>
                11 Nov 2021
              </Text>
              <Divider style={styles.divider} />
              <View style={styles.invoiceContainer}>
                <Text style={styles.invoiceIcon}>Order Invoice</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('orderInvoiceScreen')}>
                  <Ionicons name="arrow-forward" size={30} color="black" />
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
          {cancelContainer()}
        </ScrollView>
      </View>
    </>
  );
}
