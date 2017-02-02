

export const getSession = () =>{
  fetch(`http://partners.api.skyscanner.net/apiservices/pricing/v1.0`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
       'Accept': 'application/json'
    },
    body: JSON.stringify({
     apiKey: 'cr875483709897975877477133746240',
     country: 'US',
     currency: 'USD',
     locale: 'en-US',
     originplace: 'SFO',
     destinationplace: 'VIE',
     outbounddate: '2017-02-04',
     inbounddate: '2017-02-07'
   })
 })
 .then((detail) => console.log(detail))
 .then((detailJson) => {
   console.log(detailJson);
   return detailJson;
 })
 .catch((error) => {
   console.log(error);
 });
};

export const getDetail = () =>{
  let budget = 1000;
  destinations = [];
  count = 0;
  while ( count < 2){
     let destinationPlaceOptions = ["SAN", "LAX", "LAS", "DEN", "SEA", "PDX",
                                    "AKL", "AMS", "BLR", "CDG", "CKG", "CHP",
                                    "CUN", "DEL", "DUB", "DUS", "DXB", "FRA",
                                    "HEL", "LHR", "MAN", "MEX", "MUC", "NAN",
                                    "NRT", "PEK", "PTY", "PVG", "PVR", "SIN",
                                    "SJD", "SYD", "TAO", "TLV", "TPE", "TXL",
                                    "YEG", "YUL", "YVR", "YYZ", "ZRH", "CVG"
                                    ];
    // DEST = destinationPlaceOptions[(Math.floor(Math.random() * destinationPlaceOptions.length))];
    DEST = destinationPlaceOptions[count];
    console.log(DEST);
    fetch(`http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/US/USD/en-US/SFO/${DEST}/2017-02-04/2017-02-07?apiKey=cr875483709897975877477133746240`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },

    })
    .then((detail) => detail.json())
    .then((detailJson) => {

      console.log("detail", detailJson);
      console.log("quote", detailJson.Quotes );
      if ( detailJson.Quotes.length > 0 ){
        destinations.push("hi",detailJson);
      }
      console.log(destinations);

      // return detailJson;
    })
    .catch((error) => {
      console.log(error);
    });
    count += 1;
  }
  return destinations;
};










// let api = {
//   getFlights(destinationPlace, inboundPartialDate){
//     let originPlace = "SFO";
//     let utc = new Date().toJSON().slice(0,10);
//      let url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey=cr875483709897975877477133746240`;
//
//      return fetch(url).then((res) => res.json());
//    },
//
//    getDetail(){
//      let url = `http://partners.api.skyscanner.net/apiservices/pricing/v1.0`;
//      return fetch(url, {
//        method: 'POST',
//        header: {
//          'Content-Type': 'application/x-www-form-urlencoded',
//           'Accept': 'application/json’ or ‘application/xml'
//        },
//        body: JSON.stringify({
//         apiKey: 'cr875483709897975877477133746240',
//         country: 'US',
//         currency: 'USD',
//         locale: 'en-US',
//         originplace: 'SFO',
//         destinationplace: 'VIE',
//         outbounddate: '2017-02-02',
//         inbounddate: '2017-02-07'
//       })
//     }).then((detail) => detail.json());
//    }
// };
//
// module.exports = api;
