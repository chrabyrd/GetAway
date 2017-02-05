import { connect } from 'react-redux';
import { redirectToPage } from '../../actions/flightActions';
import FlightIndex from './flightIndex';

const mapStateToProps = ({flightIndex, returnDate, nearestAirport}) => ({
  flightIndex,
  returnDate,
  nearestAirport
});

const mapDispatchToProps = dispatch => ({
  redirectToPage: (departAirport, destinationAirport, leaveDate, returnDate) => redirectToPage(departAirport, destinationAirport, leaveDate, returnDate)
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlightIndex);
