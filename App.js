import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './src/navigation/navigation';

function App() {
  return (
    <NavigationContainer>
      <StackNavigatior />
    </NavigationContainer>
  );
}

export default App;
