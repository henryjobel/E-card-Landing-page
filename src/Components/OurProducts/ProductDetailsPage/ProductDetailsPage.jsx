
import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'



const ProductDetails1 = () => {

    const productdetails = useLoaderData();
    const {id} = useParams();
    const selectedproduct = productdetails.find(band => band.id === parseInt(id));



 



  return (
    <div>
        {selectedproduct.name}
    </div>
  )
}

export default ProductDetails1