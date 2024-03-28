import React from 'react';
import bkash from "../../assets/payments/bkash_logo_0.jpg"
import nagad from "../../assets/payments/image-170623-1706521775.jpg"
import rocket from "../../assets/payments/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png"
const CheckOut = () => {
    return (
        <div>
            <div className='p-20'>
                <h1 className='text-4xl font-bold text-center'>Check Out</h1>
            </div>
            <div>
                <h1 className='container mx-auto text-3xl font-semibold p-5 text-center'>Methods Of Payment</h1>
                <div className='flex container mx-auto justify-center'>
                    <img src={bkash} className='w-[100px]' alt="" />
                    <img src={nagad}  className='w-[100px]' alt="" />
                    <img src={rocket} className='w-[100px]' alt="" />
                </div>
            </div>
            <div className='container mx-auto'> 
                <h1 className='text-xl font-semibold text-center p-5'>Making payments with bKash,nagad & Rocket is quick and effortless. You can make your payment by bKash to the number <span className='text-xl font-black text-red-600'>+8801614008881</span>. Don't forget to provide your transaction number and your phone number from which the money is being sent.</h1>
            </div>
        </div>
    );
};

export default CheckOut;