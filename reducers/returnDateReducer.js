import { RECEIVE_DATE} from '../actions/dateActions';

const returnDateReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DATE:
      return action.date;
    default:
      return state;
  }
};

export default returnDateReducer;
