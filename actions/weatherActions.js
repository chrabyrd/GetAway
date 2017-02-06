import { getWeatherData } from '../util/api';
import { remove } from 'lodash';

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';

const receiveForecast = forecast => ({
  type: RECEIVE_FORECAST,
  forecast
});

export const getForecast = (city, country) => dispatch => (
  getWeatherData(city, country)
    .then(data => data.json())
    .then(data => (
      remove(data.list, function(obj) {
        return obj.dt_txt.slice(11, 19) === "12:00:00";
      })
    ))
    .then(data => {
      let dataObj = {};
      dataObj["city"] = city;
      dataObj["data"] = data;
      return dataObj;
    })
    .then(forecast => dispatch(receiveForecast(forecast)))
);
