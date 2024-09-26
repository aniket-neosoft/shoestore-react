import React, { useState } from 'react';

const Categories = () => {
    const [imgObject1] = useState({ src: "airforce.png" });
    const [imgObject2] = useState({ src: "sports.jpg" });
    const [imgObject3] = useState({ src: "formal.jpg" });

    return (
        <div className="bg-gray-100 h-screen">
            <div className="container mx-auto px-4 py-8">
                <section className="categories text-center">
                    <h2 className="text-3xl font-semibold mb-8">Shop by Category</h2>
                    <div className="category-grid flex flex-wrap gap-4 justify-center">

                        <div className="category bg-white p-4 rounded-lg shadow-md w-48 text-center">
                            <img src={imgObject2.src} alt="Running" className="h-40 w-40 rounded-lg mb-4" />
                            <h3 className="text-xl font-medium mb-2">Running Shoes</h3>
                        </div>

                        <div className="category bg-white p-4 rounded-lg shadow-md w-48 text-center">
                            <img src={imgObject1.src} alt="Sneakers" className="h-40 w-40 rounded-lg mb-4" />
                            <h3 className="text-xl font-medium mb-2">Sneakers</h3>
                        </div>

                        <div className="category bg-white p-4 rounded-lg shadow-md w-48 text-center">
                            <img src={imgObject3.src} alt="Formal" className="h-40 w-40 rounded-lg mb-4" />
                            <h3 className="text-xl font-medium mb-2">Formal Shoes</h3>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default Categories;
