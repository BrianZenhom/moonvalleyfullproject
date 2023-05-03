import React from 'react';
import './about.css';

import imgSusi from '../../../Assets/imgSusi.webp';

const About = () => {
  return (
    <section id="about" className="about container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">About Us</h2>
          <p>A brief part of our history.</p>

          <div className="ourHistory">
            <img className="storeFront" src={imgSusi} alt="" />
            <p>
              <b>Moon Valley Tours</b> is a travel agency established in
              <b> Istanbul in 2014</b> by an experienced owner with a vision for
              exceptional travel experiences. Our team is highly trained to
              provide clients with superior <b>services 24/7</b> all year round.
              We offer a wide range of travel
              <b> services in Turkey and worldwide</b>, including hotel
              accommodations, airline tickets, transportation, travel insurance,
              and corporate travel services.
            </p>
            &nbsp;
            <p>
              Our mission is to satisfy our clients with the highest levels of
              service and become one of the <b>top travel agencies in Turkey</b>
              . We provide incoming leisure and religious trips, combined
              packages between Turkey and Europe, airport meet and assist
              services, and more. We also offer new services such as
              <b> low-cost tickets</b>, apartments, villas, hostels, summer
              camps, medical packages, international cruises, private yacht
              packages, and visa or residence support services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
