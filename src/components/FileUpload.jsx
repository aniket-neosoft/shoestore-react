import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fileUpload } from '../model/ProductCRUD';

const FileUpload = () => {
    const [id, setId] = useState(0);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const { _id } = useParams();

    useEffect(() => {
        if (_id) {
            setId(parseInt(_id, 10));
        }
    }, [_id]);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setImage(selectedFile);
    };

    const handleFileUpload = () => {
        fileUpload(id, image)
            .then(() => {
                window.alert('Image uploaded successfully...');
                navigate("../../manage/products")
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="mb-6">
            <label htmlFor="employee_pic" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Image
            </label>

            <input
                type="file"
                id="employee_pic"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-500"
                onChange={handleFileChange}
            />

            <button
                type="button"
                onClick={handleFileUpload}
                className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                UPLOAD
            </button>
        </div>
    );
};

export default FileUpload;
