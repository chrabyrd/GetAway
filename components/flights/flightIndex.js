import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

class FlightIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: ""
    };
  }

  componentDidMount() {
    this.state.flights = this.props.fetchFlights();
    console.log(this.state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am the flight index.
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default FlightIndex;
