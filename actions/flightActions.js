import { getIndex } from '../util/api';

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
  getIndex("2017-02-11")
  .then(data => data.json())
  .then(flights => dispatch(receiveFlights(flights)))
);

export const fetchFlight = () => dispatch => (
  ""
);
