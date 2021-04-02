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
      });
};
