export const RECEIVE_DATE = 'RECEIVE_DATE';

const receiveDate = date => ({
  type: RECEIVE_DATE,
  date
});

export const getDate = date => dispatch => (
  dispatch(receiveDate(date))
);
