// src/AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './AboutUs.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleBackClick = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div>
      <Navbar/> {/* Navbar taking full width */}
      
      <div className="about-us">

        <h1>About SM Garba</h1>

        <section className="introduction">
          <h2>Welcome to SM Garba!</h2>
          <p>
            At SM Garba, we are passionate about bringing the vibrant spirit of Garba to the online world. 
            Our platform connects Garba enthusiasts from around the globe, allowing them to participate in 
            this rich cultural dance form, no matter where they are. We leverage technology to provide a 
            seamless and interactive experience for users to enjoy Garba events, workshops, and classes online.
          </p>
        </section>

        <section className="mission">
          <h2>Our Mission: Celebrate and Connect</h2>
          <p>
            Our mission is to celebrate the rich traditions of Garba while fostering connections within the community. 
            We aim to:
          </p>
          <ul>
            <li>Provide an accessible platform for Garba lovers to connect.</li>
            <li>Offer high-quality online workshops and events led by experienced instructors.</li>
            <li>Promote cultural awareness and appreciation through Garba.</li>
          </ul>
        </section>

        <section className="offerings">
          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>Online Garba Classes:</strong> Participate in live sessions from the comfort of your home. 
              Our expert instructors guide you through various Garba styles.
            </li>
            <li>
              <strong>Virtual Events:</strong> Join us for online Garba events that include live music, competitions, 
              and community gatherings, all designed to keep the spirit alive.
            </li>
            <li>
              <strong>Workshops:</strong> Attend workshops focusing on Garba history, choreography, and costume design, 
              providing a holistic understanding of this beautiful art form.
            </li>
            <li>
              <strong>Community Engagement:</strong> Connect with fellow enthusiasts through forums, discussion boards, 
              and social media, sharing tips, experiences, and dance moves.
            </li>
          </ul>
        </section>
       
        <section className="join-us">
          <h2>Join Us</h2>
          <p>
            Whether you're a seasoned dancer or a curious beginner, we invite you to join our community. 
            Sign up for our newsletter to stay updated on upcoming classes, events, and special offers. 
            Together, let’s keep the Garba spirit alive!
          </p>
        </section>
        </div>
      <div className='footer'>
          <Footer />
          <p>SM Garba - Where Tradition Meets Technology</p>
          </div>
        
      
    </div>
  );
}

export default AboutUs;
