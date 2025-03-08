import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Viewer from './Component/Viewer'
import HomePage from '../src/Component/Pages/HomePage'
import Explore from './Component/Pages/Explore'
import SinglePage from './Component/Pages/singlePage';
// import VirtualTour from './Component/Pages/Pararoma';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<SinglePage />} /> */}
         <Route path="/explore" element={<Explore />} />
        |<Route path="/details/:id" element={<SinglePage />} />
        |<Route path="/viewer/:id" element={<Viewer />} />
        {/* |<Route path="/panaramo" element={<VirtualTour />} /> */}
      </Routes>
    </Router>

    // <div>
    //   <Panaroma />
    // </div>
  )
}

export default App
