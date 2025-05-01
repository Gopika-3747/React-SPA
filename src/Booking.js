import React, { useState } from 'react';
import './booking.css';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destin,setdestin] = useState('');
  const [numPeople, setNumPeople] = useState(1);


  const handleBooking = () => {
    if (!name || !email || !destin) {
      alert("Please enter valid details!");
    } else {
      alert(`Booking confirmed for ${name}!`);
    }
  };

  return (
    <div className='booking-page'>
      <h2>Book Your Trip</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/><br/>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> <br/><br/>
         <label>Destination:</label>
        <input
          type="text"
          value={destin}
          onChange={(e) => setdestin(e.target.value)}
        /><br/>
        <label>Number of People:</label>
        <input
          type="number"
          value={numPeople}
          onChange={(e) => setNumPeople(e.target.value)}
        />
        <br/><br/>
        <button type="submit" onClick={handleBooking}>
          Confirm Booking
        </button>
        <br></br>
      </form>
      <br></br><br></br>
    </div>
  );
};

export default Booking;

