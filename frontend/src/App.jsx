import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Cart from './components/Cart'
import Profile from './pages/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './store/authSlice'
import { fetchCart } from './store/cartSlice'
import ProductViewPage from './pages/ProductViewPage'
function App() {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser()); // Sync user on refresh
    }, [dispatch]);


    useEffect(() => {
        if (user) {
            dispatch(fetchCart());  // ✅ Fetch cart only when user is present
        }
    }, [dispatch, user]);
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" >
                    <Route index element={<ProductsPage />} />
                    <Route path=":productId" element={<ProductViewPage />} />
                </Route>
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignupPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </>
    )
}

export default App
