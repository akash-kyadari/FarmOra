import Product from "../models/productModel.js"
export const getAllProducts = async (req, res) => {
    //getting all products 
    try {
        const products = await Product.find({});

        res.status(200).json({
            status: 'success',
            length: products.length,
            data: {
                products
            }
        });
    } catch (error) {
        res.json({
            message: error.message
        })
    }

}
export const getSingleProduct = async (req, res) => {
    //getting all products 
    try {
        const products = await Product.find({ _id: req.params.id });

        res.status(200).json({
            status: 'success',
            length: products.length,
            data: {
                products
            }
        });
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}