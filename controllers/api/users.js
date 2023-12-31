const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  showAll,
  create,
  login,
  checkToken,
  showCart,
  addItemToCart,
  removeItemFromCart
};

async function showAll(req, res) {
  const users = await User.find();
  res.json(users); 
}

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

/*--- Cart Functions --*/
async function showCart(req, res) {
  const user = await User.findById(req.query.userId).populate('cart');
  if (user) {
    return res.json(user.cart);
  }
  res.json([]);
}

async function addItemToCart(req, res) {
  const user = await User.findByIdAndUpdate(
    req.query.userId,
    { $addToSet: { cart: req.query.itemId } },
    { new: true }
  );

  res.json(user);
}

async function removeItemFromCart(req, res) {
  const user = await User.findByIdAndUpdate(
    req.query.userId,
    { $pull: { cart: req.query.itemId } },
    { new: true }
  );

  res.json(user);
}


/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}