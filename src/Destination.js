import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './destination.css';

const destinations = [
  { name: 'Paris', description: 'The city of lights', image: 'paris.jpg' },
  { name: 'New York', description: 'The Big Apple', image: 'new-york.jpg' },
  { name: 'Tokyo', description: 'The heart of Japan', image: 'tokyo.jpg' },
  { name: 'Dubai', description: 'The jewel of the desert', image: 'dubai.jpg' }
];

const Destination = () => {
  const [searchQuery, setSearchQuery] = useState('');

  
  const searchResults = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='destinations'>
      
      <div className='search-container'>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search destinations'
          className='search-bar'
        />
        <button className='search-button'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </div>

      
      {searchQuery && (
        <div className='destinations'>
          <h2>Search Results for "{searchQuery}"</h2>
          <div className='destination-card'>
            {searchResults.length > 0 ? (
              searchResults.map((destination, index) => (
                <div key={index} className='destination-card'>
                  <img src={destination.image} alt={destination.name} />
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <Link to='/booking'>Book Now</Link>
                </div>
              ))
            ) : (
              <p>No destinations found.</p>
            )}
          </div>
        </div>
      )}

      {!searchQuery && (
        <div className='destinations'>
          <h2>Popular Destinations</h2>
          <div className='destination-card'>
            {destinations.map((destination, index) => (
              <div key={index} className='destination-card'>
                <img src={destination.image} alt={destination.name} />
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <Link to='/booking'>Book Now</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Destination;
