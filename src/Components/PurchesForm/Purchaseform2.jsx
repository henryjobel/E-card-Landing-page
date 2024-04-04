import React, { useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const Purchaseform2 = () => {
    const productDetails = useLoaderData();
    const { id, price: defaultPrice } = useParams();
    const selectedProduct = productDetails.find(product => product.id === parseInt(id));

    const [productName, setProductName] = useState(selectedProduct.name);
    const [price, setPrice] = useState(defaultPrice);
    const [companyName, setCompanyName] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [state, setState] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [companyLogo, setCompanyLogo] = useState(null);

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);
    };

    const handleCompanyLogoChange = (e) => {
        const file = e.target.files[0];
        setCompanyLogo(file);
    };

    const handleOrderPlacement = async () => {
        try {
            const profileImageUrl = await uploadImage(profilePicture);
            const companyLogoUrl = await uploadImage(companyLogo);

            const formData = {
                productName,
                price,
                companyName,
                fullName,
                address,
                zipCode,
                state,
                phoneNumber,
                email,
                password,
                profileImageUrl,
                companyLogoUrl
            };

            const response = await fetch('https://mcard-backend-site.vercel.app/metalcards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.href = `/metal-checkout/${id}`;
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const uploadImage = async (imageFile) => {
        if (!imageFile) return null;

        const formData = new FormData();
        formData.append('image', imageFile);
        formData.append('key', '06dcc2d18a5745280a4970ce2e3a9d8e');

        try {
            const response = await fetch('https://api.imgbb.com/1/upload', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            return data.data.url;
        } catch (error) {
            console.error('Error uploading image:', error);
            return null;
        }
    };
    return (
        <div className='container mx-auto pb-40'>
            {/* Your form JSX */}
            <h1 className='text-4xl font-bold text-center pt-20 pb-10'>Fill Up the Form</h1>
            <div className='flex justify-center gap-20'>
                <div>
                    <img src={selectedProduct.image} className='w-[500px] h-96' alt='' />
                    <h1 className='text-3xl font-bold pt-4 text-center'>{selectedProduct.name}</h1>
                </div>
                <div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Product Name</label>
                            <input type='text' placeholder='Product Name' value={productName} readOnly className='input input-bordered input-info w-[350px]' />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>Price</label>
                            <input type='text' placeholder='Price' value={price} readOnly className='input input-bordered input-info w-[350px]' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Company Name</label>
                            <input type='text' placeholder='Enter Your Company Name' onChange={(e) => setCompanyName(e.target.value)} className='input input-bordered input-info w-[350px]' />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>Full Name</label>
                            <input type='text' placeholder='Enter Your Full Name' onChange={(e) => setFullName(e.target.value)} className='input input-bordered input-info w-[350px]' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label className='block'>Address</label>
                        <input type='text' placeholder='Enter Your Full Address' onChange={(e) => setAddress(e.target.value)} className='input input-bordered input-info w-full' />
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Zip Code</label>
                            <input type='text' placeholder='1400' onChange={(e) => setZipCode(e.target.value)} className='input input-bordered input-info w-full max-w-xs' />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>State</label>
                            <input type='text' placeholder='State' onChange={(e) => setState(e.target.value)} className='input input-bordered input-info w-full max-w-xs' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <label className='block'>Phone Number</label>
                        <input type='text' placeholder='+88017XXXXXXXX' onChange={(e) => setPhoneNumber(e.target.value)} className='input input-bordered input-info w-[450px]' />
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Profile Picture</label>
                            <input type='file' onChange={handleProfilePictureChange} className='file-input file-input-bordered w-full max-w-xs' />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>Company Logo</label>
                            <input type='file' onChange={handleCompanyLogoChange} className='file-input file-input-bordered w-full max-w-xs' />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Email</label>
                            <input type='text' placeholder='example@gmail.com' onChange={(e) => setEmail(e.target.value)} className='input input-bordered input-info w-[350px]' />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>Create Password</label>
                            <input type='password' placeholder='Create Password' onChange={(e) => setPassword(e.target.value)} className='input input-bordered input-info w-[350px]' />
                        </div>
                    </div>
                    <button className='btn btn-outline w-full mt-5' onClick={handleOrderPlacement}>
                        Place Your Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Purchaseform2;