const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SaleSchema = new Schema (
    {
       client: {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'users',
           required: true,
       },
        total: {
           type: Number,
           required: true,
        },
        products: [
            {
                productId: { type: String},
                quantity: { type: Number},
                name: { type: String },
                price: { type: Number},
            }
        ],
        date: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
)

const Sale = mongoose.model('sales', SaleSchema)
module.exports = Sale