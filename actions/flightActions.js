import api from '../util/api';

export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS';
export const RECEIVE_FLIGHT = 'RECEIVE_FLIGHT';

const receiveFlights = flights => ({
  type: RECEIVE_FLIGHTS,
  flights
});

const receiveFlight = flight => ({
  type: RECEIVE_FLIGHT,
  flight
});

export const fetchFlights = () => dispatch => (
  "Flight index data goes here"
);

export const fetchFlight = () => dispatch => (
  ""
);
