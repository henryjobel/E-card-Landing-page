import React from 'react';
import { motion } from "framer-motion";
import banner from "../../assets/tampic/banner.png"

const Banner = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <div className="container mx-auto px-4 py-8">

                <div className="flex flex-col justify-center items-center my-16">
                    <h1 className="text-5xl font-bold text-gray-800 leading-tight">DIGITAL BUSINESS</h1>
                    <h1 className="text-5xl font-bold text-gray-800 leading-tight">EXPOSE YOUR IDENTITY</h1>
                    <p className="text-2xl text-gray-600 mt-4">Instantly access your profile by tapping or scanning the QR code on your MCard <br /> After ordering, our designer will contact you and design according to your choice.</p>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl mt-8 py-4 px-8 rounded-lg">Get Started</button>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;