import React from 'react';
import ParallaxScroll from './Components/ParallaxScroll';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Content from './Components/Content'

const App = () => {
  return (
    <div> 
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<></>} />
            <Route path="/content" element={<Content />} /> 
          </Routes>
      </Router>
      <ParallaxScroll />
    </div>
  );
};

export default App;
