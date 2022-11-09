import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto main-comp'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className='footer-comp'>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Main;