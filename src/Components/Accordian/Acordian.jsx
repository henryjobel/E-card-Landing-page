import React from 'react';

const Acordian = () => {


    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Explore Common Questions
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What is the difference between MCard Semi Custom and Full Custom?
                        </div>
                        <div className="collapse-content">
                            <p>Semi Custom: Custom design on one side, iCard logo on other side.
                                Full Custom: Both sides will have custom designs, no MCard logo.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Does MCard work on all phones?
                        </div>
                        <div className="collapse-content">
                            <p>The way MCard works, if the phone has NFC, you have to touch it, and if it doesn't, you have to scan the QR Code. Internet is required.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How to change the information later?

                        </div>
                        <div className="collapse-content">
                            <p>You can change your information at any time by logging in with your email address and password.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">

                            How long is MCard valid and is there any annual charge?

                        </div>
                        <div className="collapse-content">
                            <p>There is no annual charge for I card, (One-time payment). You can use the card as long as you have it..</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">

                            What is the security of my information?

                        </div>
                        <div className="collapse-content">
                            <p>
                                MCard uses dedicated MCard NFC chip and dynamic QR code to secure user information. iCard encrypts all customer data in a cloud-hosted database, using its own security system application.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">


                            Any money to pay in advance?
                            order
                        </div>
                        <div className="collapse-content">
                            <p>
                                The delivery charge should be advanced after the order is confirmed. Later will be paid on Cash on Delivery (COD).</p>
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-600 textbase mt-9">
                    Still have questions?
                    <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">Contact
                        our support
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Acordian;