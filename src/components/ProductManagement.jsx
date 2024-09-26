import React, { useEffect, useState } from 'react';
import { deleteProductById, getAllShoes, updateShoe } from '../model/ProductCRUD';
import Shoe from '../classes/Shoe';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        initializedArray();
    }, []);

    const navigate = useNavigate();

    const initializedArray = () => {
        getAllShoes().then((data) => {
            const shoeList = data.map(shoeData => new Shoe(
                shoeData._id,
                shoeData.shoeName,
                shoeData.brandName,
                shoeData.category,
                shoeData.description,
                shoeData.price,
                shoeData.discount,
                shoeData.size,
                shoeData.color,
                shoeData.image,
                shoeData.gender
            ));
            setProducts(shoeList);
            setAllProducts(shoeList);
        }).catch(error => console.log(error));
    };

    const onSearch = () => {
        filteredProducts();
    };

    const filteredProducts = () => {
        if (!searchQuery) {
            setProducts(allProducts);
            return;
        }

        const lowerSearch = searchQuery.toLowerCase();
        const filtered = allProducts.filter(product =>
            product._id.toString().includes(lowerSearch) ||
            product.shoeName.toLowerCase().includes(lowerSearch) ||
            product.category.toLowerCase().includes(lowerSearch) ||
            product.description.toLowerCase().includes(lowerSearch)
        );
        setProducts(filtered);
    };

    const editProduct = (product) => {
        setSelectedProduct(new Shoe(
            product._id,
            product.shoeName,
            product.brandName,
            product.category,
            product.description,
            product.price,
            product.discount,
            product.size,
            product.color,
            product.image,
            product.gender
        ));
    };

    // Cancel edit handler
    const cancelEdit = () => {
        setSelectedProduct(null);
    };

    // Save edited product
    const saveProduct = () => {
        if (selectedProduct) {
            updateShoe(selectedProduct).then(() => {
                initializedArray();
                setSelectedProduct(null);
            }).catch(error => console.log(error));
        }
    };

    // Delete product handler
    const deleteProduct = (product) => {
        deleteProductById(product._id).then(() => {
            alert('Product Deleted Successfully');
            initializedArray();
            setSelectedProduct(null);
        }).catch(error => console.log(error));
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Product Management</h2>

            <div className="flex items-center mb-6 bg-white border border-gray-300 rounded-lg shadow-md p-2">
                {/* Search Input */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, category, etc."
                    className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                />
                {/* Search Button */}
                <button
                    className="ml-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
                    onClick={onSearch}
                >
                    Search
                </button>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
                    <thead>
                        <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="border-t">
                                <td className="px-4 py-2">{product._id}</td>
                                <td className="px-4 py-2 max-w-[100px]">{
                                    product.image !== null ? (
                                        <img
                                            className="w-[40%]"
                                            src={product.image.data}
                                            alt={product.shoeName}
                                        />
                                    ) : (
                                        <div 
                                        className="w-[40%] flex items-center justify-center bg-gray-200 text-gray-600 text-xs"
                                        >
                                            No Image Available
                                        </div>
                                    )
                                }</td>
                                <td className="px-4 py-2">{product.shoeName}</td>
                                <td className="px-4 py-2">{product.description}</td>
                                <td className="px-4 py-2">{Number(product.price) ? `$${Number(product.price).toFixed(2)}` : 'N/A'}</td>
                                <td className="px-4 py-2">{product.category}</td>
                                <td className="px-4 py-2">
                                    {/* <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded mr-2"
                                        onClick={() => editProduct(product)}
                                    >
                                        Edit
                                    </button> */}

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => editProduct(product)}
                                        style={{ marginRight: '8px' }} // To replicate the spacing between buttons
                                    >
                                        Edit
                                    </Button>
                                    {/* <button
                                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                                        onClick={() => deleteProduct(product)}
                                    >
                                        Delete
                                    </button> */}

                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        onClick={() => deleteProduct(product)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Form */}
            {selectedProduct && (
                <div className="mt-8 p-6 bg-gray-50 border border-gray-300 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Edit Product</h3>

                    <div className="grid grid-cols-1 gap-4">
                        <label className="block">
                            Name:
                            <input
                                value={selectedProduct.shoeName}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, shoeName: e.target.value })}
                                className="mt-1 block w-full p-2 border rounded-md"
                                type="text"
                            />
                        </label>

                        <label className="block">
                            Brand Name:
                            <input
                                value={selectedProduct.brandName}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, brandName: e.target.value })}
                                className="mt-1 block w-full p-2 border rounded-md"
                                type="text"
                            />
                        </label>

                        <label className="block">
                            Description:
                            <input
                                value={selectedProduct.description}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
                                className="mt-1 block w-full p-2 border rounded-md"
                                type="text"
                            />
                        </label>

                        <label className="block">
                            Price:
                            <input
                                value={selectedProduct.price}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, price: parseFloat(e.target.value) })}
                                className="mt-1 block w-full p-2 border rounded-md"
                                type="number"
                            />
                        </label>

                        <label className="block">
                            Discount(%):
                            <input
                                value={selectedProduct.discount}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, discount: parseFloat(e.target.value) })}
                                className="mt-1 block w-full p-2 border rounded-md"
                                type="number"
                            />
                        </label>

                        <label className="block">
                            Size:
                            <input
                                value={selectedProduct.size}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, size: e.target.value })}
                                className="mt-1 block w-full p-2 border rounded-md"
                                type="text"
                            />
                        </label>

                        <label className="block">
                            Category:
                            <input
                                value={selectedProduct.category}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
                                className="mt-1 block w-full p-2 border rounded-md"
                                type="text"
                            />
                        </label>

                        <label className="block">
                            Color:
                            <input
                                value={selectedProduct.color}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, color: e.target.value })}
                                className="mt-1 block w-full p-2 border rounded-md"
                                type="text"
                            />
                        </label>

                        <label className="block">
                            Gender:
                            <select
                                value={selectedProduct.gender}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, gender: e.target.value })}
                                className="mt-1 block w-full p-2 border rounded-md"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Unisex">Unisex</option>
                            </select>
                        </label>

                        <label className="block size-1/5">
                            Image:
                            {/* <img src={selectedProduct.image?.data} alt="Product" className="mt-1 block w-full p-2 border rounded-md" /> */}

                            {selectedProduct.image !== null ? (
                                <img
                                    className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                                    src={selectedProduct.image.data}
                                    alt={selectedProduct.shoeName}
                                />
                            ) : (
                                <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-600">
                                    No Image Available
                                </div>
                            )}
                        </label>
                    </div>

                    <div className="mt-4 flex space-x-3">
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
                            onClick={saveProduct}
                        >
                            Save
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded"
                            onClick={cancelEdit}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded"
                            onClick={() => navigate(`../../editpic/${selectedProduct._id}`)}
                        >
                            Edit Image
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductManagement;