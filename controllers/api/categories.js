const Category = require('../../models/category');

module.exports = {
//   index,
  show
};

// async function index(req, res) {
//   const items = await Item.find({}).sort('name').populate('category').exec();
//   // re-sort based upon the sortOrder of the populated categories
//   // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
//   console.log(items)
//   res.json(items);
  
// }

async function show(req, res) {
    console.log(req.params.name)
  const item = await Category.findOne({ name: req.params.name }).populate('items');
  console.log(item)
  res.json(item);
}
