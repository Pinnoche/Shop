const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
    const { name, price, description, category, imageUrl } = req.body;

    try {
        const product = await Product.create({ name, price, description, category, imageUrl });
        return res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, category, imageUrl } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, price, description, category, imageUrl },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
