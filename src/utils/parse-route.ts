const getParseRoute = (URL: { pathname: string; query?: any }): string => {
  let parseUrl: string;

  if (URL.query) {
    parseUrl = URL?.pathname.toString();
    Object.keys(URL.query).forEach((key) => {
      if (parseUrl.indexOf(key) !== -1) {
        parseUrl = parseUrl.replace(`[${key}]`, URL.query[key]);
      } else {
        if (typeof URL.query[key] === 'object') {
          URL.query[key].forEach((item: string) => {
            parseUrl = `${parseUrl}&${key}=${item}`;
          });
        } else {
          parseUrl = `${parseUrl}&${key}=${URL.query[key]}`;
        }
      }
    });
    return parseUrl.toString().replace('&', '?');
  }

  return URL.pathname;
};

export default getParseRoute;
