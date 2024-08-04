// Ensure these paths are correct relative to App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from './Pages/Home'; // Correct path
import Home1 from './Pages/Home1';


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home1 />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
