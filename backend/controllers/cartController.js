const Cart = require('../models/cartModel');

exports.makeCart = async (req, res) => {
    const { name, price, description, category, imageUrl } = req.body;

    const user_id = req.user._id;

    try {
        const cart = await Cart.create({ name, price, description, category, imageUrl, user_id });
        return res.status(201).json({ message: 'Cart has been successfully', cart });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.getCart = async (req, res) => {
    const userId = req.user._id;
    try {
        const carts = await Cart.find({user_id : userId});
        if(carts.length == 0) {
            return res.status(404).json({message: "No Cart Available"})
        }
        return response.status(200).json({carts})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

exports.updateCart = async (req, res) => {
    const { noOfProduct } = req.body
    const { id } = req.params

    try {
        const updatedProduct = await Cart.findByIdAndUpdate( id, { noOfProduct }, {new: true} );
        if(!updatedProduct){
            return res.status(404).json({error: "Product not Found"})
        }
        return res.status(200).json({message: "Cart Updated Successfully", updatedProduct})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

exports.deleteCart = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCart = await Product.findByIdAndDelete(id);
        if(!deletedCart) {
            return res.status(404).json({error: 'Cart not Found'})
        }
        return res.status(200).json({message: "Cart Successfully Deleted"})
    } catch (error) {
        return res.status(500).json({error: error.message})   
    }
}