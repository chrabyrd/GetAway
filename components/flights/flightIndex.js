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
import Spinner from 'react-native-loading-spinner-overlay';

class FlightIndex extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      quotes: [],
      places: "",
      returnDate: "",
      indexFlightInfo: "",
      dataSource: dataSource,
      weather: "",
      gotWeather: false
      visible: false
    };
  }

  componentDidMount() {
    this.setState({
      visible: true
    });
  }

  componentWillReceiveProps(newProps) {
    // Flights
    newProps.flightIndex.Quotes.forEach(quote => {
      this.state.quotes.push(quote);
    });
    this.state.places = newProps.flightIndex.Places;
    this.state.returnDate = newProps.returnDate;
    this.parseIndexDetails();
    // Render
    this.setState({ dataSource: this.state.dataSource.cloneWithRows( this.state.indexFlightInfo ) });
    // Weather
    this.getWeather();
    this.state.weather = newProps.weather;
    this.incorporateWeather();
  }

  getWeather() {
    if(!this.state.gotWeather) {
      this.state.indexFlightInfo.forEach(function(obj){
        this.props.getForecast(obj["Arrival City"], obj["Arrival Country"]);
      }, this);
    }
    this.state.gotWeather = true;
  }

  incorporateWeather() {
    this.state.indexFlightInfo.map(function(obj){
      let rObj = obj;
      rObj["weather"] = this.state.weather[obj["Arrival City"]];
      return rObj;
    }, this);
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
        let returnDate = this.state.quotes[i].InboundLeg.DepartureDate;
        let minPrice = this.state.quotes[i].MinPrice;
        let foundOrigin = this.state.places.find(findOrigin);
        let foundDestination = this.state.places.find(findDestination);

        if (foundOrigin && foundDestination) {
          info.push({
            "Departure City": foundOrigin.CityName,
            "Departure Country": foundOrigin.CountryName,
            "Departure Airport": foundOrigin.SkyscannerCode,
            "Arrival City": foundDestination.CityName,
            "Arrival Country": foundDestination.CountryName,
            "Arrival Airport": foundDestination.SkyscannerCode,
            "Departure Date": departDate.slice(0, 10),
            "Price": minPrice
          });
        }
      }
    }

    info = sortBy(info, "Price");
    this.state.indexFlightInfo = uniqBy(info, "Arrival Airport", "Departure");
  }

  handlePress(flight){
    this.props.redirectToPage(this.props.nearestAirport.code, flight["Arrival Airport"], flight["Departure Date"], this.state.returnDate);
  }

  searchLink() {
    this.setState({ visible: true });
    this.props.navigator.push({
      name: 'Home'
    });
  }

  _renderFlightRow(flight) {
    return (
      <TouchableHighlight onPress={ () => this.handlePress(flight) }>
        <View style={styles.flightRow}>
          <View style={styles.name}>
            <Text style={styles.place}>{flight["Arrival City"]}, {flight["Arrival Country"]}</Text>
            <Text style={styles.price}>${flight["Price"]}</Text>
          </View>
           <View style={styles.itin}>
             <Text style={styles.itinText}>{flight["Departure Airport"]}  ----->  {flight["Arrival Airport"]}  {flight["Departure Date"]}</Text>
             <Text style={styles.itinText}>{flight["Arrival Airport"]}  ----->  {flight["Departure Airport"]}  {flight["Return Date"]}</Text>
           </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.backButton}
                            onPress={ () => this.searchLink() }>
          <Text style={styles.backText}>Back To Search</Text>
        </TouchableHighlight>
        <ListView
          style={{marginTop: 40}}
          dataSource={this.state.dataSource}
          renderRow={flight => (this._renderFlightRow(flight))}
        />
        <Spinner visible={this.state.visible}
                textContent={"Loading..."}
                textStyle={{color: '#FFF'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  flightRow: {
    padding: 20,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc'
  },
  itin: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15

  },
  itinText: {
    fontFamily: 'Iowan Old Style',
    color: 'slategray'
  },
  place: {
    fontFamily: 'IowanOldStyle-Bold',
    color: 'slategray',
    paddingRight: 100
  },
  price: {
    fontFamily: 'IowanOldStyle-Bold',
    color: '#609CDA'
  },
  backButton: {
    marginTop: 40,
    backgroundColor: '#609CDA',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 4,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: '#538cc6',
    borderRightColor: '#538cc6',
  },
  backText: {
    color: 'white',
    fontFamily: 'Trebuchet MS'
  }

});

export default FlightIndex;
