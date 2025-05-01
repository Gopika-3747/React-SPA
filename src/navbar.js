import React from 'react'
import { Link } from 'react-router-dom'
import'./navbar.css'

const Navbar = () => {
  return (
    <div className='navmain'>
      <h1 className="heading">
  Travel<span>Hub</span>
</h1>
    <nav className='navig'>
      <Link to= "/">Home</Link>
        <Link to="/Destination">Destinations</Link>
        <Link to="/Travelpack">Travel Packages</Link>
        <Link to="/Booking">Booking</Link>
        <Link to="/Contact">Contact Us</Link>
    </nav>
    </div>
  )
}

export default Navbar
