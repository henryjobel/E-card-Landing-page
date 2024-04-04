import  { useState, useEffect } from 'react';
import bkash from '../../assets/payments/bkash_logo_0.jpg';
import nagad from '../../assets/payments/image-170623-1706521775.jpg';
import rocket from '../../assets/payments/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const PvcCheckout = () => {
    const productdetails = useLoaderData();
    const { id } = useParams();
    const selectedproduct = productdetails.find(band => band.id === parseInt(id));

    const [deliveryCharge, setDeliveryCharge] = useState(70); // Default inside Dhaka delivery charge
    const [totalPrice, setTotalPrice] = useState(selectedproduct.price + deliveryCharge);
    const [paymentMethod, setPaymentMethod] = useState(''); // State to store selected payment method
    const [mobileNumber, setMobileNumber] = useState('');
    const [transactionNumber, setTransactionNumber] = useState('');

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

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleOrderPlacement = () => {
        const newOrder = {
            paymentMethod,
            mobileNumber,
            transactionNumber
        };

        // send data to the server
        fetch('https://mcard-backend-site.vercel.app/pvcpayment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Wait For Admin Aproval",
                    showConfirmButton: false,
                    timer: 1500
                });
                // Redirect to checkout page after successful submission
                window.location.href = 'https://mcardbd.com/'; // Replace '/checkout' with the actual path of your checkout page
            }
        });
    };

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
                                <img src={bkash} className='w-[100px]' alt="Bkash" />
                                <img src={nagad} className='w-[100px]' alt="Nagad" />
                                <img src={rocket} className='w-[100px]' alt="Rocket" />
                            </div>
                        </div>
                        <div className='container mx-auto'>
                            <h1 className='text-xl font-semibold p-5 w-[500px]'>Making payments with bKash, Nagad & Rocket is quick and effortless. You can make your payment by bKash to the number <span className='text-xl font-black text-red-600'>+8801614008881</span>. Don&#39;t forget to provide your transaction number and your phone number from which the money is being sent.</h1>
                        </div>
                        <form onSubmit={handleOrderPlacement}>
                            <div>
                                <h1>Select Payment Method</h1>
                                <select className="select select-primary w-full max-w-xs" onChange={handlePaymentMethodChange}>
                                    <option disabled selected>Select Your Payment Method</option>
                                    <option value="Bkash">Bkash</option>
                                    <option value="Nagad">Nagad</option>
                                    <option value="Rocket">Rocket</option>
                                </select>
                                <div>
                                    <h1>Mobile Number</h1>
                                    <input type="text" placeholder="Enter Your Mobile Number" onChange={(e) => setMobileNumber(e.target.value)} className="input input-bordered input-info w-[350px]" />
                                </div>
                                <div>
                                    <h1>Transaction Number</h1>
                                    <input type="text" placeholder="Enter Your Transaction Number" onChange={(e) => setTransactionNumber(e.target.value)} className="input input-bordered input-info w-full" />
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
                            <h1 className='mt-5'>Delivery Charge</h1>
                            <select className="select select-primary w-full max-w-xs mt-5" onChange={handleDeliveryChange}>
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
