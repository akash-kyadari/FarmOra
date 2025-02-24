import React from "react";
import { useNavigate } from "react-router-dom";

const BrandInfo = () => {
    const navigator = useNavigate();

    return (
        <section className="bg-secondary/10">
            <div className="w-[90vw] py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 justify-self-center">
                {/* Image Section */}
                <div className="flex justify-center items-center">
                    <img
                        src="../../public/fruits-splash.png"
                        alt="Hero Image"
                        className="w-[300px] md:max-w-[400px] h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
                        <h1 className="text-3xl lg:text-6xl font-bold uppercase">
                            Brand Info
                        </h1>
                        <p>
                            Welcome to our online fruit store, your one-stop destination for fresh, organic fruits delivered straight to your door. We source our produce from trusted local farms to ensure you get the highest quality fruits that are bursting with flavor and nutrients.
                        </p>
                        <p>
                            Whether you're looking for organic apples, juicy oranges, or exotic fruits, we offer a wide selection of seasonal produce. Experience the taste of nature, handpicked and delivered with care—because nothing compares to fresh, organic goodness!
                        </p>
                        <button className="btn flex items-center gap-2 btn " style={{ opacity: 1, transform: 'none' }} onClick={() => { navigator("/about") }} >
                            <span>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></path>
                                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"></path>
                                </svg>
                            </span>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandInfo;
