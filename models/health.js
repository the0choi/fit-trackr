const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const healthSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  caloriesIn: {
    type: Number,
    min: 0,
    default: 0
  },
  caloriesOut: {
    type: Number,
    min: 0,
    default: 0
  },
  restingHeartRate: {
    type: Number,
    min: 0,
    default: 0
  },
  steps: {
    type: Number,
    min: 0,
    default: 0
  },
  weight: {
    type: Number,
    min: 0,
    default: 0
  },
  sleep: {
    type: Number,
    min: 0,
    default: 0
  },
  notes: {
    type: [noteSchema]
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Health', healthSchema);