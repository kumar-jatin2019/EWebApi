const Cart = require('../../models/cart');

exports.addToCart = async (req, res) => {
  // try {
  const { productId, quantity, name, price, thumbnail, description, totalQuantity , totalAmount} = req.body;
  const { email, password, userId } = req.body;

   
  try {
   let  cart = [];
     cart = await Cart.findOne({ userId });
    console.log(cart, 'cartttt');
    let totalQuantity = 0;
    let totalAmount = 0;
    if (cart) {
      //cart exists for user
      let itemIndex = cart.products.findIndex(p => p.productId == productId);
      console.log(itemIndex, 'item');

      if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];

        totalQuantity += productItem.quantity++;
        cart.products[itemIndex] = productItem;
        cart.totalQuantity = cart.totalQuantity + 1;
        cart.totalAmount = cart.totalAmount +  price;
        console.log( cart.totalAmount, 'if exist');
        console.log( cart.totalQuantity, 'if exist Quantity');
      } else {
        //product does not exists in cart, add new item
        cart.products.push({ productId, quantity, name, price, description, thumbnail });
        let productItem = cart.products[itemIndex];
        cart.products[itemIndex] = productItem;
        cart.totalQuantity = cart.totalQuantity + 1;
        cart.totalAmount = cart.totalAmount + price;
        console.log( cart.totalQuantity, 'totalQuantity');
        console.log( cart.totalAmount, 'if exist second');
      }
      cart = await cart.save();
      // Calculate total quantity
      return res.status(201).send(cart);

    } else {
      console.log("First Time Cart Created");
      totalQuantity = totalQuantity + quantity;
      totalAmount = totalAmount + price;

      console.log(totalAmount, 'totalAmountttelse');
      console.log(totalQuantity, 'totalQuantityyyyy');

      const newCart = await Cart.create({
        userId,
        totalQuantity,
        totalAmount,
        products: [{ productId, quantity, name, price, thumbnail, description }]
      });

      return res.status(201).send(newCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }


};

