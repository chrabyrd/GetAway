// CB PREVIOUS MERGE
// import React from 'react';
// import { Text, StyleSheet, View } from 'react-native';
// import { Provider } from 'react-redux';
// import FlightIndexContainer from './flights/flightIndexContainer';
// import FlightDetailContainer from './flights/flightDetailContainer';
// import configureStore from '../store/store';
//
// const App = () => {
//   const store = configureStore();
//   return (
//     <Provider store={store}>
//       <FlightIndexContainer />
//     </Provider>
//   );
// };

import React, { Component } from 'react';
import { Text, View, StyleSheet, Navigator, TouchableHighlight } from 'react-native';

import Home from './home/home';
import FlightIndex from './flights/flightIndex';
import FlightDetail from './flights/flightDetail';

class App extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Home':
        return (<Home navigator={navigator} />);
      case 'FlightIndex':
        return (<FlightIndex navigator={navigator}  />);
      case 'FlightDetail':
        return (<FlightDetail navigator={navigator}  />);
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Home' }}
        renderScene={ this.renderScene } />
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
