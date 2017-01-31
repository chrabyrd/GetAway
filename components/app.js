import React from 'react';
import { Text, View } from 'react-native';
import Home from './home/home';

const App = props => {
    return (
    <View className="page">
      <Text>Hello, world!</Text>
      
      <Home />
    </View>
  );
};

export default App;
