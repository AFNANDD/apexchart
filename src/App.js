import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='app-container'>
        <div class="sidebar">
          <div class="sidebar-info">
            <p class="title">sidebar</p>
          </div>
        </div>
          <div className='page-container'>
            <div className='page-info'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
