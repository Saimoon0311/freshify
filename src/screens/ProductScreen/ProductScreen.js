import * as React from 'react';
import {View, Text} from 'react-native';

export default function ProductScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('HomeScreen')}>
        Product Screen
      </Text>
    </View>
  );
}
