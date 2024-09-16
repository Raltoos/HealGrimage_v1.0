import AboutUs from "../pages/AboutUs";
import HeroSection from "../pages/HeroSection";
import ImageGallery from "../pages/ImageGallery";
import Intro from "../pages/Intro";
import Footer from "./components/Footer/Footer";
import LNavbar from "./components/LNavbar/LNavbar";
import Testimonials from "./components/Testimonials/Testimonials";
import "./landing.css"; // Import your CSS file

const Landing = () => {
  return (
    <>
      <div className="landing-all-main">
        <LNavbar className='bg-black '/>
        <div className="">
          <HeroSection />
          <Intro />
          <AboutUs />
          <ImageGallery />
          <Testimonials />
          <Footer  />
        </div> 
      </div>
    </>
  );
};

export default Landing;
