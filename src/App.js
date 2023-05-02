import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/app.css';
import Home from './Components/index.js';
import Destinations from './Components/Destinations/destinations.jsx';
import SingleDest from './Components/SingleDest/SingleDest.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destinations />} />
        <Route path="/SingleDest" element={<SingleDest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
