import Product from "../models/productModel.js";
import User from "../models/userModel.js";
export const getProductsInCart = async (req, res) => {
    try {

        const user = req.user;
        const productIds = user.cartItems.map(item => item.productId); // Extract product IDs

        // Fetch full product details
        let productsData = await Product.find({ _id: { $in: productIds } });
        const products = productsData.map(item => {
            item = item.toObject();
            item.quantity = user.cartItems.find(cartItem => cartItem.productId.toString() === item._id.toString()).quantity;
            return item;
        })

        res.status(200).json({
            status: "success",
            cartItems: products
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
export const addProductInCart = async (req, res) => {
    const productToAdd = req.body;
    try {
        if (!productToAdd.productId || !productToAdd.quantity) {
            return res.json({ message: "Both productId and quantity are required" })
        }

        // Check if the product exists in the database
        const product = await Product.findById(productToAdd.productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        let updatedCartItems = req.user.cartItems.map(item => {
            if (item.productId.toString() === productToAdd.productId.toString()) {
                return {
                    productId: item.productId,
                    quantity: item.quantity + productToAdd.quantity
                };
            }
            return item;
        });
        updatedCartItems = updatedCartItems.filter(item => item.quantity > 0)

        // If product is not already in cart, add it
        const productExists = req.user.cartItems.some(item => item.productId.toString() === productToAdd.productId.toString());
        if (!productExists) {
            updatedCartItems.push(productToAdd);
        }

        // Update user cart in database
        await User.updateOne({ _id: req.user._id }, { $set: { cartItems: updatedCartItems } });

        // Fetch updated cart with full product details
        const productIds = updatedCartItems.map(item => item.productId);
        const productsData = await Product.find({ _id: { $in: productIds } });

        // Attach quantity to each product
        const productsWithDetails = productsData.map(item => {
            item = item.toObject();
            item.quantity = updatedCartItems.find(cartItem => cartItem.productId.toString() === item._id.toString()).quantity;
            return item;
        });

        res.status(201).json({
            status: "Item added to cart successfully",
            cartItems: productsWithDetails // Return full product details
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}