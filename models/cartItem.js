const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  item: {type: Schema.Types.ObjectId, ref: 'Item'},
  quantity: {type: Schema.Types.Number, default: 1 }
}, {
  timestamps: true
});

module.exports = mongoose.model('CartItem', itemSchema);