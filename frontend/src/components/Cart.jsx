import React, { useEffect } from 'react'
import { TiMinus } from "react-icons/ti";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchCart } from '../store/cartSlice';
import Navbar from './Navbar'
const CartItem = ({ product, quantity }) => {
    const dispatch = useDispatch();

    const handleRemoveItem = async () => {
        try {
            console.log('dispatching');
            await dispatch(addToCart({ productId: product._id, quantity: -quantity })).unwrap(); // ✅ Remove item from cart

        } catch (err) {
            console.error("Error removing item:", err);
        }
    };

    const handleQuantityChange = async (q) => {
        try {
            console.log('dispatching');
            await dispatch(addToCart({ productId: product._id, quantity: q })).unwrap(); // ✅ Remove item from cart

        } catch (err) {
            console.error("Error removing item:", err);
        }
    };

    return (
        <div className="flex items-center border-b pb-4">
            <img src={product.image_url} alt="Product 1" className="w-20 h-20 object-cover rounded mr-4" />
            <div className="flex-1">
                <h1 className="text-lg font-semibold">{product.name}</h1>
                <p className="text-gray-600">{product.price}</p>
                <div className="flex items-center space-x-2 mt-2">
                    <button className="bg-gray-300 w-6 mr-1  rounded flex justify-center items-center h-6 cursor-pointer" onClick={() => handleQuantityChange(-1)}><TiMinus /></button>
                    <input type="text" pattern="/d*" value={product.quantity} className="w-12 text-center border rounded m-0" disabled />
                    <button className="bg-gray-300 w-6 ml-1  rounded flex justify-center items-center h-6 cursor-pointer" onClick={() => handleQuantityChange(1)}><FiPlus /></button>

                </div>
            </div>
            <button className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer" onClick={() => handleRemoveItem()}>Remove</button>
        </div>
    )
}

const Cart = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items) || [];
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        if (user) {
            dispatch(fetchCart());  // ✅ Fetch cart only when user is logged in
        }
    }, [dispatch]);

    if (!user) {
        return <>
            <Navbar />
            <div className="text-center text-black-500 text-4xl mt-20"><h1>Please login to view your cart.</h1></div></>;
    }

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <Navbar />
            <div className=" bg-gray-100 flex justify-center items-center w-full min-h-full">
                <div className="bg-white shadow-md rounded-lg w-[96%] h-[85vh] flex flex-col ">
                    <div className="bg-gray-800 text-white p-4  text-center my-auto">
                        <button className=" text-white text-sm flex items-center hover:scale-[1.1] cursor-pointer"
                            onClick={() => navigator("/products")}>
                            ← Back to products
                        </button>
                        <h1 className="text-xl font-bold">Your Shopping Cart</h1>
                    </div>

                    <div className="flex-1 p-4 space-y-4  ">
                        {(cartItems.length > 0) ? (
                            cartItems.map(item => (
                                <CartItem key={item._id} product={item} quantity={item.quantity} />
                            ))
                        ) : (
                            <h1 className='text-3xl flex justify-center items-center'>No Product Added</h1>
                        )}
                    </div>

                    {/* Checkout Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50">
                        <button className="bg-purple-500 text-white py-2 px-4 rounded mb-2 md:mb-0 md:mr-2">
                            Deliver to This Address
                        </button>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">
                            Click to Pay ₹{totalPrice}
                        </button>
                    </div>
                </div>
            </div>
            {/* // ) : (
            //     <>
            //         <h2>Please Login</h2>
            //         <Link to="/login">Login</Link>
            //     </>
            // )} */}
        </>
    )
}

export default Cart
