const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');


// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);
// PUT /api/items
router.put('/', itemsCtrl.add);
// POST /api/items/:id
router.post('/:id', itemsCtrl.edit);
// DELETE /api/items/:id
router.delete('/:id', itemsCtrl.remove);

module.exports = router;
