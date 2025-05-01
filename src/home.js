import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to TravelHub!</h1>
      <p style= {{textAlign: "center"}}>Discover the joy of seamless travel with SkyHigh Travel Agency, your one-stop solution for all your travel needs. Whether you're planning a relaxing beach vacation, an adventurous trek, or a luxurious international getaway, we've got you covered.
      </p>
<h2>Who We Are?</h2>
<p>TravelHub Travel Agency is dedicated to crafting personalized travel experiences. With years of expertise and a passionate team, we aim to turn your travel dreams into reality. From flight bookings to hotel reservations and curated itineraries, we handle it all so you can focus on enjoying your journey.</p>

<h2>Why Choose Us?</h2>
<br></br>
<ul>
<li>Customized Packages: Tailor your trips according to your preferences and budget.</li><br/>
<li>24/7 Support: We're always here to assist you at every step of your journey.</li><br/>
<li>Expert Guidance: Our travel consultants offer the best advice to make your trip memorable.</li><br/>
<li>Hassle-free bookings.</li><br/>
<li>Affordable travel deals.</li><br/>
<li>A journey full of unforgettable memories.</li><br/>
</ul>
<br></br>
<h3>User Reviews</h3>
<p>Here's what our happy clients have to say about their experience:</p>
<div className='boxes'>
<li><i>"An Unforgettable Experience!"</i>
<br/><i>
“I booked my vacation through TravelHub, and everything was perfect! The recommendations were spot on, and the customer service was incredible. Can't wait for my next adventure!”</i><br/>
<span id="client">— Priya S., New Delhi</span></li><br/>
<li><i>"Exceptional Guidance and Support"</i>
<br/>
<i>“This was my first solo trip, and the TravelHub team was so supportive. Their tips and advice made me feel safe and prepared.”</i><br></br>
<span id="client">— Meera V., Hyderabad</span></li><br/>
<li><i>"Hassle-Free Travel Planning"</i><br/>

<i>"TravelHub made booking my honeymoon trip so easy. From flights to accommodations, everything was seamless. Highly recommend!"</i><br/>
<span id="client">— Rahul M.,Bangalore</span></li><br/>
<li><i>"Memories of a Lifetime"</i>
<br/><i>
“I explored Europe with TravelHub, and it was the best decision! The itinerary was well-planned, and I felt supported throughout my journey.”</i>
<span id="client">— Arjun R., Chennai</span></li><br/>
</div>

<br/>
<p style= {{textAlign: "center",fontWeight: "bold" }}>Let's Get Started!
Begin your adventure with us today! Explore our range of packages or get in touch with our expert team to start planning your dream vacation.</p>
      <nav>
        <Link to="/destination">Explore Destinations</Link>
        <Link to="/travelpack">View Travel Packages</Link>
      </nav>
      <br/>
    </div>
  );
};

export default Home;

