const CartItem = require('../../models/cart');

exports.getCart = async (req, res) => {
    try {
        // const userId = req.query.userId; // Assuming user is logged in and user ID is available in req.user
        const userId = req.query.userId;

        if (!userId) {
            return res.status(400).json({ message: 'Cart ID is required' });
        }
      // Find all cart items for the logged-in user
        const cartItems = await CartItem.find({ userId });

        res.json({ cartItems });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};