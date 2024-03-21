import React from 'react';
import Banner from '../Components/Banner/Banner';
import Carousel from '../Components/Carousel/Carousel';
import backgroundImage from '../assets/tampic/Brown Elegant Vlog Sunset Youtube Thumbnail.png';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-fixed bg-cover " style={{ backgroundImage: `url(${backgroundImage})` }}></div>
                <div className="absolute inset-0 bg-gray-200 opacity-30"></div>
                <div className="relative z-10 text-center pt-20 pb-10">
                    <h1 className="text-2xl md:text-3xl pl-2 my-2 font-bold text-white uppercase">
                        Our Template
                    </h1>
                </div>
                <div className="parallax">
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Home;
