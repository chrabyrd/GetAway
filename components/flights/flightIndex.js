import React, { Component } from 'react';
import { uniqBy, sortBy } from 'lodash';
import {
  View,
  Text,
  Image,
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
      gotWeather: false,
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
    this.setState({
      visible: false
    });
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

  displayDay(date, image, temp) {
    return (
      <View style={styles.weather}>
        <Text style={styles.itinText}>{date}</Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: `http://openweathermap.org/img/w/${image}.png`}}
          />
        <Text style={styles.itinText}>{temp} °F</Text>
      </View>
    )
  }

  displayWeather(flight) {
    if(flight.weather) {
      let forecast = [];

      flight.weather.data.forEach(day => {
        let date = day.dt_txt.slice(5, 10);
        let icon = day.weather[0].icon;
        let temp = String(day.main.temp * (9 / 5) - 459.67).slice(0,2);
        forecast.push([date, icon, temp]);
      });

      return (
        <View style={styles.weatherIndexContainer}>
          { this.displayDay(forecast[0][0], forecast[0][1], forecast[0][2]) }
          { this.displayDay(forecast[1][0], forecast[1][1], forecast[1][2]) }
          { this.displayDay(forecast[2][0], forecast[2][1], forecast[2][2]) }
          { this.displayDay(forecast[3][0], forecast[3][1], forecast[3][2]) }
          { this.displayDay(forecast[4][0], forecast[4][1], forecast[4][2]) }
        </View>
      );
    }
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
            <View style={styles.placeContainer}>
              <Text style={styles.place}>
                {flight["Arrival City"]}
              </Text>
              <Text style={styles.place}>
                {flight["Arrival Country"]}
              </Text>
            </View>
            <Text style={styles.price}>${flight["Price"]}</Text>
          </View>

          <View style={styles.weatherContainer}>
            <View>{this.displayWeather(flight)}</View>
          </View>

          <View style={styles.itinContainer}>
            <View style={styles.itin}>
              <Text style={styles.itinText}>Leave</Text>
              <Text style={styles.itinText}>{flight["Departure Date"].slice(5, 10)}</Text>
            </View>
            <View style={styles.itin}>
              <Text style={styles.itinText}>From</Text>
              <Text style={styles.itinText}>{flight["Departure Airport"]}</Text>
            </View>
            <View style={styles.itin}>
              <Text style={styles.itinText}>To</Text>
              <Text style={styles.itinText}>{flight["Arrival Airport"]}</Text>
            </View>
            <View style={styles.itin}>
              <Text style={styles.itinText}>Return</Text>
              <Text style={styles.itinText}>{this.state.returnDate.slice(5, 10)}</Text>
            </View>
          </View>

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
          renderRow={flight => (this._renderFlightRow(flight))}
        />

        <Spinner visible={this.state.visible}
                textContent={"Loading..."}
                textStyle={{color: '#FFF'}}
        />

      <TouchableHighlight style={styles.backButton}
                          onPress={ () => this.searchLink() }>
        <Text style={styles.backText}>Back To Search</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  name: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
  },
  flightRow: {
    margin: 5,
    padding: 5,
    alignSelf: 'stretch',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  weatherContainer: {
    margin: 5,
    padding: 5,
  },
  weather: {
    margin: 1,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherIndexContainer: {
    justifyContent: 'space-around',
    marginTop: 2,
    paddingTop: 2,
    marginBottom: 2,
    paddingBottom: 2,
    flexDirection: 'row',
  },
  itinContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    alignItems: 'center',
  },
  itin: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  itinText: {
    margin: 5,
    marginTop: 0,
    padding: 5,
    paddingTop: 0,
    paddingBottom: 0,
    fontFamily: 'Trebuchet MS',
    color: 'slategray',
  },
  placeContainer: {
    flex: 1,
    margin: 5,
    padding: 5,
  },
  place: {
    flex: 1,
    margin: 5,
    padding: 5,
    paddingTop: 0,
    marginTop: 0,
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: 28,
    color: 'slategray',
  },
  price: {
    margin: 5,
    padding: 5,
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: 26,
    justifyContent: 'center',
    color: '#609CDA',
  },
  backButton: {
    margin: 5,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'rgba(96, 156, 218, .9)',
  },
  backText: {
    margin: 5,
    padding: 5,
    color: 'white',
    fontFamily: 'Trebuchet MS'
  }

});

export default FlightIndex;
