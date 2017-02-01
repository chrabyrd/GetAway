import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import FlightIndexContainer from './flights/flightIndexContainer';
import FlightDetailContainer from './flights/flightDetailContainer';
import configureStore from '../store/store';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <FlightIndexContainer />
    </Provider>
  );
};
export default App;
