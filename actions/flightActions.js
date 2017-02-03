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

<<<<<<< HEAD
export const fetchFlights = () => dispatch => (
  getIndex("2017-02-08")
=======
export const fetchFlights = (date) => dispatch => (
  getIndex(date)
>>>>>>> d4a55aaba22076b073656b4319d77ea3f404cf07
  .then(data => data.json())
  .then(flights => dispatch(receiveFlights(flights)))
);

export const fetchFlight = () => dispatch => (
  ""
);
