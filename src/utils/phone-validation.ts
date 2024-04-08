import { persianToEnglish } from './persian-to-english-number';

const validMobileNumber = (mobileNumber: string): { isValid: boolean, mobile: string | null } => {
  mobileNumber = persianToEnglish(mobileNumber);

  const pattern = /^(09|9|00989|\+989|989|009809|\+9809|9809)\d{9}$/g;
  const isValid = pattern.test(mobileNumber);
  const mobile = isValid ? mobileNumber.slice(-10) : null;

  return {
    isValid: isValid,
    mobile: mobile,
  };
};

export default validMobileNumber;
