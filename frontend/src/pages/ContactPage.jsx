import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
const ContactPage = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form submission logic here, like sending an email or saving the data

        console.log(nameRef.current.value,
            emailRef.current.value,
            messageRef.current.value);
        alert('Thank you for contacting us! We will get back to you soon.');
        e.target.reset();
    };
    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Contact Us</h2>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Side: Contact Form */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Have questions or need more information? Fill out the form below and we'll get back to you as soon as possible.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg text-gray-700">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"

                                    ref={nameRef}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg text-gray-700">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"

                                    ref={emailRef}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg text-gray-700">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"

                                    ref={messageRef}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                    rows="4"
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Store Info */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            We are committed to delivering fresh, organic fruits and Vegetables. Below you can find our location and contact details.
                        </p>

                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Address:</strong> 123 Organic Lane, Fresh City, Healthland
                        </p>

                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Email:</strong> contact@farmora.com
                        </p>

                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Phone:</strong> +1 (800) 123-4567
                        </p>

                        <div className="">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h3>
                            <p className="text-lg text-gray-600 mb-4">
                                We are passionate about providing fresh and organic fruits and vegies to our customers. Here's what we offer:
                            </p>

                            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 font-bold">
                                <li>Organic Fruit Delivery to Your Doorstep</li>
                                <li>Seasonal Fruit Boxes for Healthy Living</li>
                                <li>Exclusive Deals for Our Subscribers</li>
                                <li>Custom Orders for Special Events or Businesses</li>
                            </ul>

                            <div className="mt-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us?</h4>
                                <p className="text-lg text-gray-600">
                                    We are committed to delivering fresh, organic, and delicious fruits and vegiesdirectly to you. Our products are carefully sourced to ensure that you get the highest quality with every order.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ContactPage;

