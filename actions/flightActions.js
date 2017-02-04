import { getIndex, redirect } from '../util/api';
import { Linking } from 'react-native';

export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS';
export const RECEIVE_FLIGHT = 'RECEIVE_FLIGHT';

const receiveFlights = flights => ({
  type: RECEIVE_FLIGHTS,
  flights
});

export const fetchFlights = (departAirport, leaveDate, returnDate) => dispatch => (
  getIndex(departAirport, leaveDate, returnDate)
  .then(data => data.json())
  .then(flights => dispatch(receiveFlights(flights)))
);

export const redirectToPage = (destinationAirport, leaveDate, returnDate) => (
  redirect(destinationAirport, leaveDate, returnDate).then(response => Linking.openURL(response.url))
);
