import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {store} from '@store/index';
import {RootNavigator} from '@navigation/RootNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor="#28313F" />
        <RootNavigator />
        <Toast />
      </SafeAreaProvider>
    </Provider>
  );
}
