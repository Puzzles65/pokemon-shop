const CartItem = require('../../models/cartItem');
const User = require('../../models/user');
module.exports = {
  show,
  edit,
  addNewCartItem,
  removeItemFromCart
};

async function show(req, res) {
  const { userId } = req.query;

  const item = await CartItem.find({ user: userId }).populate('item');
  res.json(item);
}

async function edit(req, res) {
  const { cartItemId, quantity } = req.body;

  const item = await CartItem.findByIdAndUpdate(cartItemId,
  { 
    quantity: quantity || 1
  }, {
    new: true
  });

  res.json(item);
}

async function addNewCartItem(req, res) {
  try {
    // Extract item details from the request body
    const { userId, itemId, quantity } = req.body;
            
    // Create a new CartItem instance using the Mongoose model
    const newCartItem = new CartItem({
      user: userId,
      item: itemId,
      quantity
    });

    // Save the new item to the database
    const cartItem = await newCartItem.save();

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { cart: cartItem._id } },
      { new: true }
    ).populate('cart');
  
    res.json(updatedUser);

  } catch(error){
    console.error('Error adding item:', error);
  }
}


async function removeItemFromCart(req, res) {
  const { userId, cartItemId } = req.query;

  const user = await User.findByIdAndUpdate(
    userId,
    { $pull: { cart: cartItemId } },
    { new: true }
  ).populate('cart');

  await CartItem.remove({ _id: cartItemId, user: userId });

  res.json(user);
}
