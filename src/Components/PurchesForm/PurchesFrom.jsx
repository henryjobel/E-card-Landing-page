import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Purchaseform2 = () => {
    const productdetails = useLoaderData();
    const { id, price } = useParams(); // Retrieve the price parameter from the URL
    const selectedproduct = productdetails.find(band => band.id === parseInt(id));

    return (
        <div className='container mx-auto pb-40'>
            <h1 className='text-4xl font-bold text-center pt-20 pb-10'>Fill Up the Form</h1>
            <div className='flex justify-center gap-20'>
                <div>
                    <img src={selectedproduct.image} className='w-[500px] h-96' alt="" />
                    <h1 className='text-3xl font-bold pt-4 text-center'>{selectedproduct.name}</h1>
                </div>

                <form>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Product Name</label>
                            <input type="text" placeholder="Product Name" defaultValue={selectedproduct.name} className="input input-bordered input-info w-[350px]" />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>Price</label>
                            <input type="text" placeholder="Price" defaultValue={price} className="input input-bordered input-info w-[350px]" />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Company Name</label>
                            <input type="text" placeholder="Enter Your Company Name" className="input input-bordered input-info w-[350px]" />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>Full Name</label>
                            <input type="text" placeholder="Enter Your Full Name" className="input input-bordered input-info w-[350px]" />
                        </div>
                    </div>
                    <div >
                        <div className='mt-5'>
                            <label className='block'>Adress</label>
                            <input type="text" placeholder="Enter Your Full Adress" className="input input-bordered input-info w-full " />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Zip Code</label>
                            <input type="text" placeholder="1400" className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>State</label>
                            <input type="text" placeholder="State" className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                    </div>
                    <div >
                        <div className='mt-5'>
                            <label className='block'>Phone Number</label>
                            <input type="text" placeholder="+88017XXXXXXXX" className="input input-bordered input-info w-[450px] " />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Profile picture</label>
                            <p>Format jpg/png/ai</p>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>Add Your Logo</label>
                            <p>Format jpg/png/ai</p>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='mt-5'>
                            <label className='block'>Email</label>
                            <input type="text" placeholder="exmple@gmail.com" className="input input-bordered input-info w-[350px] " />
                        </div>
                        <div className='mt-5'>
                            <label className='block'>Create Password</label>
                            <input type="text" placeholder="Create Password" className="input input-bordered input-info w-[350px] " />
                        </div>
                    </div>
                    <Link to={`/checkout/${id}`} className='btn btn-outline w-full mt-5'>Place Your Order</Link>
                </form>
            </div>
        </div>
    );
};

export default Purchaseform2;
