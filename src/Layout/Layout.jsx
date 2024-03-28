import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div >
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            <div >
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;