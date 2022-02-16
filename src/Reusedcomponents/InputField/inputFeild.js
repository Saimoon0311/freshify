import {PROPERTY_TYPES} from '@babel/types';
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';

export const InputField = props => {
  return (
    <>
      <Text style={styles.inputtext}>{props?.inputText}</Text>
      <TextInput
        style={styles?.textinput}
        placeholder={props?.placeholder}
        placeholderTextColor="gray"
        keyboardType={props?.keyboardType}
      />
    </>
  );
};
