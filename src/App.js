import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import Navigation from './routes/navigation';
import 'react-native-gesture-handler';
import { Store } from './redux/store';

function App() {
  return (
    <Provider store={Store}>
    <Navigation />
    </Provider>
  );
}

export default registerRootComponent(App);
