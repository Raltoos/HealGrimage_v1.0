import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import card from "./images/card.svg";

const Section1 = () => {
    const [parallaxStrength, setParallaxStrength] = useState(100);
    const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const updateParallaxStrength = () => {
      if (window.innerWidth <= 640) {
        // sm breakpoint
        setParallaxStrength(0);
      } else {
        setParallaxStrength(100);
      }
    };

    updateParallaxStrength(); // Set the initial value
    window.addEventListener("resize", updateParallaxStrength); // Update on window resize

    return () => window.removeEventListener("resize", updateParallaxStrength); // Cleanup
  }, []);

  // Lock body scroll when modal is open, enable it when closed
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable body scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable body scroll
    }
  }, [isModalOpen]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section id="about-us" className="section-padding relative">
        <div className="border-top-ornament">
          <div className="ornament">
            <img src="" alt="" />
          </div>
        </div>
        <div className="w-full bg-[#F8F9FC] flex-custom-center">
          <div className="flex flex-col md:flex-row relative w-[80%] items-center gap-[3rem] h-full">
            <div className="h-full flex items-center justify-center">
              <Parallax bgImage={card} strength={parallaxStrength}>
                <div className="md:h-[30rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover" />
              </Parallax>
            </div>

            <div className="flex md:justify-center w-full relative h-full">
              <div className="flex-custom-col items-center md:items-start justify-center gap-4 mt-10 py-4">
                <div className="col-row col-row-title medium text-shadow mb-2">
                  <h2 className="text-black">
                    Create your own
                  </h2>
                </div>
                <div className="max-w-[90%] text-[1.5rem] space-y-6 py-2">
                  <div className="md:text-left text-center w-full space-y-2">
                    <p className="font-cormo font-medium text-black">
                    Create your personalized Health Card now to keep all your medical information at your fingertips.
                    </p>
                  </div>
                </div>
                <div
                  className={`btn w-[90%] btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none hover:text-white hover:bg-black`}
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="btn-content gap-3">
                    <span className="">Create your own health card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full ${isModalOpen ? "h-[1300px]" : "h-0"} flex justify-center`}>
          {isModalOpen && (
            <div className="flexbg-white p-8 rounded-md w-[90%] md:w-[80%] lg:w-[60%] max-h-[90vh]">
              <h3 className="text-2xl font-semibold mb-10">
                Create Your Health Card
              </h3>
              <form className="space-y-4">
                <label className="block text-gray-700 font-semibold">
                  Past medical records
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Diagnosis date
                </label>
                <input type="date" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Treatment for it
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Vaccines name
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Vaccine date
                </label>
                <input type="date" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Test needed header
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Test name
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Test reason
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Due date
                </label>
                <input type="date" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Emergency contact header
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Contact
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />

                <label className="block text-gray-700 font-semibold">
                  Relationship
                </label>
                <input type="text" className="w-full p-2 border rounded-md" />

                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={handleModalToggle}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Section1;
