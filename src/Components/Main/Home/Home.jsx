/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import { MdTravelExplore } from 'react-icons/md';
import { MdCalendarToday } from 'react-icons/md';
import { MdOutlinePeopleAlt } from 'react-icons/md';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

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

const Home = () => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const domNode = useClickOutsideDate(() => {
    setOpenDate(false);
  });

  const domOp = useClickOutsideOptions(() => {
    setOpenOptions(false);
  });

  const handleSearch = () => {
    navigate('/destinations', { state: { destination, date, options } });
  };

  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Discover your next adventure.</h1>
          <p className="subTitle">Let us take the hassle out of planning!</p>

          <button onClick={handleSearch} className="btn">
            <h1 className="mainButton">Explore</h1>
          </button>
        </div>

        <div className="headerSearch grid">
          <div className="headerSearchItems searchItem">
            <MdTravelExplore className="headerSearchIcon" />
            <input
              spellcheck="false"
              type="text"
              placeholder="Where are you traveling?"
              className="headerSearchInput"
              onChange={e => setDestination(e.target.value)}
            ></input>
          </div>

          <div ref={domNode} className="headerSearchItems">
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              <MdCalendarToday className="headerIcon" />
              {`${format(date[0].startDate, 'E, d MMM')} - ${format(
                date[0].endDate,
                'E, d MMM'
              )}`}
            </span>
            {openDate && (
              <DateRange
                minDate={new Date()}
                onChange={item => setDate([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={date}
                direction="horizontal"
                className="date"
              />
            )}
          </div>

          <div ref={domOp} className="headerSearchItems">
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >
              <MdOutlinePeopleAlt className="headerIcon" />
              {`${options.adult} adult • ${options.children} children • ${options.room} room`}
            </span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption('adult', 'd')}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption('adult', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="headerBtn btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
