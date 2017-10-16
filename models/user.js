const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: String,
  password: String
})

let user = mongoose.model('user', UserSchema)

module.exports = user
