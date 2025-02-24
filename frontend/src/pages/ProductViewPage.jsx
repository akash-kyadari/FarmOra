import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchCart } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';

const ProductViewPage = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const navigator = useNavigate()
    const user = useSelector(state => state.auth.user);
    const cartItems = useSelector(state => state.cart.items) || [];
    const products = useSelector(state => state.products.items)

    const isInCart = cartItems.some(item => item._id === productId);

    useEffect(() => {
        if (products.length === 0) {  // ✅ Fetch only if Redux has no products
            dispatch(fetchProducts());
        }
    }, [dispatch]);

    const handleAddToCart = async (e) => {
        e.stopPropagation()
        if (!user) {
            alert("login first")// Redirect to login if not logged in
            return;
        }
        if (!isInCart) {
            try {
                await dispatch(addToCart({ productId: productId, quantity: 1 })).unwrap();
                dispatch(fetchCart());
            } catch (err) {
                // setError(err);
            }
        } else {
            navigator("/cart");
        }
    };

    console.log(productId);
    const product = products.find(item => item._id === productId);

    if (!product) {
        return <h1 className="text-center text-2xl font-bold mt-10">Product Not Found</h1>;
    }

    return (
        <>
            <Navbar />
            <div className="p-4 bg-gray-100 border-b border-gray-300 ">
                <button onClick={() => navigator("/products")} className="text-gray-700 hover:text-gray-900 cursor-pointer hover:scale-[1.15]">
                    ← Back to Products
                </button>
                {/* <Link to="/products">Back</Link> */}
            </div>
            <div className="container mx-auto p-8 text-2xl" >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div>
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-[100%] h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <div>
                            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            <div className="text-xl font-semibold mb-6">₹{product.price} / {product.units}</div>
                            <p className="text-gray-700 mb-8">{product.description}</p>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">Health Benefits</h2>
                                <ul className="list-disc pl-6 text-gray-700">
                                    {product.health_benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">Usage Tips</h2>
                                <ul className="list-disc pl-6 text-gray-700">
                                    {product.usage_tips}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4">
                                <p className="text-gray-700">Category: {product.category}</p>
                                <p className="text-gray-700">Shelf Life: {product.shelf_life}</p>
                                <p className="text-gray-700">Packaging: {product.packaging_type}</p>
                                <p className="text-gray-700">Organic: {product.is_organic ? 'Yes' : 'No'}</p>
                            </div>

                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={handleAddToCart}>
                                {isInCart ? "Go to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default ProductViewPage
