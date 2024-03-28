import React from 'react';

const Navbar = () => {


    const navLinks = <>
        <li><a href='https://mcardbd.com/'>Home</a></li>
        <li><a href='https://mcardbd.com/'>Features</a></li>
        <li><a href='https://mcardbd.com/'>Pricing</a></li>
        <li><a href='https://mcardbd.com/'>Buy Now</a></li>
        <li><a href='https://mcardbd.com/'>Contact</a></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">MCard</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-bold text-black">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://mcardbd.com/login' className="btn btn-outline">Sing In</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;