import { RECEIVE_FLIGHTS } from '../actions/flightActions';

const flightIndexReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FLIGHTS:
      return action.flights;
    default:
      return state;
  }
};

export default flightIndexReducer;
