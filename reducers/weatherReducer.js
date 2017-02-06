import { RECEIVE_FORECAST } from '../actions/weatherActions';
import merge  from 'lodash/merge';

const weatherReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FORECAST:
      return merge({}, state, {[action.forecast.city]: action.forecast});
    default:
      return state;
  }
};

export default weatherReducer;
