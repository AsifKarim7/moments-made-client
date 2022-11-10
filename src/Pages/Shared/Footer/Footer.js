import React from 'react';
import logo from '../../../logo.png'

const Footer = () => {
    return (
        <footer className="footer text-white footer-center p-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <div>
                <img src={logo} className="inline-block fill-current w-36" alt="" />
                <p className='text-base'>" Creating Magical Moments Through Photography "</p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer >
    );
};

export default Footer;