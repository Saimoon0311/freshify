import {PROPERTY_TYPES} from '@babel/types';
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';

export const InputField = props => {
  let width = props?.width ? props.width : wp('87');
  let height = props?.height ? props.height : hp('6');
  return (
    <>
      <Text
        style={{
          ...styles.inputtext,
          color: props?.isFocused == true ? color.textPrimaryColor : 'gray',
        }}>
        {props?.inputText}
      </Text>
      <TextInput
        style={{
          ...styles.textinput,
          width: width,
          height: height,
          borderColor:
            props?.isFocused == true ? color.textPrimaryColor : 'black',
          borderWidth: props?.isFocused == true ? 2 : 1,
        }}
        placeholder={props?.placeholder}
        placeholderTextColor="gray"
        keyboardType={props?.keyboardType}
        editable={props?.editable}
        onChangeText={props?.onChangeText}
        value={props?.value}
        onFocus={props?.onFocus}
        onBlur={props?.onBlur}
        autoCapitalize={props?.autoCapitalize}
      />
    </>
  );
};
