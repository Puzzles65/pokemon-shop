import sendRequest from './send-request';

const BASE_URL = '/api/categories';

export function getSingle(name) {
  return sendRequest(`${BASE_URL}/${name}`);
}


