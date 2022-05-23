import React, {useEffect, Component, useState} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  LogBox,
  ImageBackground,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './src/navigation/navigation';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/Redux/Reducer';
import {ApiPost} from './src/Config/helperFunction';
import {createCartIdUrl} from './src/Config/Url';
import types from './src/Redux/type';
import AppTwo from './AppTwo';

function App({navigation}) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AppTwo />
          <FlashMessage position="top" />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    // margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
