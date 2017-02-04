export const getIndex = (departAirport, leaveDate, returnDate) => {

  return fetch(`http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/${departAirport}/anywhere/${leaveDate}/${returnDate}?apiKey=cr875483709897975877477133746240`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  });
};

export const redirect = (destinationAirport, leaveDate, returnDate) => {

  return fetch(`http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/SFO/${destinationAirport}/${leaveDate}/${returnDate}?apiKey=cr875483709897975877477133746240`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  });
};
