import sendRequest from "./send-request";
const BASE_URL = '/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export async function getCart(userId) {
  return sendRequest(`${BASE_URL}/cart?userId=${userId}`);
}

export async function addItemToCart(userId, itemId) {
  return sendRequest(`${BASE_URL}/cart?userId=${userId}&itemId=${itemId}`, 'PUT');
}

export async function removeItemFromCart(userId, itemId) {
  return sendRequest(`${BASE_URL}/cart?userId=${userId}&itemId=${itemId}`, 'DELETE');
}