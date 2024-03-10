 const Product = require('../models/product');
 const products = require('../MOCK_PRODUCT.json');
// Controller function to get all products
exports.getAllProducts = async (req, res) => {
    
    try {
        res.json(products);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};