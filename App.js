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

function App({navigation}) {
  const [isVisible, setIsVisible] = useState(true);

  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };
  const time = () => {
    if (Platform?.OS == 'android') {
      return 5000;
    } else {
      return 0;
    }
  };
  useEffect(() => {
    (async () => {
      LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      LogBox.ignoreAllLogs(true);
    })();
    setTimeout(function () {
      Hide_Splash_Screen();
    }, time());
  }, []);
  let Splash_Screen = (
    <ImageBackground
      source={require('./src/images/NoPath.png')}
      style={styles.SplashScreen_RootView}>
      <View style={styles.SplashScreen_ChildView}>
        <Image
          source={require('./src/images/TF.png')}
          style={{width: 150, height: '100%', resizeMode: 'contain'}}
        />
      </View>
    </ImageBackground>
  );
  return (
    <>
      {isVisible === true ? (
        Platform?.OS == 'android' && Splash_Screen
      ) : (
        <NavigationContainer>
          <StackNavigatior />
        </NavigationContainer>
      )}
      <FlashMessage position="top" />
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
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
