import React, {Component} from 'react';
import {AppRegistry, StyleSheets,
        Text, View, TextInput, Button} from 'react-native';
import DatePicker from 'react-native-datepicker';

import api from '../../utils/api';
let startDate = new Date().toJSON().slice(0,10);
let bud = "0";

let destinationPlaceOptions = ["VIE", "BUR", "BOJ", "LCA", "PRG", "CPH", "EPU",
"JYV", "SVL", "ORY","CDG", "NCE", "SFX", "TXL",
"ATH", "UAK", "LIN", "CIA", "FCO", "KIV", "TGD",
"TIV", "AMS", "WAW", "MAD", "ARN", "BMA", "NYO",
"BRN", "BSL", "LHR"];
Array.prototype.randomDestination = function () {
  return this[Math.floor(Math.random() * this.length)];
};
let destination = destinationPlaceOptions.randomDestination();


class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      budget: bud,
      returnDate: startDate,
    };
    this.onButtonPress = this.onButtonPress.bind(this);

  }


  onButtonPress() {
    console.log(this.state);
    debugger;
    api.getFlights(destination, this.state.returnDate);
  };



  render() {
    console.log("flights: ", this.state.flights);
    return(
      <View>
        <Text>home</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(budget) => this.setState({budget})}
        value={this.state.budget}
      />
      <DatePicker
       style={{width: 200}}
       date={this.state.returnDate}
       mode="date"
       placeholder="select date"
       format="YYYY-MM-DD"
       minDate={startDate}
       maxDate="2017-12-31"
       confirmBtnText="Confirm"
       cancelBtnText="Cancel"
       customStyles={{
         dateIcon: {
           position: 'absolute',
           left: 0,
           top: 4,
           marginLeft: 0
         },
         dateInput: {
           marginLeft: 36
         }
       }}
       onDateChange={(date) => {this.setState({returnDate: date});}}
     />
     <Button
      onPress={this.onButtonPress}
      title="Find Flights"
      color="#841584"
    />
      </View>
    );
  }
}

export default Home;
