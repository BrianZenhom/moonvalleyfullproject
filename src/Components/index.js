import React from 'react';
import '../app.css';
import Services from '../Components/Main/Services/Services.jsx';
import Navbar from '../Components/Main/Navbar/Navbar';
import Home from '../Components/Main/Home/Home';
import Footer from '../Components/Main/Footer/Footer.jsx';
import Offer from '../Components/Main/Offers/Offer.jsx';
import Popular from '../Components/Main/Popular/Popular.jsx';
import About from '../Components/Main/About/About.jsx';

const index = () => {
  return (
    <div>
      <>
        <Navbar />
        <Home />
        <Popular />
        <Offer />
        <Services />
        <About />
        <Footer />
      </>
    </div>
  );
};

export default index;
