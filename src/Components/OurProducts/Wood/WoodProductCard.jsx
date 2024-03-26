import React from 'react';
import { Link } from 'react-router-dom';

const WoodProductCard = ({product}) => {
    const { name, image, price, id } = product;
    return (
        <div>
            <div>
                <div className="max-w-sm mx-auto bg-white text-black border border-black shadow-lg rounded-lg overflow-hidden mb-6">
                    <img className="w-full h-60 object-cover" src={image} alt="Band Image" />
                    <div className="py-4 px-6">
                        <h2 className="text-xl font-bold mb-2">{name}</h2>


                        <div className="flex items-center mt-2">

                            <span className="text-black text-2xl font-bold">Price: {price} TK</span>
                        </div>
                        <div className="flex  mt-4">
                            <Link to={`/pvc-product-details/${id}`}><button className='btn btn-outline w-[350px]'>See Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WoodProductCard;