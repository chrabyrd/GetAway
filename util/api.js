export const getIndex = (departAirport, leaveDate, returnDate) => (
  fetch(`http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/${departAirport}/anywhere/${leaveDate}/${returnDate}?apiKey=cr875483709897975877477133746240`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  })
);

export const redirect = (departAirport, destinationAirport, leaveDate, returnDate) => (
  fetch(`http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/${departAirport}/${destinationAirport}/${leaveDate}/2017-02-09?apiKey=cr875483709897975877477133746240`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  })
);

export const getNearestAirport = (lat, long) => (
  fetch(`https://airport.api.aero/airport/nearest/${lat}/${long}?user_key=fb581bc506e3d55d94b86fda81976922`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  })
);

export const getWeatherData = (city, country) => (
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&mode=json&appid=629c017fa0308ada3b879d36c74db2ae`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  })
);
