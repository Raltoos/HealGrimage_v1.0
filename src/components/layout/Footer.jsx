import React, { useState } from 'react'
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';


const Footer = () => {
  const [parallaxStrength, setParallaxStrength] = useState(100);
  
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

  return (
    <>
      <footer className='p-0 relative bg-white'>
        <div className='max-w-[100vw] pl-0 pr-0'>
          <div className='relative grid grid-cols-1 lg:grid-cols-3 w-full'>
            <div className='border-custom'></div>
            {/* SideNav */}
            <nav className='footer-nav w-full'>
              <div className='menu-title'>
                <span className='eyebrow text-[0.8rem] text-black'>Menu</span>
              </div>
              <ul className='menu-list'>
                {[{ text: 'Home', href: '#featured' },
                { text: 'About Us', href: '#category' },
                { text: 'AYUSH', href: '#about-us' },
                { text: 'Services', href: '#gallery' }].map((item, index) => (
                  <li className='menu-item' key={index}>
                    <a href={item.href} className='text-[#38220f] menu-link hover-circle'>
                      <span className='side-nav-link font-cormo font-medium text-black'>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* ShortLinks */}
            <div className='footer-nav flex w-full'>
              <div className="lg:border-left border-custom"></div>

              <div className="flex flex-col min-w-[10em]">
                <div className='column-title'><span className='eyebrow text-[0.8rem]'>Links</span></div>
                <ul className='short-links-list'>
                  {["Packages", "Health Visa", "Our Story"].map((item, index) => (
                    <li className='short-link-item' key={index}>
                      <a className='short-link font-karla' href="#">
                        <span className='text-[1.02rem] hover-underline text-black'>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex flex-col'>
                <div className='short-links-column'>
                  <div className='column-title'><span className='eyebrow text-[0.8rem]'>Other</span></div>
                  <ul className='short-links-list'>
                    {["Copyrights", "Privacy Policy", "T&C"].map((item, index) => (
                      <li className='short-link-item' key={index}>
                        <a className='short-link  font-karla' href="#">
                          <span className='hover-underline text-black'>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* contacts */}
            <div className='footer-nav flex w-full'>
              <div className="lg:border-left border-custom w-full"></div>
              <div className="flex flex-col min-w-[10em]">
                <div className='column-title'>
                  <span className='eyebrow text-[0.8rem]'>Contacts</span>
                </div>
                <div className='flex flex-col gap-[1.5em]'>
                  <ul className='short-links-list'>
                    {["1001, Marol, Emperial heights", "Mumbai, Maharshtra"].map((item, index) => (
                      <li className='short-link-item' key={index}>
                        <a className='short-link  font-karla' href="">
                          <span className='hover-underline'>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className='short-links-list'>
                    {["T: +62 877 888 41008", "E: medicalTourism@India.com"].map((item, index) => (
                      <li className='short-link-item' key={index}>
                        <a className='short-link  font-karla' href="">
                          <span className='hover-underline text-black'>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* footer-end */}
          <div className='relative flex w-full justify-between'>
            <div className="border-custom"></div>
          </div>
        </div>
      </footer>
      {/* imageWithButton */}
      <section className='w-full h-full'>
        <div className='flex-custom-center h-full w-full relative'>
          <Parallax
            strength={parallaxStrength}
            speed={100}
            bgImage="/jewellery/hero/heroRing.png"
            bgImageAlt="Poolside table"
            bgImageStyle={{ objectFit: "cover" }}
          >
            <div style={{ height: '40vh' }} className='hero-image flex-custom-center'>
              <div className={`btn w-15 btn-svg bg-[#052560] h-[3rem] rounded-none`}>
                <div className='btn-content gap-1 text-[var(--copy-size-m)]'>
                  <span className='text-white font-karla'>Contact us</span>
                  <svg className='size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.049,4.907A9.91,9.91,0,0,0,3.456,16.864L2.049,22,7.3,20.621a9.91,9.91,0,0,0,4.734,1.208h0A9.912,9.912,0,0,0,19.048,4.908Zm-7.008,15.25a8.221,8.221,0,0,1-4.195-1.15l-.3-.18-3.118.817.833-3.039-.195-.312a8.239,8.239,0,1,1,15.215-4.38,8.255,8.255,0,0,1-8.24,8.243Zm4.516-6.172c-.246-.125-1.465-.722-1.692-.8s-.391-.125-.559.125-.64.8-.785.973-.288.187-.535.062a6.8,6.8,0,0,1-1.992-1.23A7.547,7.547,0,0,1,9.616,11.4c-.145-.246-.016-.382.11-.5s.246-.289.371-.434a1.645,1.645,0,0,0,.247-.414.458.458,0,0,0-.02-.434c-.063-.125-.559-1.344-.762-1.84S9.156,7.352,9,7.344s-.31-.008-.473-.008a.917.917,0,0,0-.66.309A2.78,2.78,0,0,0,7,9.712a4.819,4.819,0,0,0,1.011,2.562,11.046,11.046,0,0,0,4.23,3.739c.59.254,1.051.406,1.41.524a3.421,3.421,0,0,0,1.559.1,2.548,2.548,0,0,0,1.672-1.176,2.061,2.061,0,0,0,.145-1.176c-.058-.111-.222-.171-.472-.3Z" fill='white' fill-rule="evenodd"></path></svg>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </section>
    </>
  )
}

export default Footer