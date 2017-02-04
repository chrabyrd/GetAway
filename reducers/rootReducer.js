import { combineReducers } from 'redux';
import flightIndexReducer from './flightIndexReducer';
import returnDateReducer from './returnDateReducer';

export default combineReducers({
  returnDate: returnDateReducer,
  flightIndex: flightIndexReducer,
});
