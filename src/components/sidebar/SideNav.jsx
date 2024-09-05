import React from 'react'

const SideNav = ({handleToggle}) => {
  return (
    <div className='side-nav-content'>
      <nav className='nav-menu'>
      <div className='menu-title'>
                <span className='eyebrow text-[0.8rem]'>Menu</span>
              </div>
              <ul className='menu-list'>
                {[{ text: 'Featured', href: '#featured' },
                { text: 'Category', href: '#category' },
                { text: 'About Us', href: '#about-us' },
                { text: 'Gallery', href: '#gallery' }].map((item, index) => (
                  <li className='menu-item' key={index}>
                    <a href={item.href} className='text-[#38220f] menu-link hover-circle' onClick={handleToggle}>
                      <span className='side-nav-link font-cormo font-medium'>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
      </nav>
    </div>
  )
};

export default SideNav