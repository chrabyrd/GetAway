import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  _navigate(){
    this.props.navigator.push({
      name: 'FlightIndex'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Search Page</Text>
          <TouchableHighlight style={styles.button} onPress={ () => this._navigate() }>
              <Text>Get Flying</Text>
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
export default Search;
