import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  ListView
} from 'react-native';

const flights = [{
    "Arrival City": "Portland",
    "Arrival Country": "United States",
    "Departure City": "San Francisco",
    "Departure Country": "United States",
    "Departure Date": "2017-02-05T00:00:00",
    "Price": 161
  },
  {
    "Arrival City": "Chicago",
    "Arrival Country": "United States",
    "Departure City": "San Francisco",
    "Departure Country": "United States",
    "Departure Date": "2017-02-05T00:00:00",
    "Price": 161
  },
  {
    "Arrival City": "PyeongYang",
    "Arrival Country": "United States",
    "Arrival Airport": "LAX",
    "Departure City": "San Francisco",
    "Departure Country": "United States",
    "Departure Date": "2017-02-05",
    "Price": 161
  }
];

class FlightIndex extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      quotes: "",
      places: "",
      returnDate: "",
      indexFlightInfo: "",
      flightsDataSource: ds.cloneWithRows(flights)
    };
  }

  componentWillReceiveProps(newProps) {
    this.state.quotes = newProps.flightIndex.Quotes;
    this.state.places = newProps.flightIndex.Places;
    this.state.returnDate = newProps.returnDate;
    this.parseIndexDetails();
  }

  parseIndexDetails() {
    let info = [];
    let origin;
    let destination;

    function findOrigin(place) {
      return place.PlaceId === origin;
    }

    function findDestination(place) {
      return place.PlaceId === destination;
    }

    for (let i = 0; i < this.state.quotes.length; i++) {
      if (this.state.quotes && this.state.places) {
        origin = this.state.quotes[i].InboundLeg.DestinationId;
        destination = this.state.quotes[i].OutboundLeg.DestinationId;
        let departDate = this.state.quotes[i].OutboundLeg.DepartureDate;
        let minPrice = this.state.quotes[i].MinPrice;
        info.push({
          "Departure City": this.state.places.find(findOrigin).CityName,
          "Departure Country": this.state.places.find(findOrigin).CountryName,
          "Departure Airport": this.state.places.find(findOrigin).SkyscannerCode,
          "Arrival City": this.state.places.find(findDestination).CityName,
          "Arrival Country": this.state.places.find(findDestination).CountryName,
          "Arrival Airport": this.state.places.find(findDestination).SkyscannerCode,
          "Departure Date": departDate.slice(0, 10),
          "Price": minPrice
        });
      }
    }

    this.state.indexFlightInfo = info;
  }

  handlePress(flight){
    this.props.redirectToPage(flight["Arrival Airport"], flight["Departure Date"], this.state.returnDate);
  }

  _renderFlightRow(flight) {
    return (
      <TouchableHighlight onPress={ () => this.handlePress(flight) }>
        <View style={styles.flightRow}>
          <Text style={styles.place}>{flight["Arrival City"]}, {flight["Arrival Country"]}</Text>
          <Text style={styles.price}>{flight["Price"]}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
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
