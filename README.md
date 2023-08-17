# PokemonShop

## Description

This was my fourth and final solo project from the General Assembly Software Engineering Bootcamp Course – a Pokémon-themed shopping website. Inspired by the popularity of ecommerce platforms and my love for Pokémon, I created this website to offer a diverse range of Pokémon-themed merchandise. Throughout the course, I've honed my skills in web development, design, and backend functionalities, resulting in a fully functional and visually appealing platform. Join me in exploring a collection of adorable plushies, stylish apparel, and rare collectibles, providing Pokémon enthusiasts with a delightful shopping experience. Gotta catch 'em all!  

## Deployment link


## Getting Started/Code Installation

1. **Clone the Repository**
    To start, you'll want to clone the repository onto your local machine. Open your terminal and execute the following command:
    `git clone https://github.com/Puzzles65/pokemon-shop`
2. **Setup Environment Variables**
    Create `.env` file including yours environment variables.

    DATABASE_URL: URL for the project's database.(MongoDB)
    SECRET: any phrase/word
3. **Run commands**
    In your terminal, run the app using:  
    `npm start`  
    The app should now be running on `http://localhost:3000`.

## Timeframe & Working Team 

It was a solo and we were given 10 days to complete it. 

## Technologies Used
This project required MongoDB, HTML, CSS and JavaScript.

Frameworks used: 
- Bootstrap. 
- SCSS.

## Brief

- A working full-stack, single-page application hosted on Heroku.
- Incorporate the technologies of the MERN-stack:
MongoDB/Mongoose
Express
React
Node
- Have a well-styled interactive front-end.
☐- ommunicates with the Express backend via AJAX.
- Implement token-based authentication. Including the ability of a user to sign-up, log in & log out.
- Implement authorization by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user.
- Have a well-scoped feature-set. Full-CRUD data operations are not required if one or more other features are included, for example:
Consume data from a third-party API.
Implement additional functionality if the user is an admin.
Implementation of a highly dynamic UI or data visualization.
Other, instructor approved, complexity/features.

Full requirements: <a href="https://git.generalassemb.ly/SEI-72-LDN/SEIR-Courses-Materials/blob/main/Unit_4/project-4/project-4-requirements.md#technical-requirements" target="_blank" rel="noopener noreferrer">here</a>.

## Planning
For planning I used a Trello board and Excalidraw.

<img src="https://i.imgur.com/ym5Qgm8.png" alt=""/>

<img src="https://i.imgur.com/M7xO7OZ.png" alt=""/>

Full Trello board: <a href="https://trello.com/b/AXlg2uvI/project-4" target="_blank" rel="noopener noreferrer">here</a>.

## Build/Code Process
In this project, I began by incorporating the login and signup functionalities demonstrated in the lessons.
```javascript
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
```
Subsequently, my focus shifted to developing models for items and categories, a step aimed at populating the database with essential data.

```javascript
const itemSchema = new Schema({
user: {type: Schema.Types.ObjectId, ref: 'User'},
item: {type: Schema.Types.ObjectId, ref: 'Item'},
quantity: {type: Schema.Types.Number, default: 1 }
}, {
timestamps: true
});
}}
```
The itemSchema presented here defines the structure for managing items within the database. It establishes a relationship between users and items through references to the User and Item models using user and item fields, respectively. The quantity field tracks the quantity of the item, with a default value of 1. Additionally, the schema incorporates automatic timestamp fields (createdAt and updatedAt) to record creation and modification times. This schema plays a fundamental role in supporting CRUD functionality for items, ensuring efficient organization and management of item-related data in the application.

Having accomplished successful database seeding, my next objective was to establish routing, facilitating CRUD functionality for the items and categories.
```javascript
// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// GET /api/users/cart
router.get('/cart', ensureLoggedIn, usersCtrl.showCart);
// PUT /api/users/cart/:id
router.put('/cart', ensureLoggedIn, usersCtrl.addItemToCart);
// DELETE /api/users/cart/:id
router.delete('/cart', ensureLoggedIn, usersCtrl.removeItemFromCart);
```

The provided code snippet outlines a set of API routes designed to facilitate user-related actions within the application. These routes include user creation (sign-up), user login, token verification, cart retrieval, adding items to the cart, and removing items from the cart. Each route corresponds to a specific functionality and interacts with the usersCtrl controller, which manages user-related operations.

Following that, my focus would turn towards refining the cart functionality, which involves tasks like enabling users to add items, adjust quantities, and remove items from their baskets. This stage would involve enhancing user interactions within the cart, aiming to optimize the shopping experience and contribute to the overall usability of the application.

```javascript
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
```
The function above, addNewCartItem, plays a crucial role in facilitating the seamless addition of new items to a user's cart within the application. This asynchronous function begins by extracting essential details, such as the user's ID, item ID, and quantity, from the incoming request body. Using the Mongoose model, a new instance of CartItem is created, encapsulating these details. Upon saving this new item to the database, the function ensures that the user's cart is updated by adding the newly created item's ID using the $addToSet operator, which guarantees uniqueness. The result is an updated user object, thoughtfully populated with the cart array, which is then returned to the client as a JSON response. In the event of any errors during this process, robust error handling is in place to log and manage potential issues. This function serves as a foundational component, empowering users to effortlessly manage their shopping cart items and enriching the overall user experience.

## Challenges

While working on this Pokémon-themed shopping website, I encountered several challenges that tested my skills and adaptability. One major hurdle was struggling with time management, leading to tight deadlines and rushed decisions. Additionally, I initially approached the problem with an inefficient strategy, resulting in the need for extensive refactoring later on. Another difficulty I faced was my hesitance in seeking help and communicating my need for assistance effectively, which prolonged problem-solving processes. To tackle this, I will now emphasize detailed planning, prototyping, and seeking early peer reviews to ensure a more streamlined and effective development process.

## Wins

Along the way, I celebrated small wins, such as successfully implementing the basic functionality of a shopping cart, which allowed users to add items, view their selected products, and manage quantities. Each of these wins marked milestones in the project's development and reinforced my passion for web development and creating user-centric applications.

## Key Learnings/Takeaways

These challenges taught me valuable lessons in project planning, problem-solving, and the importance of effective communication with the GA team. By recognizing the areas that needed improvement, I was able to refine my time management skills, allowing for better allocation of resources and smoother project progress. Moreover, I learned the significance of taking a step back and reassessing my approach when facing complex problems, leading to more efficient solutions.

## Bugs

The functionality of adding new item works, but it does not refresh the page or show any indication of successfully adding an item, therefore user might be confused whether the item has been added correctly. 

## Future Improvements
- Moving the login/signup functionality to the navbar.
- Adding functionality of specific trending collections to homepage and style it. 
- Finishing the cart functionality, cart showing total and being able to checkout. 
- Adding past orders page, that allows user to check past orders 
- Working on styling for a whole website as in theme, forms and items to match.  


