const Item = require('../../models/item');
const Category = require('../../models/category');
module.exports = {
  index,
  show,
  add,
  edit,
  remove,
  addNewItem
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

async function addNewItem(req, res) {
  try {
    // Extract item details from the request body
    const { name, image, category, price } = req.body;
  
       // Find the category document based on the chosen category
       const categoryObject = await Category.findOne({ name: category });
       if (!categoryObject) {
         return res.status(404).json({ message: 'Category not found' });
       }
        
    // Create a new Item instance using the Mongoose model
    const newItem = new Item({
      name,
      image,
      category: categoryObject._id,
      price,
    });

    // Save the new item to the database
    await newItem.save();
  } catch(error){
    console.error('Error adding item:', error);
  }
}