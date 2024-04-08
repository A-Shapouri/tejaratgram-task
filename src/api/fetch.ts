import { getFromCookie, removeFromCookie } from '@utils/cookie';
import getParseUrl from '@utils/parse-url';
// import routes from '@routes/authentication';

interface ConfigProps extends CacheProps {
  method: 'GET' | 'PUT' | 'DELETE' | 'POST' | 'PATCH'
  url: string | {
    pathname: string,
    query: object | any
  }
  payload?: any
  withToken?: boolean
  params?: object
}

export interface CacheProps {
  cache?: 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload'
  next?: {revalidate: number}
}

export async function fetchApi({ method, payload, withToken, url, cache = 'no-cache', next}: ConfigProps): Promise<any> {
  const parseUrl: string = getParseUrl(url);
  const baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_API_USER_BASE_PATH}/${process.env.NEXT_PUBLIC_API_VERSION}/api`;

  const CatchFunction = async (error: any) => {
    const errorResponse = await error.json();
    const errorObject = {
      code: error?.status,
      message: errorResponse?.data?.error,
    };
    if (error?.status === 401 || error?.status === 403) {
      if (window.location.pathname) {
        setTimeout(() => {
          // window.location.replace(`${routes['route.auth.login']}?redirect=${encodeURIComponent(window.location.pathname)}`);
        }, 1000);
      }
    }
    throw errorObject;
  };

  // set token for Authorization
  const headers = new Headers({
    Accept: 'application/json',
  });
  const token = getFromCookie('token');
  if (withToken) {
    headers.append('Authorization', 'Bearer ' + token);
  }

  const controller = new AbortController();
  const signal = controller.signal;

  switch (method) {
    case 'GET': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          next: next,
          cache: cache,
          method: 'GET',
          signal,
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }

            return response.json();
          }).then((data) => {
            return data;
          }).catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
    case 'PUT': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          body: JSON.stringify(payload),
          cache: cache,
          next: next,
          method: 'PUT',
          signal,
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
    case 'DELETE': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          next: next,
          cache: cache,
          method: 'DELETE',
          signal,
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
    case 'POST': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          body: JSON.stringify(payload),
          next: next,
          cache: cache,
          method: 'POST',
          mode: 'no-cors',
          signal,
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
    case 'PATCH': {
      return (
        fetch(encodeURI(`${baseURL}/${parseUrl}`), {
          headers: headers,
          body: JSON.stringify(payload),
          next: next,
          cache: cache,
          method: 'PATCH',
          signal,
        })
          .then(response => {
            if (!response.ok) {
              throw response;
            }
            return response.json();
          })
          .catch((reason) => reason.name === 'TypeError' ? controller.abort() : CatchFunction(reason))
      );
    }
  }
}
