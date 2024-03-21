import React from 'react';
import product1 from "../../assets/productimage/6.png"
import product2 from "../../assets/productimage/3.png"
import product3 from "../../assets/productimage/1.png"

const OurProducts = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-3 lg:p-32'>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={product1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-3xl font-extrabold text-center">MCard PREMIUM
                    </h2>
                    <p className='text-2xl text-center pb-5 font-medium'>Price: ৳1,999.00
                    </p>
                    <div className="card-actions justify-center">
                        <button className=" btn-primary btn btn-outline w-[220px]">Order now</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={product2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-3xl font-extrabold text-center">MCard PREMIUM
                    </h2>
                    <p className='text-2xl text-center pb-5 font-medium'>Price: ৳1,999.00
                    </p>
                    <div className="card-actions justify-center">
                        <button className=" btn-primary btn btn-outline w-[220px]">Order now</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={product3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className=" text-3xl font-extrabold text-center">MCard PREMIUM
                    </h2>
                    <p className='text-2xl text-center pb-5 font-medium'>Price: ৳1,999.00
                    </p>
                    <div className="card-actions justify-center">
                        <button className=" btn-primary btn btn-outline w-[220px]">Order now</button>
                    </div>
                </div>
            </div>
          
            
        </div>
    );
};

export default OurProducts;