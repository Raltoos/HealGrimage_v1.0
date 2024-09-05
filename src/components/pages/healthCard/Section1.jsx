// import React, { useState, useEffect } from 'react';
// import { Parallax } from 'react-parallax';
// import card from "./images/card.svg";

// const Section1 = () => {
//     const [parallaxStrength, setParallaxStrength] = useState(100);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     useEffect(() => {
//         const updateParallaxStrength = () => {
//             if (window.innerWidth <= 640) { // sm breakpoint
//                 setParallaxStrength(0);
//             } else {
//                 setParallaxStrength(100);
//             }
//         };

//         updateParallaxStrength(); // Set the initial value
//         window.addEventListener('resize', updateParallaxStrength); // Update on window resize

//         return () => window.removeEventListener('resize', updateParallaxStrength); // Cleanup
//     }, []);

//     // Lock body scroll when modal is open, enable it when closed
//     useEffect(() => {
//         if (isModalOpen) {
//             document.body.style.overflow = 'hidden'; // Disable body scroll
//         } else {
//             document.body.style.overflow = 'auto'; // Re-enable body scroll
//         }
//     }, [isModalOpen]);

//     const handleModalToggle = () => {
//         setIsModalOpen(!isModalOpen);
//     };

//     return (
//         <>
//             <section id='about-us' className='section-padding relative'>
//                 <div className='border-top-ornament'>
//                     <div className="ornament">
//                         <img src="" alt="" />
//                     </div>
//                 </div>
//                 <div className="w-full bg-[#F8F9FC] flex-custom-center">
//                     <div className='flex flex-col md:flex-row relative w-[80%] items-center gap-[3rem] h-full'>
//                         <div className='h-full flex items-center justify-center'>
//                             <Parallax
//                                 bgImage={card}
//                                 strength={parallaxStrength}
//                             >
//                                 <div className='md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover' />
//                             </Parallax>
//                         </div>

//                         <div className='flex md:justify-center w-full relative h-full'>
//                             <div className='flex-custom-col items-center md:items-start justify-center gap-4 mt-10 py-4'>
//                                 <div className='col-row col-row-title medium text-shadow mb-2'>
//                                     <h2 className='text-black'>For contacting the Ministry of AYUSH in India.</h2>
//                                 </div>
//                                 <div className='max-w-[90%] text-[1.5rem] space-y-6 py-2'>
//                                     <div className='md:text-left text-center w-full space-y-2'>
//                                         <p className='font-cormo font-medium text-black'>
//                                             Address: AYUSH Bhawan, B-Block, GPO Complex, INA, New Delhi - 110023, India
//                                             <br />
//                                             Phone Numbers: +91-11-24651950, +91-11-24651937
//                                             <br />
//                                             Email: For General Queries: webmanager-ayush@gov.in
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div
//                                     className={`btn w-[90%] btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none hover:text-white hover:bg-black`}
//                                     onClick={handleModalToggle}
//                                 >
//                                     <div className='btn-content gap-3'>
//                                         <span className=''>Create your own health card</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Modal and Overlay */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 z-50">
//                     {/* Overlay to block background scroll */}
//                     <div
//                         className="absolute inset-0 bg-black bg-opacity-90"
//                         onClick={handleModalToggle} // Close modal on overlay click
//                     ></div>

//                     {/* Modal */}
//                     <div className="absolute inset-0 flex items-center justify-center p-4">
//                         <div className="bg-white p-8 rounded-md w-[90%] md:w-[80%] lg:w-[60%] max-h-[90vh] overflow-y-auto relative">
//                             <h3 className="text-xl font-semibold mb-4">Create Your Health Card</h3>
//                             <form className="space-y-4">
//                                 <label className="block text-gray-700 font-semibold">Past medical records</label>
//                                 <input type="text" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Diagnosis date</label>
//                                 <input type="date" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Treatment for it</label>
//                                 <input type="text" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Vaccines name</label>
//                                 <input type="text" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Vaccine date</label>
//                                 <input type="date" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Test needed header</label>
//                                 <input type="text" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Test name</label>
//                                 <input type="text" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Test reason</label>
//                                 <input type="text" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Due date</label>
//                                 <input type="date" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Emergency contact header</label>
//                                 <input type="text" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Contact</label>
//                                 <input type="text" className="w-full p-2 border rounded-md" />

