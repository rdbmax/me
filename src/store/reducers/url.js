import { SET_PAGE } from '../actions';

const defaultState = {
  currentPage: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
      };
    default:
      return state;
  }
};
