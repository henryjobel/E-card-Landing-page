import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ProductDetails2 = () => {
    const productdetails = useLoaderData();
    const { id } = useParams();
    const selectedproduct = productdetails.find(band => band.id === parseInt(id));
    return (
        <div className='container mx-auto'>

            <div className='flex justify-center gap-20 pt-28'>
                {/* Product Image */}
                <div className='w-[600px]'>
                    <Carousel>
                        <div>
                            <img src={selectedproduct.image} />

                        </div>
                        <div>
                            <img src={selectedproduct.image} />

                        </div>
                        <div>
                            <img src={selectedproduct.image} />

                        </div>
                    </Carousel>
                </div>
                {/* details */}
                <div>
                    <h1 className='font-bold text-4xl'>{selectedproduct.name}</h1>
                    <h1 className='text-3xl pt-5 font-semibold'>Price: {selectedproduct.price}TK</h1>
                    <p className='w-[500px] pt-5 font-medium'>{selectedproduct.description}</p>

                    <select className="select select-info w-full max-w-xs mt-5 font-bold">
                        <option disabled selected>Semi-Customize</option>
                        <option>Full Customize</option>
                    </select>
                    <div className='flex gap-2'>
                        <Link to={`/purchase2/${id}`} className='btn btn-outline mt-5 w-[300px]'>Buy Now</Link>
                        {/* Render PurchaseForm component with product name and price as props */}


                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails2;