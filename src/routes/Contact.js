// client/src/components/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Optional: Add styles for the form
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappnumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://sm-backend-8me3.onrender.com/api/bookings', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', whatsappnumber: '', message: '' }); // Reset form
    } catch (error) {
      alert('Error saving booking: ' + error.response.data.error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="booking-form-container">
        <h1>May I help you</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Name" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email" 
            required 
          />
          <input 
            type="text" 
            name="whatsappnumber" 
            value={formData.whatsappnumber} 
            onChange={handleChange} 
            placeholder="WhatsApp Number" 
            required 
          />
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Message" 
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookingForm;
