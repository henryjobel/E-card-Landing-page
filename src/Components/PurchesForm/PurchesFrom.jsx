import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const PurchaseForm = () => {
    
    const productdetails = useLoaderData();
    const { id } = useParams();
    const selectedproduct = productdetails.find(band => band.id === parseInt(id));

    return (
        <div className='container mx-auto'>
            
            <form >
                <div className='mt-5'>
                    <label className='block'>Full Name</label>
                    <input type='text' name="name" placeholder="Enter Your Full Name"  className='border border-gray-300 rounded px-3 py-2 w-[300px]' />
                </div>
                <div className='mt-3'>
                    <label className='block'>Email</label>
                    <input type='email' name="email" placeholder="Email" className='border border-gray-300 rounded px-3 py-2 w-[300px]' />
                </div>
                <div className='mt-3'>
                    <label className='block'>Product Name</label>
                    <input type='email' name="productname" placeholder="Email" defaultValue={selectedproduct.name} className='border border-gray-300 rounded px-3 py-2 w-[300px]' />
                </div>
                <div className='mt-3'>
                    <label className='block'>Price</label>
                    <input type='email' name="price" placeholder="Price" defaultValue={selectedproduct.price} className='border border-gray-300 rounded px-3 py-2 w-[300px]' />
                </div>
                <div className='mt-3'>
                    <label className='block'>Logo</label>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>
                <div className='mt-3'>
                    <label className='block'>Image
                    </label>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                </div>
                <div className='mt-3'>
                    <label className='block'>Password</label>
                    <input type='password' name="password" placeholder="Password"  className='border border-gray-300 rounded px-3 py-2 w-[300px]' />
                </div>
                <div className='mt-3'>
                    <label className='block'>Phone Number</label>
                    <input type='tel'  name="phonenumber" placeholder="Phone Number" className='border border-gray-300 rounded px-3 py-2 w-[300px]' />
                </div>
                <div className='mt-5'>
                    <button type='submit' className='btn btn-outline w-[300px]'>Purchase</button>
                </div>
            </form>
        </div>
    );
};

export default PurchaseForm;
