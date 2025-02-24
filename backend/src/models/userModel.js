import mongoose from 'mongoose'
import validator from 'validator'
const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validator.isEmail, 'please enter a valid email']
        },
        password: {
            type: String,
            minlength: 8,
            select: false,
            required: true,
        },
        cartItems: {
            type: [{ productId: String, quantity: Number }],
            default: [],
        }
    }, {
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);
export default User;