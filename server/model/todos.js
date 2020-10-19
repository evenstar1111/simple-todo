const { Schema, model } = require('mongoose');

const todosSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    max: 50,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
    max: 10,
    default: 'New',
  },
});

module.exports = model('Todo', todosSchema);
