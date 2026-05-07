const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true,
    default: 0
  },
  author: {
    type: String,
    required: true
  },
  postedAt: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Avoid duplicate stories by URL, but allow updating points
StorySchema.index({ url: 1 }, { unique: true });

module.exports = mongoose.model('Story', StorySchema);
