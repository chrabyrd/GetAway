import React, { Component } from 'react';
import { uniqBy, sortBy } from 'lodash';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  ListView
} from 'react-native';

class FlightIndex extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      quotes: "",
      places: "",
      returnDate: "",
      indexFlightInfo: "",
      dataSource: dataSource
    };
  }

  componentWillReceiveProps(newProps) {
    this.state.quotes = newProps.flightIndex.Quotes;
    this.state.places = newProps.flightIndex.Places;
    this.state.returnDate = newProps.returnDate;
    this.parseIndexDetails();
    this.setState({ dataSource: this.state.dataSource.cloneWithRows( this.state.indexFlightInfo ) });
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

    info = sortBy(info, "Price");
    this.state.indexFlightInfo = uniqBy(info, "Arrival Airport");
  }

  handlePress(flight){
    this.props.redirectToPage(flight["Arrival Airport"], flight["Departure Date"], this.state.returnDate);
  }

  _renderFlightRow(flight) {
    return (
      <TouchableHighlight onPress={ () => this.handlePress(flight) }>
        <View style={styles.flightRow}>
          <Text style={styles.place}>{flight["Arrival City"]}</Text>
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
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={flight => (this._renderFlightRow(flight))}
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
