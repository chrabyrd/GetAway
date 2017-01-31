import React, { Component } from 'react';
import { Text, View, StyleSheet, Navigator, TouchableHighlight } from 'react-native';

import Search from './Search';
import FlightIndex from './FlightIndex';
import FlightShow from './FlightShow';

class App extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Search':
        return (<Search navigator={navigator} />);
      case 'FlightIndex':
        return (<FlightIndex navigator={navigator}  />);
      case 'FlightShow':
        return (<FlightShow navigator={navigator}  />);
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Search' }}
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
