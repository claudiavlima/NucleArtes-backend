const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    dni: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
    }
  },
  { versionKey: false, timestamps: true, }
)

const User = mongoose.model('users', UserSchema)
module.exports = User