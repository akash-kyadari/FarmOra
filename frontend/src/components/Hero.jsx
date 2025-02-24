import React from 'react';
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigator = useNavigate();
    return (
        <section>
            <div className="w-[90vw] grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative justify-self-center">
                <div className="flex flex-col justify-center py-14 md:py-0 relative z-10 items-center">
                    <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
                        <h1 className="text-5xl xl:text-6xl lg:text-5xl font-bold leading-relaxed xl:leading-normal font-averia" style={{ opacity: 1, transform: 'none' }}>
                            Healthy <span className="text-secondary">Fruits!</span><br /> Fresh <span className="text-secondary">Veggies!!</span>
                        </h1>
                        <p className="text-2xl tracking-wide" style={{ opacity: 1, transform: 'none' }}>Order Now For Fresh Healthy Life</p>
                        <p className="text-gray-400" style={{ opacity: 1, transform: 'none' }}>
                            Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order
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
                <div className="flex justify-center items-center">
                    <img src="../../public/veges.jpg" alt="Hero Image" className="w-[350px] md:w-[550px] " style={{ opacity: 1, transform: 'none' }} />
                </div>
                <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
                    <img src="./assets/leaf-CCkW9aP6.png" alt="" className="w-full md:max-w-[300px]" style={{ opacity: 1, transform: 'none' }} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
