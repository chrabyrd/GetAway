import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  ListView
} from 'react-native';

import IndexRow from './indexRow';

const flights = [{
    city: 'Milan',
    country: 'Italy',
    price: '$700'
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    price: '$550'
  },
  {
    city: 'London',
    country: 'England',
    price: '$500'
  }
];

class FlightIndex extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      flights: "",
      flightsDataSource: ds.cloneWithRows(flights)
    };
  }

  // componentDidMount() {
  //   this.state.flights = this.props.fetchFlights();
  //   console.log(this.state);
  // }

  _navigate(){
    this.props.navigator.push({
      name: 'FlightDetail'
    });
  }

  _renderFlightRow(flight) {
    return (
      <TouchableHighlight onPress={ () => this._navigate() }>
        <View style={styles.flightRow}>
          <Text style={styles.place}>{flight.city}, {flight.country}</Text>
          <Text style={styles.price}>{flight.price}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {

    console.log(this.props.flightIndex);
    return (
      <View style={styles.container}>

          <ListView
            style={{marginTop: 40}}
            dataSource={this.state.flightsDataSource}
            renderRow={(flight) => { return this._renderFlightRow(flight) ;}}
          />

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
  },
  flightRow: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  place: {
    // color: 'slategray'
    paddingRight: 100
  },
  price: {
    color: 'gray'
  }

});

export default FlightIndex;
