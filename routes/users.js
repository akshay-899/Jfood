const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/restaurant');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
},
  email: {
     type: String, 
},
  password: { type: String},
  number:{type:Number}

});

// Using passport-local-mongoose plugin
userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);
