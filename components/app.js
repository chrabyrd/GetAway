import React, { Component } from 'react';
import { Text, View, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';
import HomeContainer from './home/homeContainer';
import FlightIndexContainer from './flights/flightIndexContainer';
import FlightDetailContainer from './flights/flightDetailContainer';
import configureStore from '../store/store';

class App extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Home':
        return (<HomeContainer navigator={navigator} />);
      case 'FlightIndex':
        return (<FlightIndexContainer navigator={navigator}  />);
      case 'FlightDetail':
        return (<FlightDetailContainer navigator={navigator}  />);
    }
  }

  render() {
    const store = configureStore();
    window.store = store;
    return (
      <Provider store={store}>
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: 'Home' }}
          renderScene={ this.renderScene }
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#9ad3de'
  }
});

export default App;
