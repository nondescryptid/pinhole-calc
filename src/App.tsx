import React from 'react';
import './App.css';
import OptimalPinholeSimple from './pages/OptimalPinholeSimple';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Router } from 'express';
import Home from "./pages/Home" 

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Sroyon's Pinhole Calculators</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/simple-focal" element={<OptimalPinholeSimple/>}/>
            {/* <Route path="/" element={}/> */}
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
