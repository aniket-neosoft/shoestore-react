import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [imgObject1] = useState({ src: 'airforce.png' });
    const [imgObject2] = useState({ src: 'sports.jpg' });
    const [imgObject3] = useState({ src: 'formal.jpg' });

    const handleShopNowButton = () => {
        navigate('/product');
    };

    return (
        <div>
            <section className="hero bg-gray-900 text-white text-center py-20 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to ShoeStore</h1>
                <p className="text-xl mb-8">Your one-stop shop for the latest and greatest in footwear.</p>
                <button
                    onClick={handleShopNowButton}
                    className="btn bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                >
                    Shop Now
                </button>
            </section>

            <section className="featured-products py-8 text-center bg-gray-100">
                <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
                <div className="product-grid flex flex-wrap justify-center gap-4">

                    <div className="product bg-white p-4 rounded-lg shadow-md text-center w-48 flex flex-col justify-between">
                        <img src={imgObject2.src} alt="Running Shoes" className="h-40 w-40 rounded-md mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Running Shoes</h3>
                        <p className="text-orange-500 text-lg font-semibold">$49.99</p>
                    </div>

                    <div className="product bg-white p-4 rounded-lg shadow-md text-center w-48 flex flex-col justify-between">
                        <img src={imgObject1.src} alt="Casual Sneakers" className="h-40 w-40 rounded-md mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Casual Sneakers</h3>
                        <p className="text-orange-500 text-lg font-semibold">$59.99</p>
                    </div>

                    <div className="product bg-white p-4 rounded-lg shadow-md text-center w-48 flex flex-col justify-between">
                        <img src={imgObject3.src} alt="Formal Shoes" className="h-40 w-40 rounded-md mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Formal Shoes</h3>
                        <p className="text-orange-500 text-lg font-semibold">$69.99</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
