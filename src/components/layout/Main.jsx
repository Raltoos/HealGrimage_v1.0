import HeroSection from '../pages/HeroSection'
import Intro from '../pages/Intro'
import AboutUs from '../pages/AboutUs'
import ImageGallery from '../pages/ImageGallery'

const Main = () => {
  return (

    <div className='w-full h-full'>
      <HeroSection />
      <Intro/>
      <AboutUs />
      <ImageGallery/>
    </div>

  )
}

export default Main