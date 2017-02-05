import { connect } from 'react-redux';
import { fetchFlights, fetchClosestAirport } from '../../actions/flightActions';
import { getDate } from '../../actions/dateActions';
import Home from './home';

const mapStateToProps = ({flightIndex, nearestAirport}) => ({
  flightIndex,
  nearestAirport
});

const mapDispatchToProps = dispatch => ({
  fetchFlights: (departAirport, leaveDate, returnDate) => dispatch(fetchFlights(departAirport, leaveDate, returnDate)),
  receiveDate: date => dispatch(getDate(date)),
  fetchClosestAirport: () => dispatch(fetchClosestAirport())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Home);
