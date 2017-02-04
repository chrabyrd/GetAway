import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, TextInput, Linking} from 'react-native';
import DatePicker from 'react-native-datepicker';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      flights: [],
      budget: "",
      returnDate: ""
    };
  }

  handleSubmit() {
    this.props.fetchFlights(this.state.returnDate);
    this.props.receiveDate(this.state.returnDate);
    this.props.navigator.push({
      name: 'FlightIndex'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputs}>
        <Text style={styles.title}>Leave Now</Text>
        <TextInput
          placeholder="Budget"
          keyboardType = 'numeric'
          onChangeText={(budget) => this.setState({budget})}
          value={this.state.budget}
          style={styles.budget}
        />
        <DatePicker
          style={styles.date}
          date={this.state.returnDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate= "new Date().toJSON().slice(0,10);"
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
      <TouchableHighlight style={styles.button} onPress={ () => this.handleSubmit() }>
            <Text>Get Flying</Text>
        </TouchableHighlight>
      </View>
    </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      justifyContent: 'space-around'
    },
      inputs: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
      fontSize: 30,

    },
    button: {
      flex: .2,
      margin: 5,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      backgroundColor: 'ghostwhite'
    },
    budget: {
      marginTop: 80,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 175,
      marginLeft: 120
    },
    date: {
      marginTop: 40,
      width: 200
    }
  });

export default Home;
