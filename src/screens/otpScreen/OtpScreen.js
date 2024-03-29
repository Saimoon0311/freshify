import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {LoginHeader} from '../../Reusedcomponents/loginHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../../Reusedcomponents/color';
import {styles} from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';

function OtpScreen() {
  return (
    <View style={styles.container}>
      <LoginHeader />
      <View style={styles.topTextContainer}>
        <Text style={styles.Text}>
          Please enter the Verification Code Sent to
        </Text>
        <Text style={styles.numTextContainer}>301-2345678</Text>
        <View style={styles.OtpContainer}>
          <OTPInputView
            style={styles.InputSize}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
        </View>
        <View style={styles.buttonMainContainer}>
          <TouchableOpacity>
            <View style={styles.buttonResendContainer}>
              <Text
                style={{
                  ...styles.button,
                  color: color.textSecondaryColor,
                  fontSize: 18,
                  paddingTop: hp(4),
                }}>
                Resend
              </Text>
              <Text
                style={{...styles.button, paddingBottom: hp(3), fontSize: 10}}>
                Resend in 29sec
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.buttonNextContainer]}>
              <Text
                style={{...styles.button, fontSize: 18, color: color.white}}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default OtpScreen;
