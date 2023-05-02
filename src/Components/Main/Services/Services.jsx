import React from 'react';
import './services.css';

// Images =============================
import img from '../../../Assets/flight-ticket.png';
import img2 from '../../../Assets/hotel-accomodation.png';
import img3 from '../../../Assets/Guided-Tours.png';

// Video
import video from '../../../Assets/video.mp4';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="title">Our services</h2>
          <p>Some of the details to expect from our services</p>
        </div>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img} alt="ImName" />
            <h3>Flight Reservations</h3>
            <p>
              Tickets with competitive pricing a wide selection of airlines and
              routes to meet your travel needs.
            </p>
          </div>

          <div className="singleItem">
            <img src={img2} alt="ImName" />
            <h3>Hotel Accomodation</h3>
            <p>
              The best rooms, quality amenities and excellent service for a
              comfortable and enjoyable stay.
            </p>
          </div>

          <div className="singleItem">
            <img src={img3} alt="ImName" />
            <h3>Guided Tours</h3>
            <p>
              Exceptional unforgettable experiences with knowledgeable guides
              carefully crafted itineraries
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2 className="title">Wonderful Pamukkale</h2>
              <p>
                Natural wonder in Turkey, where thermal springs create stunning
                white terraces of travertine.
              </p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4">
                Here
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
