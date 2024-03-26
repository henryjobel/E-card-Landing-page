import React, { useEffect, useState } from 'react';
import WoodProductCard from './WoodProductCard';

const WoodCard = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("wood.json")
        .then(res => res.json())
        .then(data => setProduct(data))
        
    })
   console.log(product)
    
    return (
        <div className='container grid gap-1 pt-20 mx-auto pb-52 lg:grid-cols-3'>
            {
                product.map(product => <WoodProductCard key={product.id} product={product}></WoodProductCard>)
            }
        </div>
    );
};

export default WoodCard;