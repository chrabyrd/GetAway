import { getIndex, redirect } from '../util/api';
import { Linking } from 'react-native';

export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS';

const receiveFlights = flights => ({
  type: RECEIVE_FLIGHTS,
  flights
});

<<<<<<< HEAD
const receiveFlight = flight => ({
  type: RECEIVE_FLIGHT,
  flight
});


export const fetchFlights = (date) => dispatch => (
=======
export const fetchFlights = date => dispatch => (
>>>>>>> d7e2f8a6e3ccd8279344c6cc1b0c16b5e9d370e9
  getIndex(date)
  .then(data => data.json())
  .then(flights => dispatch(receiveFlights(flights)))
);

export const redirectToPage = (destinationAirport, leaveDate, returnDate) => (
  redirect(destinationAirport, leaveDate, returnDate).then(response => Linking.openURL(response.url))
);
