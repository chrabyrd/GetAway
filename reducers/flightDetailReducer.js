import { RECEIVE_FLIGHT } from '../actions/flightActions';

const flightDetailReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FLIGHT:
      return action.flight;
    default:
      return state;
  }
};

export default flightDetailReducer;
