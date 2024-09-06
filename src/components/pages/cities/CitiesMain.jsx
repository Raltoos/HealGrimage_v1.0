import React from 'react';
import { NavLink } from "react-router-dom";

const CitiesMain = () => {
    const cardData = [
        {
            image: '/images/carousel/section-1/banking2.jpg',
            text: 'Gateway of India. An iconic monument symbolizing Mumbai’s rich history and one of the city’s top tourist attractions.'
        },
        {
            image: '/images/carousel/section-1/edu2.jpg',
            text: 'Marine Drive. A scenic promenade along the coast, known for its stunning sunset views and vibrant atmosphere.'
        },
        {
            image: '/images/carousel/section-1/travel2.jpg',
            text: 'Elephanta Caves. A UNESCO World Heritage site, featuring ancient rock-cut temples dedicated to Lord Shiva.'
        },
        {
            image: '/images/carousel/section-1/consumer2.jpg',
            text: 'Fortis Hospital. A leading multi-specialty hospital offering cutting-edge medical treatments across various specialties.'
        },
        {
            image: '/images/carousel/section-1/com.jpg',
            text: 'Apollo Hospitals. Known for its state-of-the-art medical facilities and high success rate in advanced surgeries.'
        },
        {
            image: '/images/carousel/section-1/energy.jpg',
            text: 'Lilavati Hospital. Offers a range of healthcare services and is known for its expertise in cardiac care and oncology.'
        },
        {
            image: '/images/carousel/section-1/medico.jpg',
            text: 'Cardiac Surgery. Offering world-class treatment for heart conditions, including bypass surgery, angioplasty, and valve replacements.'
        },
        {
            image: '/images/carousel/section-1/real.jpg',
            text: 'Oncology. Advanced cancer care, including chemotherapy, radiation therapy, and cutting-edge surgical treatments.'
        },
        {
            image: '/images/carousel/section-1/public.jpg',
            text: 'Orthopedic Surgery. Specializing in joint replacements, trauma care, and spinal surgeries using the latest techniques.'
        },
    ];

    return (
        <section className='pt-[var(--section-padding)]'>
            {/* First heading and subheading */}
            <div className='industry-container'>
                <div className='flex justify-center w-full'>
                    <div className='flex flex-col text-center w-full flex-custom-center'>
                        <h2 className='text-4xl font-bold text-black mb-4'>Mumbai</h2>
                        <p className='text-2xl text-black mb-6 w-[80%]'>
                            Mumbai is a leading medical tourism destination with some of the best hospitals in India. 
                            It offers cutting-edge treatments across various specialties, and patients can also enjoy the city's 
                            vibrant culture and iconic landmarks.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tourist places */}
            <div className='relative py-20 w-full flex justify-center items-center'>
                <div className='flex flex-col gap-6 w-full justify-center items-center'>
                    <h3 className='text-3xl font-semibold text-black mb-4'>Top Tourist Places</h3>
                    <div className='md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6'>
                        {cardData.slice(0, 3).map((card, colIndex) => (
                            <div key={colIndex} className='flip-card md:w-[30%] md:h-[15rem] w-full'>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img
                                            src={card.image}
                                            alt={`Image ${colIndex + 1}`}
                                            className='carousel-image w-full h-[20rem] object-cover rounded-lg'
                                        />
                                    </div>
                                    <div className='flip-card-back p-6 flex justify-center items-center'>
                                        <p className='text-white text-lg font-medium leading-relaxed'>{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hospitals */}
            <div className='relative py-20 w-full flex justify-center items-center'>
                <div className='flex flex-col gap-6 w-full justify-center items-center'>
                    <h3 className='text-3xl font-semibold text-black mb-4'>Hospitals in Mumbai</h3>
                    <div className='md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6'>
                        {cardData.slice(3, 6).map((card, colIndex) => (
                            <div key={colIndex} className='flip-card md:w-[30%] md:h-[15rem] w-full'>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img
                                            src={card.image}
                                            alt={`Image ${colIndex + 4}`}
                                            className='carousel-image w-full h-[20rem] object-cover rounded-lg'
                                        />
                                    </div>
                                    <div className='flip-card-back p-6 flex justify-center items-center'>
                                        <p className='text-white text-lg font-medium leading-relaxed'>{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Treatments */}
            <div className='relative py-20 w-full flex justify-center items-center'>
                <div className='flex flex-col gap-6 w-full justify-center items-center'>
                    <h3 className='text-3xl font-semibold text-black mb-4'>Available Treatments</h3>
                    <div className='md:flex md:flex-row flex flex-col justify-around w-[90%] gap-6'>
                        {cardData.slice(6, 9).map((card, colIndex) => (
                            <div key={colIndex} className='flip-card md:w-[30%] md:h-[15rem] w-full'>
                                <div className='flip-card-inner'>
                                    <div className='flip-card-front'>
                                        <img
                                            src={card.image}
                                            alt={`Image ${colIndex + 7}`}
                                            className='carousel-image w-full h-[20rem] object-cover rounded-lg'
                                        />
                                    </div>
                                    <div className='flip-card-back p-6 flex justify-center items-center'>
                                        <p className='text-white text-lg font-medium leading-relaxed'>{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <NavLink to='/delhi'>
            <div className='flex justify-center py-10'>
                <button
                    
                    className='bg-[#003B6C] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#08599d] transition-colors'
                >
                    Next City
                </button>
            </div>
            </NavLink>
        </section>
    );
};

export default CitiesMain;
