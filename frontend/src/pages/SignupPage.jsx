import React, { useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { register } from '../store/authSlice.js';
const SignupPage = () => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasscodeRef = useRef();
    const otpRef = useRef();

    const dispatch = useDispatch();
    const navigator = useNavigate();
    let { error } = useSelector((state) => state.auth);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasscodeRef.current.value;
        if (password !== confirmPassword) {
            error = {
                message: "password and confirm password deosn't match"

            }
            alert("password and confirm password doesn't match")
        }
        else {

            try {
                await dispatch(register({ fullName, email, password })).unwrap();
                navigator("/"); // Redirect on success
            } catch (error) {
                console.error("Registration failed:", error.message); // Error is handled properly
            }

        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96  flex flex-col gap-2.5 justify-center items-center">
                <div className="w-[100%]">
                    <button
                        onClick={() => navigator("/products")}
                        className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300 mb-4 cursor-pointer"
                    >
                        Back
                    </button>
                </div>
                <h2 className="text-2xl font-bold text-center">Sign Up for Farm-Fresh Goodness!</h2>
                <p className="text-gray-600 text-center mt-2">
                    Enter your details to create an account
                </p>

                <form onSubmit={handleSubmit} className="mt-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        ref={fullNameRef}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Email Id"
                        ref={emailRef}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Passcode"
                        ref={passwordRef}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Confirm Passcode"
                        ref={confirmPasscodeRef}
                        className="w-full p-3 border border-gray-300 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />
                    {
                        <input
                            type="text" inputMode="numeric" pattern="[0-9]*"
                            placeholder="Otp"
                            ref={otpRef}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            required

                        />}

                    <button
                        type="submit"
                        className="font-averia text-[20px] w-full bg-secondary hover:bg-[#df183d] text-white font-bold py-3 rounded-lg mt-4 transition duration-300 cursor-pointer"
                    >
                        Sign Up
                    </button>
                </form>
                {error && <p className="text-red-500 bg-red-100 p-2 rounded">{error.message}</p>}

                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignupPage
