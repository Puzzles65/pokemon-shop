const express = require('express');
const router = express.Router();
const cartItemsCtrl = require('../../controllers/api/cartItems');

// GET /api/cart?userId=x
router.get('/', cartItemsCtrl.show);
// POST /api/cart BODY = userId=x&cartItemId=x&quantity=x
router.post('/', cartItemsCtrl.edit);
// PUT /api/cart   BODY = userId=x&itemId=x&quantity=x
router.put('/', cartItemsCtrl.addNewCartItem);
// DELETE /api/cart QUERY = userId=x&cartItemId=x
router.delete('/', cartItemsCtrl.removeItemFromCart);

module.exports = router;