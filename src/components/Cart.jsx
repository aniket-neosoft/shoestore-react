import React from 'react';

const Cart = () => {
    return (
        <div className="bg-gray-100 h-screen">
            <div className="container mx-auto px-4 py-8">
                <section className="cart text-center">
                    <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-gray-800 text-left text-sm uppercase font-medium">
                                        Product
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-gray-800 text-left text-sm uppercase font-medium">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-gray-800 text-left text-sm uppercase font-medium">
                                        Quantity
                                    </th>
                                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-gray-800 text-left text-sm uppercase font-medium">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm">Running Shoes</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm">$49.99</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm">1</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm">$49.99</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm">Casual Sneakers</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm">$59.99</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm">2</td>
                                    <td className="px-6 py-4 border-b border-gray-200 text-gray-800 text-sm">$119.98</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col items-center mt-8">
                        <p className="text-xl font-semibold mb-4">Total: $169.97</p>
                        <a
                            href="#"
                            className="inline-block bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
                        >
                            Checkout
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cart;
