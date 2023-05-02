import { useLocation } from 'react-router-dom';
import Navbar from '../Main/DestNavbar/DestNavbar';
import { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import './destinations.css';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../Main/searchItem/SearchItem';

//click outside date close
const useClickOutsideDate = handler => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};

const useClickOutsideOptions = handler => {
  const domOp = useRef();

  useEffect(() => {
    const maybeHandler = event => {
      if (!domOp.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domOp;
};

const Destinations = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const domNode = useClickOutsideDate(() => {
    setOpenDate(false);
  });

  return (
    <div>
      <Navbar />
      <div className="searchSection">
        <div className="searchContainer container">
          <div className="searchContent">
            <div ref={domNode} className="searchBox">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input placeholder={destination} type="text" />
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, 'E, d MMM')} - ${format(
                    date[0].endDate,
                    'E, d MMM'
                  )}`}
                </span>
              </div>
              {openDate && (
                <DateRange
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
              <div className="lsItemOption">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      min={1}
                      type="number"
                      className="lsOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      min={0}
                      type="number"
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      min={1}
                      type="number"
                      className="lsOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
                <button className="searchButton">Search</button>
              </div>
            </div>

            <div className="resultBox">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
