import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../store/authSlice';
const LoginPage = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const { error } = useSelector((store) => store.auth);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        try {
            await dispatch(login({ email, password })).unwrap();
            navigator("/"); // Redirect on success
        } catch (error) {
            console.error("Registration failed:", error.message); // Error is handled properly
        }
    }

    return (
        <>

            <div className="flex items-center justify-center min-h-screen bg-gray-100 ">

                <div className="bg-white p-8 rounded-lg shadow-lg w-96 h-[500px] flex flex-col gap-2.5 justify-center items-center">
                    <div className="w-[100%]">
                        <button
                            onClick={() => navigator(-1)}
                            className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 mb-4 cursor-pointer"
                        >
                            Back
                        </button>
                    </div>
                    <h2 className="text-2xl font-bold text-center">Log In to Your Organic Basket</h2>
                    <p className="text-gray-600 text-center mt-2">
                        Hey, Enter your details to get sign in to your account
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <input
                            type="text"
                            placeholder="Enter Email Id"
                            ref={emailRef}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Enter the Password"
                            ref={passwordRef}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required
                        />



                        <button
                            type="submit"
                            className="font-averia text-[20px] w-full bg-secondary hover:bg-[#df183d] text-white font-bold py-3 rounded-lg mt-4 transition duration-300 cursor-pointer"
                            onSubmit={handleSubmit}
                        >
                            LogIn
                        </button>
                    </form>
                    {error && <p className="text-red-500 bg-red-100 p-2 rounded">{error.message}</p>}
                    <p className="text-center text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <Link to="/sign-up" className="text-blue-500 hover:underline">
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default LoginPage
