import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import products1 from '../products.json'
import { fetchProducts } from '../store/productsSlice.js'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollToTop } from '../App';
import { getCartItems, updateCartItems } from '../store/cartSlice.js';

export const ProductCard = ({ product }) => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const { user, error } = useSelector(store => store.auth)
    const data = useSelector(store => store.cart.data)
    const [buttonState, setButtonState] = useState(false)


    useEffect(() => {
        console.log("Cart updated:", data);
    }, [data]);


    const handleAddToCart = (e) => {
        e.stopPropagation();
        if (!user) {
            return alert("Please login first.");
        }
        if (!buttonState) {
            dispatch(updateCartItems({
                productId: product._id,
                quantity: 1
            }));
        } else {
            navigator("/cart")
        }
        setButtonState(true)

    }
    return (
        <>
            {error && <p>{error.message}</p>}
            <div className="p-4 w-[245px] flex justify-center items-center min-h-[406px] h-[406px]">{/*//sm:w-1/2 md:w-1/3 lg:w-3/18 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer h-[390px]">
                    <div className='flex justify-center items-center w-48 h-48'>
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-48 h-48 object-cover mt-2.5"
                        />
                    </div>
                    <div className="p-4  flex flex-col justify-around h-[190px] gap-2.5">
                        <h3 className="text-xl font-semibold text-gray-800 w-48 overflow-hidden whitespace-nowrap">{product.name}</h3>
                        <p className="text-gray-600 mt-2 h-[48px]">{product.description}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-[22px] font-bold text-green-600">₹{product.price}</span>
                            <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300 cursor-pointer" onClick={handleAddToCart}>
                                {
                                    buttonState ? "Go to Cart" : "Add to Cart"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div></>
    );
};


const ProductPage = ({ }) => {
    const navigator = useNavigate();

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(store => store.products);
    const { user } = useSelector(store => store.auth);
    const productsfromStore = data;
    useEffect(() => {
        const productsfromStore = JSON.parse(sessionStorage.getItem('products'));

        if (productsfromStore) {
            console.log('Using cached products');
        } else {
            console.log("dispatching ");
            dispatch(fetchProducts())
        }
    }, [dispatch])

    useEffect(() => {
        console.log(productsfromStore);
        console.log(user);
    }, [productsfromStore])
    if (loading) return <h2 className="text-center text-blue-500 mt-10">Loading...</h2>;
    if (error) return <h2 className="text-center text-red-500 mt-10">Error: {error}</h2>;
    if (productsfromStore.length === 0) return <h2 className="text-center text-red-500 mt-10">Products Not Found</h2>
    else {



        let products = productsfromStore;

        return (
            <>
                <ScrollToTop />
                <Navbar></Navbar>
                <div className=" mx-auto py-8">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Products</h2>
                    <div className="paddingInMobile flex flex-wrap justify-center">
                        {products.map((product) => (
                            // <Link key={product.id} to={`/products/${product.id}`}>
                            // </Link>
                            <div key={product._id} className='' onClick={() => {
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
}




export default ProductPage;

