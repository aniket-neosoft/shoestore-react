import React, { useRef, useState } from 'react';
import { login } from '../model/UserModel';
import { useDispatch } from 'react-redux';
import { setUser } from '../react-redux/userSlice';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [errorMessage, setMessage] = useState("");
    const passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{6,12}$";

    function validateEmail() {
        const email = emailRef.current.value.trim();
        if (
            !email.includes('@') ||
            email.startsWith('@') ||
            email.endsWith('@') ||
            email.endsWith('.') ||
            email.startsWith('.')
        ) {
            setEmailError('Please enter a valid email address!');
            setIsEmailValid(false);
        } else {
            setEmailError('');
            setIsEmailValid(true);
        }
    };

    function validatePassword() {
        const password = passwordRef.current.value;
        if (!password.match(passwordPattern)) {
            setPasswordError('Please enter a valid password! (6-12 characters, including uppercase, lowercase, number, and special character)');
            setIsPasswordValid(false);
        } else {
            setPasswordError('');
            setIsPasswordValid(true);
        }
    };

    function onSubmit(event) {
        event.preventDefault();
        validateEmail();
        validatePassword();

        if (isEmailValid && isPasswordValid) {
            const admin = {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };
            const response = login(admin.email, admin.password);

            if (response === true) {
                setMessage("");
                const expiry = new Date(new Date().setDate(new Date().getDate() + 1));
                const cookie = new Cookies("", {
                    path: '/',
                    expires: expiry
                });
                cookie.set("userMail", admin.email);
                dispatch(setUser(admin.email));
                window.alert("You have logged in successfully!");
                navigate("/home");
            } else {
                setMessage("Incorrect email or password!");
            }

        } else {
            console.log('Form is invalid');
        }
    };

    return (
        <form onSubmit={onSubmit} className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg h-screen" noValidate>
            <div>
                <small className="text-red-600">{errorMessage}</small>
            </div>
            <div className="mb-4">
                <label htmlFor="adminEmail" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                    type="email"
                    id="adminEmail"
                    ref={emailRef}
                    onBlur={validateEmail}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {emailError && <div className="text-red-500 text-sm mt-2">{emailError}</div>}
            </div>

            <div className="mb-6">
                <label htmlFor="adminPassword" className="block text-gray-700 font-bold mb-2">Password</label>
                <input
                    type="password"
                    id="adminPassword"
                    ref={passwordRef}
                    onBlur={validatePassword}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {passwordError && <div className="text-red-500 text-sm mt-2">{passwordError}</div>}
            </div>

            <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
                Login
            </button>
        </form>
    );
}
