import './App.css';
import Artworks from './component/Artwork/Artworks';
import Carousel from './component/Carousel/Carousel';
import About from './component/FrontendCrud/About';

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Info from './component/FrontendCrud/info';
import Navigation from './component/NavBar/Navigation';

// import { useState, useEffect } from 'react';
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { ContextInfo } from './component/Artwork/Hooks/useContext.js/Context';
// import { Preview } from './NewFile/Preview';
// import axios from 'axios'


function App() {

  return (
    <div className="App">
      {/* <ContextInfo.Provider 
      > */}
      <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Artworks />} />
          <Route exact path="/carousel" element={<Carousel />} />
          <Route exact path="/about" element={<About />} />

        </Routes>

        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Link to="/"  style={{color: "#4e4e4e"}}> Home </Link>
        <Link to="/carousel" style={{color: "#4e4e4e"}}> Carousel </Link>
        <Link to="/about" style={{color: "#4e4e4e"}}> About </Link>
      </div>
      </Router>

      
      
      {/* </ContextInfo.Provider> */}



      {/* <Home onSuccess={onSuccess}/> */}
      {/* <Preview files={files}/> */}
      {/* <ToastContainer/> */}
    </div>
  );
}

export default App;
