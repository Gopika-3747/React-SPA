import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Navbar from './navbar';
import Destination from './Destination';
import Travelpack from './Travelpack';
import Booking from './Booking';
import Contact from './Contact';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
       <header><Navbar/></header>
       <br></br><br></br><br></br><br></br><br></br>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Destination" element={<Destination/>}></Route>
          <Route path="/Travelpack" element={<Travelpack/>} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      
      <footer> {<Footer/>}</footer>
      </div>
    </Router>
  );
}

export default App;
