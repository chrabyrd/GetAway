import { connect } from 'react-redux';
import { fetchFlights, redirectToPage } from '../../actions/flightActions';
import FlightIndex from './flightIndex';

const mapStateToProps = ({flightIndex, returnDate}) => ({
  flightIndex,
  returnDate
});

const mapDispatchToProps = dispatch => ({
  fetchFlights: date => dispatch(fetchFlights(date)),
  redirectToPage: (destinationAirport, leaveDate, returnDate) => redirectToPage(destinationAirport, leaveDate, returnDate)
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlightIndex);
