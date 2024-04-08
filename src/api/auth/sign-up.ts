import routes from '@routes';
import { CacheProps, fetchApi } from '../fetch';

interface signUpApiProps extends CacheProps {
  phoneNumber: string
}

const signUpApi = ({ phoneNumber, ...rest }: signUpApiProps) => {
  return fetchApi({
    method: 'POST',
    url: routes['api.auth.sign-up'],
    payload: {
      phone_number: phoneNumber,
    },
    cache: 'no-cache',
    ...rest,
  });
};

export default signUpApi;
