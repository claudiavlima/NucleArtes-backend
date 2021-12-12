const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PublicitySchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
  },
  { versionKey: false }
)

const PublicityThird = mongoose.model('publicityThird', PublicitySchema)
module.exports = PublicityThird