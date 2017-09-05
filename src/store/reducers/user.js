import { CONNECT_SUCCESS, LOGOUT_SUCCESS } from '../actions';

const defaultState = {
  firstName: '',
  headline: '',
  id: '',
  lastName: '',
  siteStandardProfileRequest: {
    url: '',
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONNECT_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};
