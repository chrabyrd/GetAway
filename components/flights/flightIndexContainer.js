import { connect } from 'react-redux';
import { redirectToPage } from '../../actions/flightActions';
import FlightIndex from './flightIndex';

const mapStateToProps = ({flightIndex, returnDate}) => ({
  flightIndex,
  returnDate
});

const mapDispatchToProps = dispatch => ({
  redirectToPage: (destinationAirport, leaveDate, returnDate) => redirectToPage(destinationAirport, leaveDate, returnDate)
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlightIndex);
