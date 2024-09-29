const express = require('express');
const { makeCart, getCart, updateCart, deleteCart } = require('../controllers/cartController');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth')


router.use(requireAuth);
router.get('/cart', getCart);
router.post('/cart', makeCart );
router.put('/cart/:id/update', updateCart)
router.delete('/cart/:id/delete', deleteCart)
