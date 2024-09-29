const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    noOfProduct: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
