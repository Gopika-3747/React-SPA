import React from 'react';
import { Link } from 'react-router-dom';
import './travelpack.css'

const packages = [
  { name: 'Family Package', price: 500, description: 'Fun for the whole family!' },
  { name: 'Adventure Package', price: 750, description: 'For the thrill seekers.' },
  { name: 'Luxury Package', price: 1200, description: 'Experience luxury travel.' }
];

const Travelpack = () => {
  return (
    <div className='travel-packages'>
      <h2>Available Travel Packages</h2>
      <div className='package-card'>
        {packages.map((pkg, index) => (
          <div key={index}>
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>
            <p className='price'>Price: ${pkg.price}</p>
            <Link to="/booking">Book Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travelpack;

