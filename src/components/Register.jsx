import { useState } from "react";

export default function Register() {

    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formValues.fullName) errors.fullName = "Full Name is required.";
        if (!formValues.email) errors.email = "A valid email is required.";
        if (formValues.password.length < 6)
            errors.password = "Password must be at least 6 characters.";
        if (formValues.password !== formValues.confirmPassword)
            errors.confirmPassword = "Passwords must match.";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Form Data Submitted", formValues);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
                        Create an Account
                    </h2>

                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.fullName && (
                                <div className="text-red-600 text-sm mt-1">{formErrors.fullName}</div>
                            )}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.email && (
                                <div className="text-red-600 text-sm mt-1">{formErrors.email}</div>
                            )}
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleInputChange}
                                placeholder="Create a password"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.password && (
                                <div className="text-red-600 text-sm mt-1">{formErrors.password}</div>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formValues.confirmPassword}
                                onChange={handleInputChange}
                                placeholder="Confirm your password"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {formErrors.confirmPassword && (
                                <div className="text-red-600 text-sm mt-1">{formErrors.confirmPassword}</div>
                            )}
                        </div>

                        {/* Address */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formValues.address}
                                onChange={handleInputChange}
                                placeholder="Enter your address"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formValues.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={
                                    !formValues.fullName ||
                                    !formValues.email ||
                                    !formValues.password ||
                                    formValues.password !== formValues.confirmPassword
                                }
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}