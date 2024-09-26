import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

export default function ProductList() {
    const initialData = useLoaderData();
    const [products, setProducts] = useState(initialData);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        navigate('/cart')
    };

    console.log("products",products);
    
    return (
        <div className="flex flex-wrap justify-center gap-10">
            {products.map((product) => (
                <div key={product.id} className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
                    {/* <img className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                        src={product.image.data} alt={product.shoeName} /> */}

                    {product.image !== null ? (
                        <img
                            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                            src={product.image.data}
                            alt={product.shoeName}
                        />
                    ) : (
                        <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-600">
                            No Image Available
                        </div>
                    )}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-800">{product.shoeName}</div>
                        <p className="text-gray-600 text-base mb-4">
                            {product.description}
                        </p>
                        <dl className="text-sm text-gray-500 space-y-1">
                            <div className='flex justify-between'>
                                <dt className="inline font-semibold">Brand:</dt>
                                <dd className="inline text-gray-700"> {product.brandName}</dd>
                            </div>
                            <div className='flex justify-between'>
                                <dt className="inline font-semibold">Category:</dt>
                                <dd className="inline text-gray-700"> {product.category}</dd>
                            </div>
                            <div className='flex justify-between'>
                                <dt className="inline font-semibold">Gender:</dt>
                                <dd className="inline text-gray-700"> {product.gender}</dd>
                            </div>
                            <div className='flex justify-between'>
                                <dt className="inline font-semibold">Size:</dt>
                                <dd className="inline text-gray-700"> {product.size}</dd>
                            </div>
                            <div className='flex justify-between'>
                                <dt className="inline font-semibold">Color:</dt>
                                <dd className="inline text-gray-700"> {product.color}</dd>
                            </div>
                        </dl>

                        <p className="text-lg text-gray-900 font-semibold mt-4">
                            ${product.price - (product.price * product.discount / 100)}
                            <span className="text-sm line-through text-gray-500 ml-2">
                                ${product.price}
                            </span>
                            <span className="text-green-600 font-bold text-sm pl-2">
                                {product.discount}% off
                            </span>
                        </p>

                        <button className="mt-4 w-full bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition-colors duration-300"
                            onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};