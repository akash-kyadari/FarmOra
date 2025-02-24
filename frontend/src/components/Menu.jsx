import React from 'react';

const menuItems = [
    {
        name: 'Fresh Red Apples',
        price: '$3.99',
        image: 'https://fruits-selling-tcj.netlify.app/assets/apple-dU8UKi7U.png',
        alt: 'Fresh Red Apples',
    },
    {
        name: 'Fresh Oranges',
        price: '$4.99',
        image: 'https://fruits-selling-tcj.netlify.app/assets/orange-SYYSet8r.png',
        alt: 'Fresh Oranges',
    },
    {
        name: 'Fresh Avocado',
        price: '$5.99',
        image: 'https://fruits-selling-tcj.netlify.app/assets/avocado-CLmYh0bp.png',
        alt: 'Fresh Avocado',
    },
    {
        name: 'Fresh Cherries',
        price: '$2.99',
        image: 'https://fruits-selling-tcj.netlify.app/assets/cherry-K8SpylM9.png',
        alt: 'Fresh Cherries',
    },
];

const Menu = () => {
    return (
        <section className="">
            <div className="w-[90vw] pt-12 pb-20 mx-auto">
                <h1 className="text-2xl font-bold text-left pb-10 uppercase">Our Menu</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center px-4 py-2"
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="w-[60px] mb-4 scale-[1.2] transform scale-s"
                            />
                            <div>
                                <h1 className="text-lg font-semibold">{item.name}</h1>
                                <p className="text-lg font-semibold text-secondary">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
