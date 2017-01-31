let api = {
  getFlights(destinationPlace){
    let originPlace = "SFO"
    let utc = new Date().toJSON().slice(0,10);
    let destinationPlaceOptions = [VIE, BUR, BOJ, LCA, PRG, CPH, EPU, JYV, SVL, ORY, CDG, NCE, SFX, TXL, ATH, UAK, LIN, CIA, FCO, KIV, TGD, TIV, AMS, WAW, MAD, ARN, BMA, NYO, BRN, BSL, LHR]
     let url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/USD/en-US/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}?apiKey={cr875483709897975877477133746240}`

     return fetch(url).then((res) => res.json());
   }
};

module.exports = api;
