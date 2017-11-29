import { Actions } from 'react-native-router-flux';

import {
  ACCOUNT_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED
} from './types';

/**
 * 登入驗證 (測試用)
 * 
 * @param {string} account 
 * @param {string} password 
 * @returns Promise
 */
function authLogin(account, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (account === 'will' && password === '123') {
        resolve({ name: 'Will', email: 'will.lai@example.com' });
      } else {
        reject({ status: 400, message: 'Authentication Failed.' });
      }      
    }, 3000);
  });
}

function userLoginSuccess(successData) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: successData
  };
}

function userLoginFailed(errorData) {
  return {
    type: USER_LOGIN_FAILED,
    payload: errorData
  };
}

export const accountChanged = text => ({
  type: ACCOUNT_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const userLogin = ({ account, password }) => (dispatch) => {
  dispatch({ type: USER_LOGIN });

  // TODO: refactor this! 需透過 API 處理登入驗證。
  authLogin(account, password)
    .then((user) => {
      dispatch(userLoginSuccess(user));
      Actions.home();
    })
    .catch((error) => {
      dispatch(userLoginFailed(error));
    });
};
