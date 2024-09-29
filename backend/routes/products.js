const express = require('express');
const router = express.Router();
const { createProduct,
        getAllProducts,
        getProductById,
        updateProduct, 
        deleteProduct } = require('../controllers/productController');
const requireAuth = require('../middleware/requireAuth')


router.get('/products', getAllProducts);
router.use(requireAuth);
router.post('/product/create', createProduct);
router.get('/product/:id', getProductById);
router.post('/product/:id/update', updateProduct);
router.post('/product/:id/delete', deleteProduct);

module.exports = router;