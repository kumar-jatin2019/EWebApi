
// model/cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    products: [
      {
        productId: Number,
        quantity: Number,
        name: String,
        price: Number,
        description: String,
        thumbnail: String
      }
    ],

    active: {
      type: Boolean,
      default: true
    },
   
    modifiedOn: {
      type: Date,
      default: Date.now
    },
    totalQuantity:{
      type:Number
      },

      totalAmount:{
       type:Number
      }
  },
  { timestamps: true }
)

const Car = mongoose.model('Cart', cartSchema);

module.exports = Car;