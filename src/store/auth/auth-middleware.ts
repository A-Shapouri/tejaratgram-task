import { all, put, select, takeLatest } from 'redux-saga/effects';
import { AuthActionTypes } from './auth-actions';
import { authStore } from './auth-store';
import { LoginResponse } from '@store/auth/auth';
import {signUpApi} from '@api/auth'

function* getOtpCodeWatcher() {
  const { phoneNumber } = yield select(authStore);
  // const { navigation } = yield select(homeStore);
  try {
    const response: LoginResponse = yield signUpApi({ phoneNumber: phoneNumber });
    console.log({response})
  } catch (error) {
    console.log(error)
    // yield put({
    //   type: AlertActionType.SHOW_ALERT,
    //   text: 'اطلاعات وارد شده صحیح نمی باشد لطفا مجددا تلاش نمایید',
    //   severity: 'danger',
    // });
    // yield put({
    //   type: AuthActionTypes.SET_LOADING,
    //   data: {
    //     loginLoading: false,
    //   },
    // });
  }
}

function* authMiddleware() {
  yield all([
    takeLatest(AuthActionTypes.GET_OTP_CODE, getOtpCodeWatcher),
  ]);
}

export default authMiddleware;
