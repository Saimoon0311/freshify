import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const HomeBrandAllText = props => {
  return <Text style={styles.brandText}>{props?.name}</Text>;
};
