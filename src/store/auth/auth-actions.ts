const preType = 'AUTH_';

export const AuthActionTypes = {
  LOGIN_WITH_OTP: `${preType}LOGIN_WITH_OTP`,
  GET_OTP_CODE: `${preType}GET_OTP_CODE`,
  SET_USER_PHONE_NUMBER: `${preType}SET_USER_PHONE_NUMBER`,
  SET_USER_OTP: `${preType}SET_USER_OTP`,
  SET_LOADING: `${preType}SET_LOADING`,
  SET_PHONE_NUMBER_VALIDATION: `${preType}SET_PHONE_NUMBER_VALIDATION`,
  SET_IS_LOGGED_IN: `${preType}SET_IS_LOGGED_IN`,
};

const loginWithOtpAction = () => ({ type: AuthActionTypes.LOGIN_WITH_OTP });
const setUserOtpAction = (data: { password: string }) => ({ type: AuthActionTypes.SET_USER_OTP, data: data });
const setUserPhoneNumberAction = (data: { phoneNumber: string }) => ({ type: AuthActionTypes.SET_USER_PHONE_NUMBER, data: data });
const setLoading = (data: { loading: boolean }) => ({ type: AuthActionTypes.SET_LOADING, data: data });
const setPhoneNumberValidation = (data: { isNumberValid: boolean }) => ({ type: AuthActionTypes.SET_PHONE_NUMBER_VALIDATION, data: data });

const getUserOtpAction = () => ({type: AuthActionTypes.GET_OTP_CODE})
export const AuthActions = {
  loginWithOtpAction: loginWithOtpAction,
  setUserOtpAction: setUserOtpAction,
  setUserPhoneNumberAction: setUserPhoneNumberAction,
  setLoading: setLoading,
  setPhoneNumberValidation: setPhoneNumberValidation,
  getUserOtpAction: getUserOtpAction,
};
