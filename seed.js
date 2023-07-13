import astralradiance from './src/assets/cards/astralradiance.jpeg';
import battlestyles from './src/assets/cards/battlestyles.jpeg';
import chillingreign from './src/assets/cards/chillingreign.jpeg';
import fusionstrike from './src/assets/cards/fusionstrike.jpeg';
import silvertempest from './src/assets/cards/silvertempest.jpeg';

import instinct from './src/assets/accessories/instinct.jpeg';
import mystic from './src/assets/accessories/mystic.jpeg';
import pikachusleepy from './src/assets/accessories/pikachusleepy.jpeg';
import pikapin from './src/assets/accessories/pikapin.jpeg';
import valor from './src/assets/accessories/valor.jpeg';

import charizard from './src/assets/plushies/charizard.jpeg';
import dragonite from './src/assets/plushies/dragonite.jpeg';
import mimikyu from './src/assets/plushies/mimikyu.jpeg';
import pikachuplush from './src/assets/plushies/pikachu.jpeg';
import spheal from './src/assets/plushies/spheal.jpeg';


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
        {name: 'Astral Radiance Pack', image: astralradiance, category: categories[0], price: 5.99},
        {name: 'Battle Styles Pack', image: battlestyles, category: categories[0], price: 5.99},
        {name: 'Chilling Reign Pack', image: chillingreign, category: categories[0], price: 5.99},
        {name: 'Fusion Strike Pack', image: fusionstrike, category: categories[0], price: 5.99},
        {name: 'Silver Tempest Pack', image: silvertempest, category: categories[0], price: 5.99},
        {name: 'Instinct Pin', image: instinct, category: categories[1], price: 8.99},
        {name: 'Mystic Pin', image: mystic, category: categories[1], price: 8.99},
        {name: 'Pikachu Sleepy Pin', image: pikachusleepy, category: categories[1], price: 8.99},
        {name: 'Pikachu Pin', image: pikapin, category: categories[1], price: 8.99},
        {name: 'Valor Pin', image: valor, category: categories[1], price: 8.99},
        {name: 'Charizard Plush', image: charizard, category: categories[2], price: 15.99},
        {name: 'Dragonite Plush', image: dragonite, category: categories[2], price: 15.99},
        {name: 'Mimikyu Plush', image: mimikyu, category: categories[2], price: 15.99},
        {name: 'Pikachu Plush', image: pikachuplush, category: categories[2], price: 15.99},
        {name: 'Spheal Plush', image: spheal, category: categories[2], price: 15.99},
    ]);

    console.log(items)

    process.exit();

})();