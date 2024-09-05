import React from 'react'
import HeroSection from '../HeroSection'
import Intro from './Intro'
import ImageSlider from './ImageSlider'
import AboutUs from './AboutUs'
import ImageGallery from './ImageGallery'


const AYUSH = () => {
  return (
    <div className='w-full h-full'>
      <AboutUs />
      <ImageSlider />
      <ImageGallery/>
      <Intro/>
      {/* <HeroAyush/> */}
    </div>
  )
}

export default AYUSH