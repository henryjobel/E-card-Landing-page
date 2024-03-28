import React, { useEffect, useState } from 'react';
import MetalProductCard from './MetalProductCard';

const MetalCard = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("metal.json")
        .then(res => res.json())
        .then(data => setProduct(data))
        
    })
   console.log(product)
    
    return (
        <div className='container grid gap-1  mx-auto  lg:grid-cols-3'>
            {
                product.map(product => <MetalProductCard key={product.id} product={product}></MetalProductCard>)
            }
        </div>
    );
};

export default MetalCard;