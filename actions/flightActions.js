import { getIndex, redirect, getNearestAirport } from '../util/api';
import { Linking } from 'react-native';

export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS';
export const RECEIVE_AIRPORT = 'RECEIVE_AIRPORT';

const receiveFlights = flights => ({
  type: RECEIVE_FLIGHTS,
  flights
});

const receiveAirport = airport => ({
  type: RECEIVE_AIRPORT,
  airport
});

export const fetchFlights = (departAirport, leaveDate, returnDate) => dispatch => (
  getIndex(departAirport, leaveDate, returnDate)
  .then(data => data.json())
  .then(flights => dispatch(receiveFlights(flights)))
);

export const fetchClosestAirport = () => dispatch => (
  getNearestAirport()
  .then(res => res.json())
  .then(airport => dispatch(receiveAirport(airport.airports[0])))
);

export const redirectToPage = (destinationAirport, leaveDate, returnDate) => (
  redirect(destinationAirport, leaveDate, returnDate).then(response => Linking.openURL(response.url))
);
