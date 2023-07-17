const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  sortOrder: Number
}, {
  timestamps: true
});

categorySchema.virtual('items', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'category'
}) 

categorySchema.set('toJSON', {
  virtuals: true
})


module.exports = mongoose.model('Category', categorySchema);