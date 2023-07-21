const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// GET /api/users/cart
router.get('/cart', ensureLoggedIn, usersCtrl.showCart);
// PUT /api/users/cart/:id
router.put('/cart', ensureLoggedIn, usersCtrl.addItemToCart);
// DELETE /api/users/cart/:id
router.delete('/cart', ensureLoggedIn, usersCtrl.removeItemFromCart);

module.exports = router;