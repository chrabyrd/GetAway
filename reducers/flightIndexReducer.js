import { RECEIVE_FLIGHTS } from '../actions/flightActions';
import merge  from 'lodash/merge';

const flightIndexReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FLIGHTS:
      return merge({}, state, action.flights);
    default:
      return state;
  }
};

export default flightIndexReducer;
