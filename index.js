import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NativeBaseProvider, Box} from 'native-base';

import App from './App';
import 'react-native-gesture-handler';

export default function Main() {
  return (
    <>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </>
  );
}

AppRegistry.registerComponent(appName, () => Main);
