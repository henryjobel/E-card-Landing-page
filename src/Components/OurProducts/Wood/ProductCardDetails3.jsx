import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductCardDetails3 = () => {
    const productdetails = useLoaderData();
    const {id} = useParams();
    const selectedproduct = productdetails.find(band => band.id === parseInt(id));
    return (
        <div>
            <h1>{selectedproduct.name}</h1>
        </div>
    );
};

export default ProductCardDetails3;