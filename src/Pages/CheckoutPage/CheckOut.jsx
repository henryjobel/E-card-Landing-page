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
                    <img src="https://i.ibb.co/jDPq0qf/1.png" className='w-[500px] ' alt="" />
                    <div>
                        <h1 className='text-3xl font-bold pb-2'>Procut titile nad nasdasdasdwdad+</h1>
                        <h1 className='text-3xl font-bold '>Total Price: 19999</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;