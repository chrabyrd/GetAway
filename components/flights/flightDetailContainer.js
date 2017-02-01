import { connect } from 'react-redux';
import { fetchFlight, fetchFlights } from '../../actions/flightActions';
import FlightDetail from './flightDetail';

const mapStateToProps = ({flightDetail}) => ({
  flightDetail
});

const mapDispatchToProps = dispatch => ({
  fetchFlight: (id) => dispatch(fetchFlight(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(FlightDetail);
