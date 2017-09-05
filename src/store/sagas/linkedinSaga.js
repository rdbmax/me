import { put, takeLatest } from 'redux-saga/effects';
import login from '../../api/login';
import logout from '../../api/logout';
import {
  LOGOUT_REQUESTED,
  CONNECT_REQUESTED,
  CONNECT_SUCCESS,
  LOGOUT_SUCCESS,
} from '../actions/index';

function* fetchUser() {
  const user = yield login();
  yield put({ type: CONNECT_SUCCESS, payload: user });
}

function* logoutUser() {
  yield logout();
  yield put({ type: LOGOUT_SUCCESS });
}

function* mySaga() {
  yield takeLatest(CONNECT_REQUESTED, fetchUser);
  yield takeLatest(LOGOUT_REQUESTED, logoutUser);
}

export default mySaga;
