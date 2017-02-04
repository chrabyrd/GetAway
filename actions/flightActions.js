import { getIndex, redirect } from '../util/api';
import { Linking } from 'react-native';

export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS';

const receiveFlights = flights => ({
  type: RECEIVE_FLIGHTS,
  flights
});

export const fetchFlights = date => dispatch => (
  getIndex(date)
  .then(data => data.json())
  .then(flights => dispatch(receiveFlights(flights)))
);

export const redirectToPage = (destinationAirport, leaveDate, returnDate) => (
  redirect(destinationAirport, leaveDate, returnDate).then(response => Linking.openURL(response.url))
);
