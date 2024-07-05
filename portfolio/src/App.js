// Ensure these paths are correct relative to App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; // Correct path


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
