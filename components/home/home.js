import React, {Component} from 'react';
import {AppRegistry, StyleSheets, Text, View} from 'react-native';

import api from '../../utils/api';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      flights: []
    };
  }
    // componentWillMount(){
    //   api.getFlights.then((res) => {
    //     this.setState({
    //       flights: res
    //     });
    //   });
    // };


  render() {
    console.log("flights: ", this.state.flights);
    return(
      <View>
        <Text>home</Text>
      </View>
    );
  }
}

export default Home;
