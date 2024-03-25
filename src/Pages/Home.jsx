import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Carousel from '../Components/Carousel/Carousel';
import backgroundImage from '../assets/tampic/Brown Elegant Vlog Sunset Youtube Thumbnail.png';
import Acordian from '../Components/Accordian/Acordian';
import OurProducts from '../Components/OurProducts/OurProducts';


const Home = () => {

    return (
        <div>
            {/* banner sections */}
            <div>
                <Banner></Banner>
            </div>
            {/* tamplate sections */}
            <div className="relative">
                <div className="absolute inset-0 bg-fixed bg-cover " style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div className="absolute inset-0 bg-gray-200 opacity-30"></div>
                <div className="relative z-10 text-center pt-20 pb-10">
                    <h1 className="text-4xl md:text-4xl pl-2 my-2 font-bold text-white uppercase">
                        Our Template
                    </h1>
                </div>
                <div className="parallax pb-20">
                    <Carousel />
                </div>
            </div>
            {/* faq sections */}
            <div>
                <Acordian></Acordian>
            </div>
            {/* our product sections */}
            <div className='continer mx-auto'>
                <h1 className='text-5xl font-bold text-center pt-10 pb-10'>Our Products</h1>
                <h1 className='text-4xl font-semibold text-center pt-10 pb-10 text-black'>PVC Cards</h1>
            </div>
            <div className='container lg:w-[1200px] mx-auto'>
                <OurProducts></OurProducts>
            </div>
            <div>
            <h1 className='text-4xl font-semibold text-center pt-10 pb-10 text-black'>Metal Cards</h1>
            <h1 className='text-4xl font-semibold text-center pt-10 pb-10 text-black'>Wood Card</h1>
            </div>
        </div>
    );
};

export default Home;
