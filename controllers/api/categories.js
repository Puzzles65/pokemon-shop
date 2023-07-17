const Category = require('../../models/category');

module.exports = {
  show
};

async function show(req, res) {
    console.log(req.params.name)
  const item = await Category.findOne({ name: req.params.name }).populate('items');
  console.log(item)
  res.json(item);
}
