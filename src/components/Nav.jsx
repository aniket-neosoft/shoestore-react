import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser, setUser } from '../react-redux/userSlice';
import Cookies from 'universal-cookie';

export default function Nav() {
    const dispatch = useDispatch();
    const cookie = new Cookies();
    const navigate = new useNavigate();

    function logout() {
        cookie.remove("userMail")
        dispatch(resetUser());
        window.alert("Logged out successfully!");
        navigate('/login');
    };

    const userEmail = useSelector((state) => state.user.value);
    
    const [toggle, setToggle] = useState(false);
    
    useEffect(()=>{
        console.log("store : ",userEmail);
        const uMail = cookie.get('userMail');
        if (uMail!==undefined) {
            dispatch(setUser(uMail));
        }
    })

    return (
        <>
            <nav className="flex space-x-10 justify-between items-center">
                <ul className='flex space-x-10 w-full cursor-pointer z-50'>
                    <Link className='hover:text-orange-500' to="/home">Home</Link>
                    <Link className='hover:text-orange-500' to="/product" >Products</Link>
                    <Link className='hover:text-orange-500' to="/categories">Categories</Link>
                    <Link className='hover:text-orange-500' to="/about">About us</Link>
                    <Link className='hover:text-orange-500' to="/register" >Register</Link>
                    <Link className='hover:text-orange-500' to="/cart">Cart</Link>
                </ul>

                <div className='relative cursor-pointer'>
                    <MenuIcon className='hover:text-orange-500' onClick={() => setToggle(!toggle)}></MenuIcon>

                    {
                        // toggle
                        //     ? <ClearIcon className='hover:text-orange-500' onClick={() => setToggle(!toggle)} ></ClearIcon>
                        //     : <MenuIcon className='hover:text-orange-500' onClick={() => setToggle(!toggle)}></MenuIcon>

                    }

                    <ul className={`text-left w-full h-screen fixed bg-[#333]
                    ${toggle ? `right-[-80%]` : `right-[-100%]`}
                    duration-500 text-white gap-10 z-20 top-0`}>
                        <ClearIcon className='hover:text-orange-500 absolute my-5 left-48 ' onClick={() => setToggle(!toggle)} ></ClearIcon>
                        <div className='my-12'>
                            {userEmail === "" && <li className='p-3 hover:text-orange-500' >
                                <Link to="/login">Login</Link>
                            </li>}
                            {userEmail !== "" && <li className='p-3 hover:text-orange-500' onClick={logout}>
                                Logout
                            </li>}
                            {userEmail !== "" && <li className='p-3 hover:text-orange-500'>
                                <Link to="/add/shoe">Add Product</Link>
                            </li>}
                            {userEmail !== "" && <li className='p-3 hover:text-orange-500'>
                                <Link to="/manage/products">Product Management</Link>
                            </li>}
                        </div>
                    </ul>
                </div>
            </nav>
        </>
    )
}