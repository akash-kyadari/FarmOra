import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
const AboutPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">About Us</h2>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Left side: Description */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            At <strong>Pure Organic Fruits</strong>, we believe in providing the highest quality organic fruits directly from nature to your doorstep. Our mission is to promote healthy living by making delicious, chemical-free fruits easily accessible to all.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
                        <ul className="list-disc pl-5 text-lg text-gray-600">
                            <li>100% Organic and chemical-free fruits.</li>
                            <li>Locally sourced, supporting sustainable farming practices.</li>
                            <li>Freshness guaranteed with every order.</li>
                            <li>Convenient online shopping and home delivery.</li>
                        </ul>
                    </div>

                    {/* Right side: Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://example.com/images/organic-fruits.jpg"
                            alt="Fresh Organic Fruits"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
                    <p className="text-lg text-gray-600 mb-4">
                        We are committed to offering only the best, organically grown fruits while supporting ethical farming practices. We care deeply about your health and the environment.
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
                    <p className="text-lg text-gray-600">
                        <Link to="/contact" className='text-primary'>Have any questions?</Link> Reach out to us via email or through our social media channels. We’re here to help!
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutPage;
