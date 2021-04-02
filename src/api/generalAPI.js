const API_URL = 'https://reachyetitestback.herokuapp.com';
const API_HEADER = new Headers();
API_HEADER.append('Content-Type', 'application/json');
export const fetchNoToken = (endpoint, data, method = 'GET') => {
  const url = `${API_URL}${endpoint}`;
  return method === 'GET'
    ? fetch(url)
    : fetch(url, {
        method,
        headers: API_HEADER,
        body: JSON.stringify(data),
      });
};

export const fetchToken = (endpoint, JWT, data, method = 'GET') => {
  const url = `${API_URL}${endpoint}`;
  if(method === 'GET') {
    return fetch(url);
  } else {
    if(data) {
      return fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          token: JWT,
        },
        body: JSON.stringify(data),
      });
    } else {
      return fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          token: JWT,
        },
      });
    }
  }
};
