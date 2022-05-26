import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Student from './Components/Student';

import "./style.css"

const App = () => {
  return (
    <div>

    <BrowserRouter>
          
        <Navbar />

        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/student' element={<Student />} />
          <Route path='/contact' element={<Contact />} />
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
