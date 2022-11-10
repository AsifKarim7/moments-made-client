import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const menuItems = <>
        <li><Link className='btn btn-ghost motion-safe:hover:scale-110 active:text-white' to='/'>Home</Link></li>
        <li><Link className='btn btn-ghost motion-safe:hover:scale-110 active:text-white' to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li><Link className='btn btn-ghost motion-safe:hover:scale-110 active:text-white' to='/addservice'>Add Service</Link></li>
                    <li><Link className='btn btn-ghost motion-safe:hover:scale-110 active:text-white' to='/myreviews'>My Reviews</Link></li>
                </>
                :
                <></>
        }
    </>

    const menuLoginLogout = <>
        {
            user?.email ?
                <button onClick={handleLogOut} className="btn btn-outline hover:bg-gray-900 hover:border-0  text-white motion-safe:hover:scale-110">Logout</button>
                :
                <Link to='/login'><button className="btn btn-outline hover:bg-gray-900 hover:border-0  text-white motion-safe:hover:scale-110">Login</button></Link>
        }
    </>

    return (
        <div className="navbar text-white py-1
        bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black
        ">

            <div className="navbar-start pl-0 md:pl-80">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>

                <Link to='/'>
                    <img className='w-24' src={logo} alt="" />
                </Link>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end pr-0 md:pr-80">
                {menuLoginLogout}
            </div>
        </div>

    );
};

export default Header;