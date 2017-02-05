export const getIndex = (departAirport, leaveDate, returnDate) => (

  fetch(`http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/${departAirport}/anywhere/${leaveDate}/${returnDate}?apiKey=cr875483709897975877477133746240`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  })
);

export const redirect = (destinationAirport, leaveDate, returnDate) => (

  fetch(`http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/SFO/${destinationAirport}/${leaveDate}/${returnDate}?apiKey=cr875483709897975877477133746240`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  })
);

export const getNearestAirport = () => (
  fetch(`https://airport.api.aero/airport/nearest/37.75/-122.399012?user_key=fb581bc506e3d55d94b86fda81976922`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  })
);
