const Item = require('../../models/item');

module.exports = {
  index,
  show,
  add,
  edit,
  remove
};

async function index(req, res) {
  const items = await Item.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the populated categories
  // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  console.log(items)
  res.json(items);
  
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}

async function add(req, res) {
  const item = await Item.create(req.body);
  res.json(item);
}

async function edit(req, res) {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body);
  res.json(item);
}

async function remove(req, res) {
  const item = await Item.findByIdAndRemove(req.params.id);
  res.json(item);
}