

import './App.css'
// import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './components/TopProducts/TopProducts';
import React from 'react';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);


  return (
    <>
      <div>

        <Navbar handleOrderPopup={handleOrderPopup} />

        <Hero></Hero>
        <Products></Products>
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Products></Products>
        <Testimonials />
        <Footer></Footer>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />

      </div>

    </>
  )
}

export default App
