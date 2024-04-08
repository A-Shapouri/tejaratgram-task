export interface AuthReducer {
  loginLoading: boolean
  isNumberValid: boolean
  isLoggedIn: boolean
  phoneNumber: string
  otpLoading: boolean
}

export interface LoginResponse {
    data: {
      token_type: string,
      access_token: string,
      medical_system_status: boolean,
    },
    extra: {
      guard: string,
    }
}
