const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  bookmarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Story'
  }]
}, { timestamps: true });

UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
