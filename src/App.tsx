import React from 'react';
import './App.css';
import OptimalPinholeSimple from './pages/OptimalPinholeSimple';
import OptimalFocalSimple from './pages/OptimalFocalSimple';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home" 
import OptimalPinholeComplex from './pages/OptimalPinholeComplex';
import OptimalFocalComplex from './pages/OptimalFocalComplex';
function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Nautilus Pinhole Calculators</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/simple-pinhole" element={<OptimalPinholeSimple/>}/>
            <Route path="/simple-focal" element={<OptimalFocalSimple/>}/>
            <Route path="/complex-pinhole" element={<OptimalPinholeComplex/>}/>
            <Route path="/complex-focal" element={<OptimalFocalComplex/>}/>
            {/* <Route path="/" element={}/> */}
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
