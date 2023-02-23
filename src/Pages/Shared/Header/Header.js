import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo (1).png'

const Header = () => {

    const menuItems = <>
        <li><Link className='text-white font-bold text-[18px]' to='/'>Home</Link></li>
        {/* <div>
            {user?.email ?
                <div className='flex'>
                    <li><Link to='/myreviews'>My Reviews</Link></li>
                    <li><Link to='/addservice'>Add Service</Link></li>
                </div>
                : <></>
            }
        </div> */}
        <li><Link className='text-white font-bold text-[18px]' to='/blog'>Blog</Link></li>

    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='h-20' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/" className="btn btn-primary text-white">Login</a>
            </div>
        </div>
    );
};

export default Header;