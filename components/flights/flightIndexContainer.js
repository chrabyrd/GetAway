import { connect } from 'react-redux';
import { fetchFlight, fetchFlights } from '../../actions/flightActions';
import FlightIndex from './flightIndex';

const mapStateToProps = ({flightIndex}) => ({
  flightIndex
});

const mapDispatchToProps = dispatch => ({
  fetchFlights: () => dispatch(fetchFlights())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlightIndex);
