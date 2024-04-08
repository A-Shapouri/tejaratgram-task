import { AuthReducer } from './auth';
import { AuthActionTypes } from '@store/auth/auth-actions';

export const initialState: AuthReducer = {
  loginLoading: false,
  isNumberValid: false,
  isLoggedIn: false,
  phoneNumber: '',
  otpLoading: false,
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case AuthActionTypes.SET_USER_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action?.data?.phoneNumber,
        isNumberValid: true,
      };

    case AuthActionTypes.LOGIN_WITH_OTP:
      return {
        ...state,
        loginLoading: true,
      };

    case AuthActionTypes.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case AuthActionTypes.SET_LOADING:
      return {
        ...state,
        loginLoading: action?.data?.loading,
      };

    case AuthActionTypes.GET_OTP_CODE:
      return {
        ...state,
        otpLoading: true
      }

    default:
      return state;
  }
}

export default authReducer;
