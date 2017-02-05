import { RECEIVE_AIRPORT } from '../actions/flightActions';

const nearestAirportReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_AIRPORT:
      return action.airport;
    default:
      return state;
  }
};

export default nearestAirportReducer;
