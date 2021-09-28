import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from './types';

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, currentUser: payload, loading: false };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default loginReducer;
