import { connect } from 'react-redux';
import { redirectToPage } from '../../actions/flightActions';
import { getForecast } from '../../actions/weatherActions';
import FlightIndex from './flightIndex';

const mapStateToProps = ({flightIndex, returnDate, nearestAirport, weather}) => ({
  flightIndex,
  returnDate,
  nearestAirport,
  weather
});

const mapDispatchToProps = dispatch => ({
  redirectToPage: (departAirport, destinationAirport, leaveDate, returnDate) => redirectToPage(departAirport, destinationAirport, leaveDate, returnDate),
  getForecast: (city, country) => dispatch(getForecast(city, country))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlightIndex);