//                                 <label className="block text-gray-700 font-semibold">Relationship</label>
//                                 <input type="text" className="w-full p-2 border rounded-md" />

//                                 <div className="flex justify-end mt-4">
//                                     <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleModalToggle}>
//                                         Close
//                                     </button>
//                                     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//                                         Submit
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Section1;



import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import card from "./images/card.svg";

const Section1 = () => {
    const [parallaxStrength, setParallaxStrength] = useState(100);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form fields state
    const [formData, setFormData] = useState({
        past_medical_records: '',
        diagnosis_date: '',
        treatment: '',
        vaccines_name: '',
        vaccine_date: '',
        test_needed_header: '',
        test_name: '',
        test_reason: '',
        due_date: '',
        emergency_contact_header: '',
        contact: '',
        relationship: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; // Disable body scroll
        } else {
            document.body.style.overflow = 'auto'; // Re-enable body scroll
        }
    }, [isModalOpen]);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/user/healthCard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Health card created successfully!');
                setIsModalOpen(false); // Close modal on successful submission
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            alert('Failed to create health card. Try again.');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <section id='about-us' className='section-padding relative'>
                {/* Parallax section */}
                <div className='w-full bg-[#F8F9FC] flex-custom-center'>
                    <div className='flex flex-col md:flex-row relative w-[80%] items-center gap-[3rem] h-full'>
                        <div className='h-full flex items-center justify-center'>
                            <Parallax bgImage={card} strength={parallaxStrength}>
                                <div className='md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover' />
                            </Parallax>
                        </div>

                        {/* Text content */}
                        <div className='flex md:justify-center w-full relative h-full'>
                            <div className='flex-custom-col items-center md:items-start justify-center gap-4 mt-10 py-4'>
                                <h2 className='text-black'>For contacting the Ministry of AYUSH in India.</h2>
                                <p className='font-cormo font-medium text-black'>
                                    Address: AYUSH Bhawan, B-Block, GPO Complex, INA, New Delhi - 110023, India
                                    <br />
                                    Phone: +91-11-24651950, +91-11-24651937
                                    <br />
                                    Email: webmanager-ayush@gov.in
                                </p>
                                <div className='btn w-[90%] btn-svg h-[3rem] border-[1px] border-black' onClick={handleModalToggle}>
                                    Create your own health card
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal for form submission */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="absolute inset-0 bg-black bg-opacity-90" onClick={handleModalToggle}></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="bg-white p-8 rounded-md w-[90%] md:w-[80%] lg:w-[60%] max-h-[90vh] overflow-y-auto">
                            <h3 className="text-xl font-semibold mb-4">Create Your Health Card</h3>


                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {/* Existing fields */}
                                <label>Past medical records</label>
                                <input type="text" name="past_medical_records" value={formData.past_medical_records} onChange={handleInputChange} className="w-full p-2 border rounded-md" />

                                <label>Diagnosis date</label>
                                <input type="date" name="diagnosis_date" value={formData.diagnosis_date} onChange={handleInputChange} className="w-full p-2 border rounded-md" />

                                <label>Treatment</label>
                                <input type="text" name="treatment" value={formData.treatment} onChange={handleInputChange} className="w-full p-2 border rounded-md" />

                                <label>Vaccines name</label>
                                <input type="text" name="vaccines_name" value={formData.vaccines_name} onChange={handleInputChange} className="w-full p-2 border rounded-md" />

                                <label>Vaccine date</label>
                                <input type="date" name="vaccine_date" value={formData.vaccine_date} onChange={handleInputChange} className="w-full p-2 border rounded-md" />

                                {/* New fields for emergency contact */}
                                <label>Emergency Contact Name</label>
                                <input type="text" name="contact_name" value={formData.contact_name} onChange={handleInputChange} className="w-full p-2 border rounded-md" />

                                <label>Emergency Contact Phone</label>
                                <input type="text" name="phone_number" value={formData.phone_number} onChange={handleInputChange} className="w-full p-2 border rounded-md" />

                                <label>Relationship</label>
                                <input type="text" name="relationship" value={formData.relationship} onChange={handleInputChange} className="w-full p-2 border rounded-md" />

                                <div className="flex justify-end">
                                    <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleModalToggle}>Close</button>
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Section1;
