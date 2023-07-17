const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

// GET /api/categories
// router.get('/', categoriesCtrl.index);
// GET /api/categories/:id
router.get('/:name', categoriesCtrl.show);

module.exports = router;
