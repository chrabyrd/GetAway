import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native';

class FlightDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flight: ""
    };
  }

  componentDidMount() {
    this.state.flight = this.props.fetchFlight();
    console.log(this.state);
    console.log(this.props.flightDetail);
  }

  _navigate(){
    this.props.navigator.push({
      name: 'FlightIndex',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Show Flight Details</Text>
          <TouchableHighlight style={styles.button} onPress={ () => this._navigate() }>
              <Text>Back To Flights</Text>
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

export default FlightDetail;
