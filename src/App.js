import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/app.css';
// import Navbar from './Components/Main/Navbar/Navbar.jsx';
import Home from './Components/index.js';
import Destinations from './Components/Destinations/Destinations.jsx';
import SingleDest from './Components/SingleDest/SingleDest.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/singledest" element={<SingleDest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
