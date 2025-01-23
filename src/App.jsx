import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Viewer from './Component/Viewer'
import HomePage from '../src/Component/Pages/HomePage'
import Explore from './Component/Pages/Explore'
import Detail from './Component/Pages/ProductDetail'
import ProductDetail from "./Component/Pages/ProductDetail";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/explore" element={<Explore />} />
        |<Route path="/details/:id" element={<ProductDetail />} />
        |<Route path="/viewer/:id" element={<Viewer />} />
      </Routes>
    </Router>

    // <div>
    //   <Viewer />
    // </div>
  )
}

export default App
