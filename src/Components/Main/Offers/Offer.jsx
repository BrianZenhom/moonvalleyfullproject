import React from 'react';
import './offer.css';
import { MdKingBed } from 'react-icons/md';
import { MdLocalTaxi } from 'react-icons/md';
import { MdAllInclusive } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';

// Imported images
import img1 from '../../../Assets/image (8).webp';
import img2 from '../../../Assets/image (9).jpg';
import img3 from '../../../Assets/image (10).jpg';

// Array images
const Offers = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Amalfi Coast',
    location: 'Italy',
    price: '$TBD-',
    beds: '2 Beds',
    offerPercentage: '30% Off',
  },
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Nile River',
    location: 'Cairo',
    price: '$TBD-',
    beds: '1 Bed',
    offerPercentage: '15% Off',
  },
  {
    id: 1,
    imgSrc: img3,
    destTitle: 'Bodrum',
    location: 'Turkiye',
    price: '$TBD-',
    beds: '2 Beds',
    offerPercentage: '10% Off',
  },
];

const Offer = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="title">Special Offers</h2>
          <p>
            Explore the world's most stunning historical cities and natural
            wonders with our curated travel experiences!
          </p>
        </div>

        <div className="mainContent grid">
          {Offers.map(
            ({
              id,
              imgSrc,
              destTitle,
              location,
              price,
              beds,
              offerPercentage,
            }) => {
              return (
                <div className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt="imName" />
                    <span className="discount">{offerPercentage}</span>
                  </div>

                  <div className="offerBody in">
                    <div className="price flex">
                      <h4>{price}</h4>
                      <span className="status">Availability may differ</span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdAllInclusive className="icon" />
                        <small>All inclusive</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdKingBed className="icon" />
                        <small>{beds}</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdLocalTaxi className="icon" />
                        <small>Shuttle</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdLocationOn className="icon" />
                        <small>
                          {destTitle}, {location}
                        </small>
                      </div>
                    </div>

                    <button className="btn flex">
                      View Details
                      <BsArrowRightShort className="icon" />
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Offer;
