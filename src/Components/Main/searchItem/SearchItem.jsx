import './searchitem.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../Assets/image (1).webp';

const SearchItem = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/singledest', {});
  };
  return (
    <div className="searchItemList">
      <img src={img1} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Turkiye, Capadoccia</h1>
        <span className="siType">500m from hotel</span>
        <span className="siAirportShuttle">Free airport taxi</span>
        <span className="siSubtitle">
          Magistic ballon rides in beautiful capadoccia.
        </span>
        <span className="siFeatures">4 Nights in a 5 star hotel</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price.
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$299</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button onClick={handleSearch} className="siCheckButton">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
