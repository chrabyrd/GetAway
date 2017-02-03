export const getIndex = (returnDate) => {
  let leaveDate = new Date();
  leaveDate.setHours(leaveDate.getHours() + 48);
  leaveDate = leaveDate.toJSON().slice(0,10);

  return fetch(`http://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/SFO/anywhere/${leaveDate}/${returnDate}?apiKey=cr875483709897975877477133746240`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  });
};

export const redirect = (destinationPlace, leaveDate, returnDate) => {

  return fetch(`http://partners.api.skyscanner.net/apiservices/referral/v1.0/US/USD/en-US/SFO/${destinationPlace}/${leaveDate}/${returnDate}?apiKey=cr875483709897975877477133746240`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
  });
};
