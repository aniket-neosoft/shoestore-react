import React, { useState } from 'react';
import Shoe from '../classes/Shoe';
import { addShoe } from '../model/ProductCRUD';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(new Shoe('', '', '', '', '', 0, 0, '', '', null, ''));

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            image: e.target.files[0],
        }));
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData._id) formErrors._id = 'Article Number is required.';
        if (!formData.shoeName) formErrors.shoeName = 'Shoe Name is required.';
        if (!formData.brandName) formErrors.brandName = 'Brand Name is required.';
        if (!formData.category) formErrors.category = 'Category is required.';
        if (!formData.description) formErrors.description = 'Description is required.';
        if (!formData.price || formData.price <= 0) formErrors.price = 'Price is required and must be greater than 0.';
        if (!formData.discount || formData.discount < 0 || formData.discount > 100) formErrors.discount = 'Discount must be between 0 and 100.';
        if (!formData.size) formErrors.size = 'Size is required.';
        if (!formData.color) formErrors.color = 'Color is required.';
        if (!formData.gender) formErrors.gender = 'Gender is required.';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form Submitted', formData);

            const newShoe = new Shoe(
                formData._id,
                formData.shoeName,
                formData.brandName,
                formData.category,
                formData.description,
                formData.price,
                formData.discount,
                formData.size,
                formData.color,
                formData.image,
                formData.gender
            );

            const result = await addShoe(newShoe, formData.image);

            // console.log("resullt : ",result);
            if (result.success === false) {
                window.alert(result.message);
            } else
                window.alert(`Product with id ${formData._id} is added successfully!`);

            navigate("../../product");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="_id" className="block text-gray-700 font-semibold mb-2">Article Number</label>
                        <input
                            type="number"
                            id="_id"
                            name="_id"
                            value={formData._id}
                            onChange={handleChange}
                            placeholder="Enter article number"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors._id && <div className="text-red-600 text-sm mt-1">{errors._id}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="shoeName" className="block text-gray-700 font-semibold mb-2">Shoe Name</label>
                        <input
                            type="text"
                            id="shoeName"
                            name="shoeName"
                            value={formData.shoeName}
                            onChange={handleChange}
                            placeholder="Enter shoe name"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.shoeName && <div className="text-red-600 text-sm mt-1">{errors.shoeName}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="brandName" className="block text-gray-700 font-semibold mb-2">Brand Name</label>
                        <input
                            type="text"
                            id="brandName"
                            name="brandName"
                            value={formData.brandName}
                            onChange={handleChange}
                            placeholder="Enter brand name"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.brandName && <div className="text-red-600 text-sm mt-1">{errors.brandName}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Enter category"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.category && <div className="text-red-600 text-sm mt-1">{errors.category}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter description"
                            rows="4"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.description && <div className="text-red-600 text-sm mt-1">{errors.description}</div>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.price && <div className="text-red-600 text-sm mt-1">{errors.price}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="discount" className="block text-gray-700 font-semibold mb-2">Discount (%)</label>
                        <input
                            type="number"
                            id="discount"
                            name="discount"
                            value={formData.discount}
                            onChange={handleChange}
                            placeholder="Enter discount percentage"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.discount && <div className="text-red-600 text-sm mt-1">{errors.discount}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="size" className="block text-gray-700 font-semibold mb-2">Size</label>
                        <input
                            type="text"
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            placeholder="Enter size"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.size && <div className="text-red-600 text-sm mt-1">{errors.size}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="color" className="block text-gray-700 font-semibold mb-2">Color</label>
                        <input
                            type="text"
                            id="color"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            placeholder="Enter color"
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.color && <div className="text-red-600 text-sm mt-1">{errors.color}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">Upload Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-700 font-semibold mb-2">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Unisex">Unisex</option>
                        </select>
                        {errors.gender && <div className="text-red-600 text-sm mt-1">{errors.gender}</div>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="submit"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
