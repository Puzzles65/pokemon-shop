

require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Cards'},
        {name: 'Accessories'},
        {name: 'Plushies'},
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {
            name: 'Astral Radiance Pack', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8153_181-85024_02.jpg', 
            category: categories[0], 
            price: 5.99,
        },
        {
            name: 'Battle Styles Pack', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P6890_176-80819_02.jpg', 
            category: categories[0], 
            price: 5.99,
        },
        {
            name: 'Chilling Reign Pack', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P7036_177-80847_02.jpg', 
            category: categories[0], 
            price: 5.99,
        },
        {
            name: 'Fusion Strike Pack', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P7737_179-80917_02.jpg', 
            category: categories[0],
            price: 5.99,
        },
        {
            name: 'Silver Tempest Pack', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8696_183-85092_02.jpg', 
            category: categories[0], 
            price: 5.99,
        },
        {
            name: 'Instinct Pin', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P9523_710E10053_01.jpg', 
            category: categories[1], 
            price: 8.99,
        },
        {
            name: 'Mystic Pin', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P9523_710E10052_01.jpg', 
            category: categories[1], 
            price: 8.99,
        },
        {
            name: 'Pikachu Sleepy Pin', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8056_710-29942_01.jpg', 
            category: categories[1], 
            price: 8.99,
        },
        {
            name: 'Pikachu Pin', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8550_710-96527_01.jpg', 
            ategory: categories[1], 
            price: 8.99,
        },
        {
            name: 'Valor Pin', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P9523_710E10051_01.jpg', 
            category: categories[1], 
            price: 8.99,
        },
        {
            name: 'Charizard Plush', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P5162_701-04120_01.jpg', 
            category: categories[2], 
            price: 15.99,
        },
        {
            name: 'Dragonite Plush', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P2466_701-00226_01.jpg', 
            category: categories[2], 
            price: 15.99,
        },
        {
            name: 'Mimikyu Plush', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P4414_701-03075_01.jpg', 
            category: categories[2], 
            price: 15.99,
        },
        {
            name: 'Pikachu Plush', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P4828_701-03127_01.jpg', 
            category: categories[2], 
            price: 15.99,
        },
        {
            name: 'Spheal Plush', 
            image: 'https://www.pokemoncenter.com/images/DAMRoot/High/10000/P8809_701-96380_01.jpg', 
            category: categories[2], 
            price: 15.99,
        },
    ]);

    console.log(items)

    process.exit();

})();