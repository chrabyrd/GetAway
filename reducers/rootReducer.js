import { combineReducers } from 'redux';
import flightIndexReducer from './flightIndexReducer';
import returnDateReducer from './returnDateReducer';
import nearestAirportReducer from './nearestAirportReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
  returnDate: returnDateReducer,
  flightIndex: flightIndexReducer,
  nearestAirport: nearestAirportReducer,
  weather: weatherReducer
});
