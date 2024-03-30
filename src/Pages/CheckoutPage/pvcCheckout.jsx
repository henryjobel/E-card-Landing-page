import React, { useEffect, useState } from 'react';
import bkash from '../../assets/payments/bkash_logo_0.jpg';
import nagad from '../../assets/payments/image-170623-1706521775.jpg';
import rocket from '../../assets/payments/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png';
import { useLoaderData, useParams } from 'react-router-dom';

const PvcCheckout = () => {

    const productdetails = useLoaderData();
    const { id } = useParams();
    const selectedproduct = productdetails.find(band => band.id === parseInt(id));

    const [deliveryCharge, setDeliveryCharge] = useState(70); // Default inside Dhaka delivery charge
    const [totalPrice, setTotalPrice] = useState(selectedproduct.price + deliveryCharge);

    const handleDeliveryChange = (e) => {
        const selectedDelivery = e.target.value;
        if (selectedDelivery === 'Inside Dhaka 70 tk') {
            setDeliveryCharge(70);
        } else if (selectedDelivery === 'Outside Dhaka 120 tk') {
            setDeliveryCharge(120);
        }
    };

    // Whenever delivery charge changes, update total price
    useEffect(() => {
        setTotalPrice(selectedproduct.price + deliveryCharge);
    }, [deliveryCharge]);

    return (
        <div>
            <div className='pb-20'>
                <div className='p-20'>
                    <h1 className='text-4xl font-bold text-center'>Check Out</h1>
                </div>
                <div className='flex justify-center container mx-auto gap-5'>
                    <div>
                        <div>
                            <h1 className='container mx-auto text-3xl font-semibold p-5 '>Methods Of Payment</h1>
                            <div className='flex container mx-auto '>
                                <img src={bkash} className='w-[100px]' alt="" />
                                <img src={nagad} className='w-[100px]' alt="" />
                                <img src={rocket} className='w-[100px]' alt="" />
                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <h1 className='text-xl font-semibold p-5 w-[500px]'>Making payments with bKash,nagad & Rocket is quick and effortless. You can make your payment by bKash to the number <span className='text-xl font-black text-red-600'>+8801614008881</span>. Don't forget to provide your transaction number and your phone number from which the money is being sent.</h1>
                        </div>
                        <form>
                            <div>
                                <h1>select One</h1>
                                <select className="select select-primary w-full max-w-xs">
                                    <option disabled selected>Select Your Payment Method</option>
                                    <option>Bkash</option>
                                    <option>Nagad</option>
                                    <option>Rocket</option>
                                </select>
                                <div>
                                    <h1>Mobile Number</h1>
                                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Transaction Number</h1>
                                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                </div>
                                <input className='btn btn-outline' type="submit" value="Checkout" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <img src={selectedproduct.image} className='w-[500px] ' alt="" />
                        <div className='pt-5'>
                            <h1 className='text-3xl font-bold pb-2'>{selectedproduct.name}</h1>
                            <h1 className='text-3xl font-bold '>Total Price: {totalPrice} Tk</h1>
                            <h1>Delivery Charge</h1>
                            <select className="select select-primary w-full max-w-xs mt-5" onChange={handleDeliveryChange}>
                                <option disabled selected>Select Your Delivery Place</option>
                                <option>Inside Dhaka 70 tk</option>
                                <option>Outside Dhaka 120 tk</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PvcCheckout;
