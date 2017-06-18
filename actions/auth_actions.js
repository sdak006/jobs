import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

/*
async await es6 syntax schenanigans dont need {} and return call when
using async await, and can remove () since there is only a single prop
"dispatch"
*/
export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token});
  } else {
    doFacebookLogin(dispatch);
  }
}

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('238043976694259', {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL, payload: '' });
  }

  await AsyncStorage.setItem('fb_token', token);
  return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token});
};