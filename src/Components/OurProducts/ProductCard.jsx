import React from 'react';

const ProductCard = ({product}) => {
    const {name,image,price} = product
    return (
        <div>
            <div>
                <div className="max-w-sm mx-auto bg-white text-red-500 border border-black shadow-lg rounded-lg overflow-hidden mb-6">
                    <img className="w-full h-60 object-cover" src={image} alt="Band Image" />
                    <div className="py-4 px-6">
                        <h2 className="text-xl font-bold mb-2">{name}</h2>

                        <div className="flex items-center mt-4">
                            <svg className="w-6 h-6 fill-current text-blue-500 mr-2" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v4h-2z" />
                            </svg>
                            <span className="text-white">Genre: Rock</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <svg className="w-6 h-6 fill-current text-blue-500 mr-2" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v4h-2z" />
                            </svg>
                            <span className="text-black">{price}</span>
                        </div>
                        <div className="flex justify-end mt-4">
                            {/* <Link to={`/bandDtls/${id}`}><button className='btn'>See Details</button></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;