// //database code with mongoose
// const mongoose=require("mongoose");
// const plm=require("passport-local-mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/restaurant");
// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });

// mongoose.connection.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// const userSchema=mongoose.Schema({
//   username:{type:String},
//   email:{type:String},
//   password:{type:String}
// });
// //using passport-local-manager plugin 
// userSchema.plugin(plm);
// module.exports=mongoose.model("user",userSchema);




const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/restaurant');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  unique:true
},
  email: {
     type: String, 
    unique:true
},
  password: { type: String }
});

// Using passport-local-mongoose plugin
userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);



//latest code

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/restaurant');
// const passportLocalMongoose = require('passport-local-mongoose');

// const userschema = new mongoose.Schema({
//   username: String,
//   email: String,
// });

// // Add passport-local-mongoose plugin to User schema
// userschema.plugin(passportLocalMongoose);

// module.exports = mongoose.model('User', userschema);
