const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema

//creating a schema for each User
const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

//creating the model 'users'
mongoose.model("users", userSchema);
