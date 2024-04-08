import routes from '@routes';
import { CacheProps, fetchApi } from '../fetch';

interface loginApiProps extends CacheProps {
  phoneNumber: string
  verificationCode: string
}

const loginApi = ({ phoneNumber, verificationCode, ...rest }: loginApiProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.auth.login'],
    payload: {
      phone_number: phoneNumber,
      verification_code: verificationCode
    },
    cache: 'no-cache',
    ...rest,
  });
};

export default loginApi;
