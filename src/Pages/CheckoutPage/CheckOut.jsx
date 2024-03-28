import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CheckOut = () => {
    const productdetails = useLoaderData();
    const { id } = useParams();
    const selectedproduct = productdetails.find(band => band.id === parseInt(id));


    return (
        <div className='container mx-auto'>
            <div className='flex gap-20 '>
                <div>
                <h1 className='text-4xl'>{selectedproduct.name}</h1>
                </div>
                <div>
                    <h1 className='text-3xl'>+880160488881</h1>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;