import React from 'react'

const ShortLinks = () => {
    return (
        <>
            <div className='short-links-container'>
                <div className='short-links-column'>
                <div className='column-title'><span className='eyebrow text-[0.8rem]'>Links</span></div>
                <ul className='short-links-list'>
                  {["E-commerce", "Jewellers", "Landing page"].map((item, index) => (
                    <li className='short-link-item' key={index}>
                      <a className='short-link font-karla' href="#">
                        <span className='text-[1.02rem] hover-underline'>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
                <div className='short-links-column'>
                <div className='column-title'><span className='eyebrow text-[0.8rem]'>Other</span></div>
                  <ul className='short-links-list'>
                    {["Copyrights", "Privacy Policy", "T&C"].map((item, index) => (
                      <li className='short-link-item' key={index}>
                        <a className='short-link  font-karla' href="#">
                          <span className='hover-underline'>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
        </>
    )
}

export default ShortLinks

