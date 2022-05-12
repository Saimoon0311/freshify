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

export default function confirmOrderScreen({navigation}) {
  const [showAlert, setShowAlert] = useState(false);
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
        cancelButtonTextStyle={{fontSize: hp('2.2%')}}
        confirmButtonTextStyle={{
          fontSize: hp('2.2%'),
        }}
        confirmButtonTextStyle={{
          textAlign: 'center',
          color: color.textPrimaryColor,
        }}
        cancelButtonTextStyle={{
          textAlign: 'center',
          color: color.textPrimaryColor,
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

  return (
    <>
      <BackHeader
        text="Confirm Your Order"
        navigate={() => navigation.goBack()}
      />
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
              paddingTop: hp('4'),
            }}>
            <BottomButton
              title={'Place Order'}
              onPress={() => resetNavigation()}
            />
            <View style={styles.bottomContainer}>
              <BottomButton
                title="Cancel Your Order"
                onPress={() => setShowAlert(true)}
              />
              <Text style={{...styles.bottomBoldText, marginTop: hp('2')}}>
                Order#110000
              </Text>
              <Text style={styles.bottomNormalText}>Delivering To</Text>
              <Text style={styles.bottomBoldText}>
                Gulshan-e-Iqbal, Karachi.
              </Text>
              <Text style={styles.bottomNormalText}>
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
              </View>
            </View>
          </View>
          {cancelContainer()}
        </ScrollView>
      </View>
    </>
  );
}
