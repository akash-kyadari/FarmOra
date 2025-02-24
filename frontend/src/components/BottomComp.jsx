import React from "react";
import { useNavigate, Link } from "react-router-dom"
const FreshFruitsBanner = () => {
    const navigator = useNavigate();
    return (
        <section className="w-[90vw] m-[50px] px-[80px] justify-self-center">
            <div
                className="py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 rounded-3xl"
                style={{
                    backgroundImage: "url('../../public/banner.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }}
            >
                <div></div> {/* Empty column for layout symmetry */}

                {/* Content Section */}
                <div className="flex flex-col justify-center p-4">
                    <div className="text-center md:text-left space-y-5 lg:max-w-[400px]">
                        <h1 className="text-3xl lg:text-5xl font-bold uppercase">
                            Get Fresh Fruits & Vegies Today
                        </h1>
                        <p>
                            Discover the taste of nature with our fresh, handpicked fruits and Vegetables.
                            We deliver organic produce straight from the farm to your
                            doorstep, ensuring quality and freshness in every bite!
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <button className="btn flex items-center gap-2 btn " style={{ opacity: 1, transform: 'none' }} onClick={() => { navigator("/products") }} >
                                <span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"></path>
                                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"></path>
                                    </svg>
                                </span>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreshFruitsBanner;
