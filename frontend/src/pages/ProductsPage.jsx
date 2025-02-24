import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import { useSelector, useDispatch } from "react-redux"
// import products from '../../final-list.json'
import { fetchProducts } from '../store/productSlice'
import { addToCart } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const user = useSelector(state => state.auth.user);
    const cartItems = useSelector(state => state.cart.items) || [];
    const isInCart = cartItems.some(item => item._id === product._id);

    const handleAddToCart = async (e) => {
        e.stopPropagation()
        if (!user) {
            alert("login first")// Redirect to login if not logged in
            return;
        }
        if (!isInCart) {
            try {
                await dispatch(addToCart({ productId: product._id, quantity: 1 })).unwrap();
                dispatch(fetchCart());
            } catch (err) {
                // setError(err);
            }
        } else {
            navigator("/cart");
        }
    };
    return (
        <>
            <div className="p-4 w-[245px] flex justify-center items-center min-h-[406px] h-[406px]">{/*//sm:w-1/2 md:w-1/3 lg:w-3/18 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer h-[390px] flex flex-col justify-center items-center">
                    <div className='flex justify-center items-center w-48 h-48'>
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-48 h-48 object-cover mt-2.5 rounded"
                        />
                    </div>
                    <div className="p-4  flex flex-col justify-around h-[190px] gap-2.5">
                        <h3 className="text-xl font-semibold text-gray-800 w-48 overflow-hidden whitespace-nowrap">{product.name}</h3>
                        <p className="text-gray-600 mt-2 h-[48px]">{product.description}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-[22px] font-bold text-green-600">₹{product.price}</span>
                            <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300 cursor-pointer" onClick={handleAddToCart}>
                                {isInCart ? "Go to Cart" : "Add to Cart"}

                            </button>
                        </div>
                    </div>
                </div>
            </div></>
    )
}


const ProductsPage = () => {
    const user = useSelector(state => state.auth.user);
    const { items: products, status } = useSelector((state) => state.products);
    const dispatch = useDispatch()
    const navigator = useNavigate()
    useEffect(() => {
        if (products.length === 0) {  // ✅ Fetch only if Redux has no products
            dispatch(fetchProducts());
        }
    }, [user]);

    return (
        <>
            <Navbar></Navbar>
            <div className=" mx-auto py-8">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Products</h2>
                <div className="paddingInMobile flex flex-wrap justify-center">
                    {products.map((product) => (
                        <div key={product.id} className='' onClick={() => {
                            navigator(`/products/${product._id}`)
                        }}>
                            <ProductCard key={product.name} product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductsPage
