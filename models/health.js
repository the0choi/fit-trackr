const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const healthSchema = new Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
  caloriesIn: {
    type: Number,
    required: true,
    min: 0,
    default: 2000
  },
  caloriesOut: {
    type: Number,
    required: true,
    min: 0,
    default: 2000
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Health', healthSchema);