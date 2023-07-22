import sendRequest from "./send-request";
const BASE_URL = '/api/cart';

export async function getCart(userId) {
  return sendRequest(`${BASE_URL}?userId=${userId}`);
}

export async function editItemQuantity(cartItemId, quantity) {
    return sendRequest(BASE_URL, 'POST', {
        cartItemId,
        quantity
    });
  }

export async function addItemToCart(userId, itemId, quantity) {
  return sendRequest(BASE_URL, 'PUT', {
    userId,
    itemId,
    quantity
  });
}

export async function removeItemFromCart(userId, cartItemId) {
  return sendRequest(`${BASE_URL}?userId=${userId}&cartItemId=${cartItemId}`, 'DELETE');
}