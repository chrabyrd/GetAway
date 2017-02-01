import merge from 'lodash/merge';
import { RECEIVE_FLIGHT } from '../actions/flightActions';

const flightIndexReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FLIGHT:
      return merge({}, state, { [action.flight.id]: action.flight });
    default:
      return state;
  }
};

export default flightIndexReducer;
