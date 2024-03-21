import React from 'react';
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
            <div className='container mx-auto'>
                <h1 className='text-5xl font-bold text-center pt-10 pb-10'>Our Products</h1>
                <div>
                <OurProducts></OurProducts>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;
