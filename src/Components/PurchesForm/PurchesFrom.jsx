import React, { useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';

const Purchaseform2 = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOrderPlacement = () => {
        // You can perform any validation or further processing here before sending the data
        const newOrder = {
            productName,
            price,
            companyName,
            fullName,
            address,
            zipCode,
            state,
            phoneNumber,
            email,
            password
        };
        console.log(newOrder);
    };


    
    const productdetails = useLoaderData();
    const { id, price: defaultPrice } = useParams(); // Retrieve the price parameter from the URL
    const selectedProduct = productdetails.find(band => band.id === parseInt(id));

    return (
        <div className='container mx-auto pb-40'>
            <h1 className='text-4xl font-bold text-center pt-20 pb-10'>Fill Up the Form</h1>
            <div className='flex justify-center gap-20'>
                <div>
                    <img src={selectedProduct.image} className='w-[500px] h-96' alt="" />
                    <h1 className='text-3xl font-bold pt-4 text-center'>{selectedProduct.name}</h1>
                </div>
                <div>
                    <div className='mt-5'>
                        <label className='block'>Product Name</label>
                        <input type="text" placeholder="Product Name" value={selectedProduct.name} readOnly className="input input-bordered input-info w-[350px]" />
                    </div>
                    <div className='mt-5'>
                        <label className='block'>Price</label>
                        <input type="text" placeholder="Price" value={price || defaultPrice} onChange={(e) => setPrice(e.target.value)} className="input input-bordered input-info w-[350px]" />
                    </div>
                    <div className='mt-5'>
                        <label className='block'>Company Name</label>
                        <input type="text" placeholder="Enter Your Company Name" onChange={(e) => setCompanyName(e.target.value)} className="input input-bordered input-info w-[350px]" />
                    </div>
                    <div className='mt-5'>
                        <label className='block'>Full Name</label>
                        <input type="text" placeholder="Enter Your Full Name" onChange={(e) => setFullName(e.target.value)} className="input input-bordered input-info w-[350px]" />
                    </div>
                    <div className='mt-5'>
                        <label className='block'>Address</label>
                        <input type="text" placeholder="Enter Your Full Address" onChange={(e) => setAddress(e.target.value)} className="input input-bordered input-info w-full" />
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Zip Code</label>
                            <input type="text" placeholder="1400" onChange={(e) => setZipCode(e.target.value)} className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>State</label>
                            <input type="text" placeholder="State" onChange={(e) => setState(e.target.value)} className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label className='block'>Phone Number</label>
                        <input type="text" placeholder="+88017XXXXXXXX" onChange={(e) => setPhoneNumber(e.target.value)} className="input input-bordered input-info w-[450px]" />
                    </div>
                    <div className='mt-5'>
                        <label className='block'>Email</label>
                        <input type="text" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} className="input input-bordered input-info w-[350px]" />
                    </div>
                    <div className='mt-5'>
                        <label className='block'>Create Password</label>
                        <input type="password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)} className="input input-bordered input-info w-[350px]" />
                    </div>
                    <button className='btn btn-outline w-full mt-5' onClick={handleOrderPlacement}>Place Your Order</button>
                </div>
            </div>
        </div>
    );
};

export default Purchaseform2;
