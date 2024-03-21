import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';

const Layout = () => {
    return (
        <div >
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            <div >
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;