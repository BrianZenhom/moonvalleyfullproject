import DestNavbar from '../Main/DestNavbar/DestNavbar';
import Footer from '../Main/Footer/Footer';
import { HiLocationMarker } from 'react-icons/hi';
import { BsArrowLeftShort } from 'react-icons/bs';
import { BsArrowRightShort } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import './singledest.css';

import img1 from '../../Assets/image (1).webp';
import img2 from '../../Assets/image (14).jpg';
import img3 from '../../Assets/image (13).jpg';
import img4 from '../../Assets/image (15).jpg';
import img5 from '../../Assets/image (1).jpg';
import img6 from '../../Assets/image (12).jpg';
import { useState } from 'react';

const SingleDest = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img4,
    },
    {
      src: img5,
    },
    {
      src: img6,
    },
  ];

  const handleOpen = i => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = direction => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <DestNavbar />
      <div className="destContainer">
        {open && (
          <div className="slider">
            <IoClose
              className="icon closeIcon"
              onClick={() => setOpen(false)}
            />
            <BsArrowLeftShort
              className="icon Arrow Left"
              onClick={() => handleMove('l')}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <BsArrowRightShort
              className="icon Arrow Right"
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className="destWrapper container">
          <button className="bookNow">Book Now!</button>
          <h1 className="destinTitle">Capadoccia</h1>
          <div className="destinAddress">
            <HiLocationMarker className="icon" />
            <span>Turkiye</span>
          </div>
          <span className="destinationDistance">
            Excellent Location According to - 2034 reviews
          </span>
          <span className="destinationPriceHighlight">
            Book a stay over $TBD at this destination and get a free tour
          </span>
          <div className="destinationImages">
            {photos.map((photo, i) => (
              <div className="destinationImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="destinationImage"
                />
              </div>
            ))}
          </div>
          <div className="destinationDetails">
            <div className="destinationDetailsText">
              <h1 className="destinationTitle">
                Stay in the heart of capadoccia.
              </h1>
              <p className="descDestDetail">
                Welcome to the mystical and mesmerizing land of Cappadocia, a
                destination that will leave you spellbound with its natural
                beauty, rich history, and unique culture. Located in the heart
                of Turkiye, Cappadocia is a must-visit destination for anyone
                who loves to explore the beauty of the world.
              </p>
              <br />
              <p>
                As you embark on your journey to Cappadocia, you will be greeted
                by the breathtaking views of fairy chimneys, rock formations,
                and ancient cave dwellings. The unique landscape of this region
                is a result of millions of years of natural erosion and volcanic
                activity, and it's no wonder that it has been declared a UNESCO
                World Heritage Site.
              </p>
            </div>
            <div className="destinationDetailsPrice">
              <h1>Perfect for a 4-night stay!</h1>
              <span>
                Located in Turkiye, this destination has excellent score of 9.8
                according to 2034 reviews.
              </span>
              <h2>
                <b>$TBD</b> (3 Nights)
              </h2>
              <button>Book now!</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SingleDest;
