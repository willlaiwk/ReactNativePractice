import {
  ACCOUNT_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  account: '',
  password: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNT_CHANGED:
      return { ...state, account: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USER_LOGIN:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case USER_LOGIN_FAILED:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};
