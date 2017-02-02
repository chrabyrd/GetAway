import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native';

class FlightIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: ""
    };
  }

  componentDidMount() {
    this.props.fetchFlights();
  }

  _navigate(){
    this.props.navigator.push({
      name: 'FlightDetail'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>List of Flights</Text>
          <TouchableHighlight style={styles.button} onPress={ () => this._navigate() }>
            <Text>Choose Flight</Text>
          </TouchableHighlight>
      </View>
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

export default FlightIndex;
