const Category = require('../../models/category');

module.exports = {
  show,
  showAll,
  add,
  edit,
  remove
};


async function showAll(req, res) {
  const item = await Category.find().populate('items');
  res.json(item);
}

async function show(req, res) {
    console.log(req.params.name)
  const item = await Category.findOne({ name: req.params.name }).populate('items');
  console.log(item)
  res.json(item);
}

async function add(req, res) {
  const item = await Category.create(req.body);
  res.json(item);
}

async function edit(req, res) {
  const item = await Category.findByIdAndUpdate(req.params.id, req.body);
  res.json(item);
}

async function remove(req, res) {
  const item = await Category.findByIdAndRemove(req.params.id);
  res.json(item);
}