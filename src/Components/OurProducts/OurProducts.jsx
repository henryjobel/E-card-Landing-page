import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
const OurProducts = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("pvcCard.json")
        .then(res => res.json())
        .then(data => setProduct(data))
        
    })
   console.log(product)
    
    return (
        <div className='container grid gap-1 pt-20 mx-auto pb-52 lg:grid-cols-3'>
            {
                product.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default OurProducts;