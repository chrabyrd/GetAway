import React, { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         Navigator,
         TouchableHighlight,
         TextInput,
         Linking,
         Image
} from 'react-native';
import DatePicker from 'react-native-datepicker';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      flights: [],
      returnDate: "",
      nearestAirport: "",
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      this.props.fetchClosestAirport(lat, long);
    });
  }

  componentWillReceiveProps(newProps) {
    this.state.nearestAirport = newProps.nearestAirport.code;
  }

  handleSubmit() {
    // Potentially check consecutive days
    for(let i = 48; i < 72; i += 24) {
      let leaveDate = new Date();
      leaveDate.setHours(leaveDate.getHours() + i);
      leaveDate = leaveDate.toJSON().slice(0,10);

      this.props.fetchFlights(this.state.nearestAirport, leaveDate, this.state.returnDate);
    }

    this.props.receiveDate(this.state.returnDate);
    this.props.navigator.push({
      name: 'FlightIndex'
    });

  }

  render() {

    let minReturnDate = new Date();
    minReturnDate.setDate(minReturnDate.getDate() + 5);

    let maxReturnDate = new Date();
    maxReturnDate.setDate(maxReturnDate.getDate() + 120);

    let bool = this.state.returnDate !== "" ? false : true;
    let _buttonName = bool ? styles.buttonDisabled : styles.button;
    // let _buttonText = bool ? require('../../assets/images/getFlyingGrey.png') :
    //                           require('../../assets/images/getFlyingPurp.png');
  return (
      <Image style={styles.container}
        source={require('../../assets/images/clouds.jpg')}
        >
        <Text style={styles.logo}>GetAway</Text>
        <View style={styles.inputs}>
          <DatePicker
            style={styles.date}
            date={this.state.returnDate}
            mode="date"
            placeholder="Return Date"
            format="YYYY-MM-DD"
            minDate={minReturnDate}
            maxDate={maxReturnDate}
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
                marginLeft: 36,
                borderWidth: 0
              }
            }}
            onDateChange={(date) => {this.setState({returnDate: date});}}
          />
        </View>

        <TouchableHighlight style={_buttonName}
                            disabled={bool}
                            onPress={ () => this.handleSubmit() }>
          <Text style={styles.buttonText}>Get Flying</Text>
        </TouchableHighlight>
      </Image>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      width: null,
      height: null
    },
      inputs: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonDisabled: {
      margin: 5,
      width: 300,
      height: 100,
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 5,
      borderColor: '#63676d',
      backgroundColor: '#70747a',
      opacity: .5
    },
    button: {
      margin: 5,
      width: 300,
      height: 100,
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderBottomColor: '#538cc6',
      borderRightColor: '#538cc6',
      backgroundColor: '#609CDA',
      opacity: 1
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      // fontFamily: 'Optima'
      fontFamily: 'Trebuchet MS'
    },
    logo: {
      fontSize: 60,
      marginTop: 140,
      backgroundColor: 'transparent',
      color: 'white',
      fontFamily: 'Papyrus'
    },
    date: {
      backgroundColor: '#EAE7F2',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      // marginTop:  0,
      width: 200
    }
    // buttonTrue: {
    //   flex: .2,
    //   margin: 5,
    //   width: 375,
    //   padding: 0,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderWidth: 2,
    //   borderColor: '#dddae5',
    //   backgroundColor: '#EAE7F2'
    // },

    // BudgetView: {
    //   marginTop: 80,
    //   height: 40
    // },
    // budget: {
    //   padding: 0,
    //   textAlign: 'right',
    //   paddingRight: 10,
    //   backgroundColor: '#EAE7F2',
    //   flex: 1,
    //   justifyContent: 'center',
    //   borderColor: '#935AA4',
    //   borderWidth: 3,
    //   borderRadius: 10,
    //   width: 200
    // },

  });

export default Home;
