const DeleteCart = require('../../models/cart');

exports.delete = async (req, res) => {
  // try {
  const { productId, quantity, name, price, thumbnail, description, totalQuantity , totalAmount} = req.body;
  const { email, password, userId } = req.body;

   
  try {
   let  cart = [];
     cart = await DeleteCart.findOne({ userId });
    console.log(cart, 'cartttt');
    let totalQuantity = 0;
    let totalAmount = 0;
    if (cart) {
      //cart exists for user
      let itemIndex = cart.products.findIndex(p => p.productId == productId);
      console.log(itemIndex, 'item');

      if (itemIndex > -1) {
        console.log("Cart Item one");
        //product exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];
        console.log(productItem, 'itermkkk');
        totalQuantity -= productItem.quantity--;
        cart.totalQuantity = cart.totalQuantity - 1 ;
        cart.totalAmount = cart.totalAmount - price;
        console.log( cart.totalQuantity, 'totalQuantity');
        console.log( cart.totalAmount, 'if exist second');
        if (productItem.quantity < 1) {
            cart.products.splice(itemIndex, 1); // Remove item if quantity is less than 1
        }
        totalAmount = cart.totalAmount - price;
        console.log(totalAmount, 'totalAmounttt')
      } 
      cart = await cart.save();
      // Calculate total quantity
      console.log("it comes here");
      return res.status(201).send(cart);

    } 
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }


};

