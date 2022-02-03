import './App.css';
import React from "react";
import Navbar from './components/Navbar'
import Grid from './components/Grid';
import { Routes,Route,Navigate } from 'react-router-dom';
import Sort from './components/Sort';
import Home from './components/Home'


function App() {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
      <Navigate to="/" />
        <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/sort" element={<Sort />}></Route>
          <Route path='/grid' element={<Grid />} />
          

        </Routes>


      </div>
      <div className="footer">
        
      </div>
      
    </div>
  );
}

export default App;


export default App;
