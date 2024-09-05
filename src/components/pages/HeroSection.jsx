import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";

const HeroSection = () => {
  const [parallaxStrength, setParallaxStrength] = useState(400);
  const [marginClass, setMarginClass] = useState("mt-[-10rem]");

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth <= 640) {
        // sm breakpoint
        setParallaxStrength(0);
        setMarginClass(""); // Remove the margin class on small devices
      } else {
        setParallaxStrength(400);
        setMarginClass("mt-[-10rem]"); // Apply the margin class on larger screens
      }
    };

    updateLayout(); // Set the initial value
    window.addEventListener("resize", updateLayout); // Update on window resize

    return () => window.removeEventListener("resize", updateLayout); // Cleanup
  }, []);

  return (
    <section id="featured" className="w-full h-full">
      <div className="flex-custom-center h-full w-full">
        <Parallax
          strength={parallaxStrength}
          bgImage="/jewellery/hero/HeroJewellery.jpg"
          bgImageAlt="Poolside table"
          bgImageStyle={{ objectFit: "cover" }}
        >
          <div
            style={{ height: "110vh" }}
            className={`hero-image flex-custom-center`}
          >
            <div
              className={`mt-5 ml-[10rem] gap-[5rem] flex-custom-center items-center justify-center w-full h-full ${marginClass}`}
            >
              <div className="flex-col justify-center items-start w-[500px] h-[25rem] t">
                <div className="hero-title">
                  <h1 className="text-shadow hero-h1 text-left mt-[-0.175em] mb-[-0.1em] font-cormo text-[var(--color-white)] ">
                    Catchy Insights
                  </h1>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-left text-[1.53rem] mt-[-1rem] text-[var(--color-white)] font-karla">
                    An experienced, full service, global imaging services and
                    solutions company, Medical Metrics, Inc. (MMI) delivers
                    independent, high-quality image analysis you can trust.
                  </span>
                </div>
                <div className="flex items-center justify-start">
                    <button className="bg-[#004f92] text-white p-2 rounded-xl mt-4">Talk With Us</button>
                </div>
              </div>
              <div className="w-1/2 h-[25rem] text-white flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col">
                  <h3 className="text-white">+26</h3>
                  <p className="text-white">Years of Experience</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white">+26</h3>
                  <p className="text-white">Years of Experience</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white">+26</h3>
                  <p className="text-white">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default HeroSection;
