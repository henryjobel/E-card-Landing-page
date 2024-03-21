import React from 'react';
import { motion } from "framer-motion";
import banner from "../../assets/banner image.png"

const Banner = () => {
    return (
        <div>
            <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">

                <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex relative py-16">
                        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl pb-5">
                                DIGITAL BUSINESS
                            </div>

                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                            <h1 className="font-bebas-neue uppercase text-6xl  font-black flex flex-col leading-none dark:text-white text-gray-800">
                                Expose Your
                                <span className="text-5xl sm:text-5xl pt-1">
                                    Identity                                </span>
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white pt-5">
                                Instantly access your profile by tapping or scanning the QR code on your MCard

                                After ordering, our designer will contact you and design according to your choice.
                            </p>
                            <div className="flex mt-8">
                                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-[#7638f9] border-2 border-transparent text-white text-md mr-4 hover:bg-[#392369]">
                                    Get started
                                </a>
                                <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-[#7638f9] text-[#7638f9] dark:text-white hover:bg-[#392369] hover:text-white text-md">
                                    Read more
                                </a>
                            </div>
                        </div>
                        <motion.div
                             // Initial scale
                            animate={{ scale: 0.9 }} // Final scale (zoom-in effect)
                            transition={{
                                duration: 1, // Animation duration
                                repeat: Infinity, // Repeat animation infinitely
                                repeatType: "reverse" // Reverse animation after each repeat
                            }}
                        >
                            <img src={banner} className="w-[1200px]" alt="watch" />
                        </motion.div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Banner;