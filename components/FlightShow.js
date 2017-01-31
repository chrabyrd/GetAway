import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native';

class FlightShow extends Component {
  constructor(props) {
    super(props);
  }

// Change latter to pop instead (don't request flights again)
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
export default FlightShow;

// <TouchableHighlight onPress={this.props.onBack}>
//   <Text>Go Back To Search</Text>
// </TouchableHighlight>
