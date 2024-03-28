import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ProductDetails2 = () => {
    const productdetails = useLoaderData();
    const { id } = useParams();
    const selectedproduct = productdetails.find(band => band.id === parseInt(id));
  
    // State to track customization option
    const [customization, setCustomization] = useState('Semi-Customize');
    // Price with customization
    const [priceWithCustomization, setPriceWithCustomization] = useState(selectedproduct.price);
  
    // Function to handle customization change
    const handleCustomizationChange = (e) => {
      setCustomization(e.target.value);
      if (e.target.value === 'Full Customize') {
        setPriceWithCustomization(selectedproduct.price + 500);
      } else {
        setPriceWithCustomization(selectedproduct.price);
      }
    };
  
    return (
      <div>
        <div className='container mx-auto'>
          <div className='flex justify-center gap-20 pt-28'>
            {/* Product Image */}
            <div className='w-[600px]'>
              <Carousel>
                <div>
                  <img src={selectedproduct.image} alt={selectedproduct.name} />
                </div>
                <div>
                  <img src={selectedproduct.image} alt={selectedproduct.name} />
                </div>
                <div>
                  <img src={selectedproduct.image} alt={selectedproduct.name} />
                </div>
              </Carousel>
            </div>
            {/* details */}
            <div>
              <h1 className='font-bold text-4xl'>{selectedproduct.name}</h1>
              <h1 className='text-3xl pt-5 font-semibold'>Price: {priceWithCustomization}TK</h1>
              <p className='w-[500px] pt-5 font-medium'>{selectedproduct.description}</p>
  
              <select
                className="select select-info w-full max-w-xs mt-5 font-bold"
                value={customization}
                onChange={handleCustomizationChange}
              >
                <option value="Semi-Customize">Semi-Customize</option>
                <option value="Full Customize">Full Customize (+500TK)</option>
              </select>
              <div className='flex gap-2'>
                <Link to={`/purchase2/${id}/${priceWithCustomization}`} className='btn btn-outline mt-5 w-[300px]'>Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails2;