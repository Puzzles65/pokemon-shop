const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../../controllers/api/categories');

// GET /api/categories
// router.get('/', categoriesCtrl.index);
// GET /api/categories/:id
router.get('/:name', categoriesCtrl.show);
// GET  /api/categories
router.get('/', categoriesCtrl.showAll);
// PUT /api/categories
router.put('/', categoriesCtrl.add);
// POST /api/categories/:id
router.post('/:id', categoriesCtrl.edit);
// DELETE /api/categories/:id
router.delete('/:id', categoriesCtrl.remove);

module.exports = router;
