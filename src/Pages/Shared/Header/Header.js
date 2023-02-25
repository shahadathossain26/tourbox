import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo (1).png'
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }



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
        <div className="navbar px-0 pr-5 lg:px-10 ">
            <div className="navbar-start z-[1001]">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='text-black font-bold text-[18px]' to='/'>Home</Link></li>
                        <div>
                            {user?.email ?
                                <div className='flex flex-col'>
                                    <li><Link className='text-black font-bold text-[18px]' to='/myreviews'>My Reviews</Link></li>
                                    <li><Link className='text-black font-bold text-[18px]' to='/addservice'>Add Service</Link></li>
                                </div>
                                : <></>
                            }
                        </div>
                        <li><Link className='text-black font-bold text-[18px]' to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-20 md:w-32 lg:w-52' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex z-[1001]">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className='text-white font-bold text-[18px]' to='/'>Home</Link></li>
                    <div>
                        {user?.email ?
                            <div className='flex'>
                                <li><Link className='text-white font-bold text-[18px]' to='/myreviews'>My Reviews</Link></li>
                                <li><Link className='text-white font-bold text-[18px]' to='/addservice'>Add Service</Link></li>
                            </div>
                            : <></>
                        }
                    </div>
                    <li><Link className='text-white font-bold text-[18px]' to='/blog'>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end z-[1001]">
                {
                    user?.email ? <button onClick={handleLogOut} className="btn btn-primary text-white">LogOut</button>
                        : <Link to='/login' className="btn btn-primary text-white">LogIn</Link>
                }
            </div>
        </div>
    );
};

export default Header;