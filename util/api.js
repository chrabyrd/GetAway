let api = {
  getFlights(destinationPlace, inboundPartialDate){
    let originPlace = "SFO";
    let utc = new Date().toJSON().slice(0,10);
     let url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey=cr875483709897975877477133746240`;

     return fetch(url).then((res) => res.json());
   },

   getDetail(){
     let url = `http://partners.api.skyscanner.net/apiservices/pricing/v1.0`;
     return fetch(url, {
       method: 'POST',
       header: {
         'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json’ or ‘application/xml'
       },
       body: JSON.stringify({
        apiKey: 'cr875483709897975877477133746240',
        country: 'US',
        currency: 'USD',
        locale: 'en-US',
        originplace: 'SFO',
        destinationplace: 'VIE',
        outbounddate: '2017-02-02',
        inbounddate: '2017-02-07'
      })
    }).then((detail) => detail.json());
   }
};

module.exports = api;
