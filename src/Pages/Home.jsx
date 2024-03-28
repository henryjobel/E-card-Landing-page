import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Carousel from '../Components/Carousel/Carousel';
import backgroundImage from '../assets/tampic/Brown Elegant Vlog Sunset Youtube Thumbnail.png';
import Acordian from '../Components/Accordian/Acordian';
import OurProducts from '../Components/OurProducts/OurProducts';
import MetalCard from '../Components/OurProducts/Metal/MetalCard';
import WoodCard from '../Components/OurProducts/Wood/WoodCard';


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
            <div className='bg-[#f3f3ff]'>
                <div>
                    <h1 className='text-center text-5xl font-bold p-20'>Our Products</h1>
                </div>
                <div>
                    <h1 className='text-center text-3xl font-bold p-10'>PVC <span className='text-[#7638f9]'>CARD</span></h1>
                    <div className='w-[1200px] container mx-auto'>
                        <OurProducts></OurProducts>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-3xl font-bold p-10'>METAL <span className='text-[#7638f9]'>CARD</span></h1>
                    <div className='w-[1200px] container mx-auto'>
                        <MetalCard></MetalCard>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-3xl font-bold p-10'>WOOD <span className='text-[#7638f9]'>CARDS</span></h1>
                    <div className='w-[1200px] container mx-auto'>
                        <WoodCard></WoodCard>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
