import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

class FlightDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flight: ""
    };
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am the flight details.
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

export default FlightDetail;
