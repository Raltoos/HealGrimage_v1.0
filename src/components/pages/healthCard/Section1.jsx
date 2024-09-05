import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import card from "./images/card.svg";

const Section1 = () => {
    const [parallaxStrength, setParallaxStrength] = useState(100);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    useEffect(() => {
        const updateParallaxStrength = () => {
            if (window.innerWidth <= 640) { // sm breakpoint
                setParallaxStrength(0);
            } else {
                setParallaxStrength(100);
            }
        };

        updateParallaxStrength(); // Set the initial value
        window.addEventListener('resize', updateParallaxStrength); // Update on window resize

        return () => window.removeEventListener('resize', updateParallaxStrength); // Cleanup
    }, []);

    // Function to toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <section id='about-us' className='section-padding relative'>
                <div className='border-top-ornament'>
                    <div className="ornament">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="w-full bg-[#F8F9FC] flex-custom-center">
                    <div className='flex flex-col md:flex-row relative w-[80%] items-center gap-[3rem] h-full'>
                        <div className='h-full flex items-center justify-center'>
                            <Parallax
                                bgImage={card}
                                strength={parallaxStrength}
                            >
                                <div className='md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover' />
                            </Parallax>
                        </div>

                        <div className='flex md:justify-center w-full relative h-full'>
                            <div className='flex-custom-col items-center md:items-start justify-center gap-4 mt-10 py-4'>
                                <div className='col-row col-row-title medium text-shadow mb-2'>
                                    <h2 className='text-black'>For contacting the Ministry of AYUSH in India.</h2>
                                </div>
                                <div className='max-w-[90%] text-[1.5rem] space-y-6 py-2'>
                                    <div className='md:text-left text-center w-full space-y-2'>
                                        <p className='font-cormo font-medium text-black'>
                                            Address: AYUSH Bhawan, B-Block, GPO Complex, INA, New Delhi - 110023, India
                                            <br />
                                            Phone Numbers: +91-11-24651950, +91-11-24651937
                                            <br />
                                            Email: webmanager-ayush@gov.in, jsminister-ayush@gov.in
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className={`btn w-[90%] btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none hover:text-white hover:bg-black`}
                                    onClick={toggleModal} // Open modal on click
                                >
                                    <div className='btn-content gap-3'>
                                        <span>Create your own health card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Component */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="bg-white w-[90%] md:w-[40%] p-6 rounded-lg z-10 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Your Health Card</h2>
                        <form className="space-y-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Full Name:</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Email:</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Phone Number:</label>
                                <input
                                    type="tel"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Date of Birth:</label>
                                <input
                                    type="date"
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Gender:</label>
                                <select
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Address:</label>
                                <textarea
                                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your address"
                                ></textarea>
                            </div>

                            <div className="flex justify-between space-x-3">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                                    onClick={toggleModal} // Close modal
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Section1;
