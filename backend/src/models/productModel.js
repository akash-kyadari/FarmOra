import mongoose from "mongoose"
const Schema = mongoose.Schema;

// Define a common schema for fruits and vegetables
const productSchema = new Schema({
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
    health_benefits: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true
    },
    shelf_life: {
        type: String,
        required: true
    },
    is_organic: {
        type: Boolean,
        required: true
    },
    packaging_type: {
        type: String,
        required: true
    },
    usage_tips: {
        type: String,
        required: true
    },
    units: {
        type: String,
        required: true
    }
});

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema);

export default Product;
