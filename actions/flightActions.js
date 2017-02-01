// import * as FlightUtil from '../util/flightUtil';

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

export const fetchFlight = id => dispatch => (
  "Flight detail data goes here"
);
