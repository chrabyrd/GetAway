import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const flightData = [{
    city: 'Milan',
    country: 'Italy',
    price: '$700'
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    price: '$550'
  },
  {
    city: 'London',
    country: 'England',
    price: '$500'
  }
];

const IndexRow = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {`${flightData.city} ${flightData.country}`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default IndexRow;
