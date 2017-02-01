import { combineReducers } from 'redux';
import flightIndexReducer from './flightIndexReducer';
import flightDetailReducer from './flightDetailReducer';

export default combineReducers({
  flightIndex: flightIndexReducer,
  flightDetail: flightDetailReducer
});
