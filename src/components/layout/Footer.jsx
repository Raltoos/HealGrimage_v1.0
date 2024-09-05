import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const Footer = () => {
  const [parallaxStrength, setParallaxStrength] = useState(100);

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

  return (
    <>
      <footer className="p-0 relative bg-white">
        <div className="max-w-[100vw] pl-0 pr-0">
          <div className="relative grid grid-cols-1 lg:grid-cols-3 w-full">
            <div className="border-custom"></div>
            {/* SideNav */}
            <nav className="footer-nav w-full">
              <div className="menu-title">
                <span className="eyebrow text-[0.8rem] text-black">Menu</span>
              </div>
              <ul className="menu-list">
                {[
                  { text: "Home", href: "#featured" },
                  { text: "About Us", href: "#category" },
                  { text: "AYUSH", href: "#about-us" },
                  { text: "Services", href: "#gallery" },
                ].map((item, index) => (
                  <li className="menu-item" key={index}>
                    <a
                      href={item.href}
                      className="text-[#38220f] menu-link hover-circle"
                    >
                      <span className="side-nav-link font-cormo font-medium text-black">
                        {item.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* ShortLinks */}
            <div className="footer-nav flex w-full">
              <div className="lg:border-left border-custom"></div>

              <div className="flex flex-col min-w-[10em]">
                <div className="column-title">
                  <span className="eyebrow text-[0.8rem]">Links</span>
                </div>
                <ul className="short-links-list">
                  {["Packages", "Health Visa", "Our Story"].map(
                    (item, index) => (
                      <li className="short-link-item" key={index}>
                        <a className="short-link font-karla" href="#">
                          <span className="text-[1.02rem] hover-underline text-black">
                            {item}
                          </span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="flex flex-col">
                <div className="short-links-column">
                  <div className="column-title">
                    <span className="eyebrow text-[0.8rem]">Other</span>
                  </div>
                  <ul className="short-links-list">
                    {["Copyrights", "Privacy Policy", "T&C"].map(
                      (item, index) => (
                        <li className="short-link-item" key={index}>
                          <a className="short-link  font-karla" href="#">
                            <span className="hover-underline text-black">
                              {item}
                            </span>
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* contacts */}
            <div className="footer-nav flex w-full">
              <div className="lg:border-left border-custom w-full"></div>
              <div className="flex flex-col min-w-[10em]">
                <div className="column-title">
                  <span className="eyebrow text-[0.8rem]">Contacts</span>
                </div>
                <div className="flex flex-col gap-[1.5em]">
                  <ul className="short-links-list">
                    {[
                      "1001, Marol, Emperial heights",
                      "Mumbai, Maharshtra",
                    ].map((item, index) => (
                      <li className="short-link-item" key={index}>
                        <a className="short-link  font-karla" href="">
                          <span className="hover-underline">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="short-links-list">
                    {[
                      "T: +62 877 888 41008",
                      "E: medicalTourism@India.com",
                    ].map((item, index) => (
                      <li className="short-link-item" key={index}>
                        <a className="short-link  font-karla" href="">
                          <span className="hover-underline text-black">
                            {item}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* footer-end */}
          <div className="relative flex w-full justify-between">
            <div className="border-custom"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
