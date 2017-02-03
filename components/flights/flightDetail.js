import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, Linking } from 'react-native';

class FlightDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minPrice: 381,
      outboundLeg: "SFO to North Korea",
      inboundLeg: "North Korea to SFO",
      quoteDateTime: "12:00",
      countryName: "Italy",
      cityName: "Milan"
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  _navigate(){
    this.props.navigator.push({
      name: 'FlightIndex',
    });
  }

  _openSS(){
    let url = `http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/SFO/LAX/2017-02-05/2017-02-08?apiKey=cr875483709897975877477133746240`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  render() {
    return (
      <View style={{backgroundColor: 'green', margin: 5, padding: 5, flex: 1, justifyContent:'center'}}>
        <View style={{backgroundColor: 'lightblue',margin: 5, padding: 5, flex: 1}}>
          <View style={{backgroundColor: 'gold',margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{backgroundColor: 'yellow', margin: 5, padding: 5}}>{this.state.cityName}, {this.state.countryName}</Text>
            <Text style={{backgroundColor: 'orange', margin: 5, padding: 5}}>${this.state.minPrice}</Text>
          </View>
          <View style={{backgroundColor: 'pink',margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{backgroundColor: 'turquoise', margin: 5, padding: 5}}>{this.state.outboundLeg}</Text>
            <Text style={{backgroundColor: 'peru', margin: 5, padding: 5}}>{this.state.inboundLeg}</Text>
          </View>
          <TouchableHighlight style={styles.button} onPress={ () => this._openSS() }>
              <Text>Book flight through skyscanner</Text>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.button} onPress={ () => this._navigate() }>
            <Text>Back To Flight Index</Text>
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
    flex: .2,
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'ghostwhite'
  }
});

export default FlightDetail;
