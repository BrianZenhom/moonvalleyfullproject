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
              <strong> Moon Valley Tours </strong> had humble beginnings. It all
              started 15 years ago when <strong> Susana Abdel Salam </strong>, a
              passionate traveler herself, founded the company in the heart of
              Cairo, Egypt. She had a vision of creating a travel agency that
              would provide unique and unforgettable experiences for travelers
              from all around the world.
            </p>
            &nbsp;
            <p>
              Susana worked hard to establish her company in the competitive
              travel industry. She knew that customer satisfaction was the key
              to success, and she made it her top priority. We quickly gained a
              reputation for providing exceptional service and personalized
              attention to each of our clients.
            </p>{' '}
            &nbsp;
            <p>
              As the years passed, we continued to grow and expand our services.
              The company's focus on quality and customer satisfaction paid off,
              and it now boasts over <strong> 200.000+ </strong>
              satisfied customers.
            </p>
            &nbsp;
            <p>
              We've become a<strong> leading travel agency </strong> , known for
              our expertise in creating tailor-made travel packages to clients
              looking for something special.
            </p>
            &nbsp;
            <p>
              Eventually we've moved our
              <strong> headquarters to Turkiye,</strong> where it continues to
              thrive. The company's new location has allowed it to expand its
              services even further, offering clients the chance to explore new
              destinations and discover new experiences.
            </p>
            &nbsp;
            <p>
              As CEO of MoonValleyTours, Susana remains committed to providing
              the <strong> best possible travel experiences </strong> for her
              clients. Her passion for travel and her dedication to customer
              satisfaction are the driving forces behind the company's success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
