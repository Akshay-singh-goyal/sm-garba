import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GarbaTicket.css';
import img1 from "../assets/scan.jpg"; // Placeholder for QR code image
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Ticket prices in USD
const ticketPriceUSD = 35;

// Currency conversion rates (example rates)
const currencyRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  INR: 74,
  AUD: 1.35,
  BDT: 107, // Bangladeshi Taka
  CAD: 1.25, // Canadian Dollar
  MYR: 4.20, // Malaysian Ringgit
  JPY: 110, // Japanese Yen
  SGD: 1.35, // Singapore Dollar
  DE: 0.85 // German Euro (same as EUR)
};

const TicketPurchaseCenter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketType: '',
    quantity: 1,
    currency: 'USD',
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const priceInSelectedCurrency = ticketPriceUSD * currencyRates[formData.currency];
    setTotalPrice(priceInSelectedCurrency * formData.quantity);
  }, [formData.ticketType, formData.quantity, formData.currency]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'quantity' ? Math.max(1, value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const ticketData = {
      ticketId: `TICKET-${Date.now()}`,
      ...formData,
      totalPrice,
    };
  
    console.log("Submitting ticket data:", ticketData); // Log the data being sent
  
    try {
      const response = await fetch('https://sm-backend-bnsl.onrender.com/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ticketData),
      });
  
      if (!response.ok) throw new Error('Failed to purchase ticket.');
  
      const data = await response.json(); // Get the response data
      console.log("Response from server:", data); // Log the response
      setPaymentComplete(true);
      setSuccessMessage('Ticket purchased successfully! Proceed to payment.');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleConfirmPayment = () => {
    alert('Ticket will be sent to the email after confirmation.');
  };

  return (
    <div> <Navbar/>
    <div className="ticket-purchase-center">
      {!paymentComplete ? (
        <form onSubmit={handleSubmit} className="ticket-form">
          <h2>Buy Ticket</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Ticket Type:
            <select
              name="ticketType"
              value={formData.ticketType}
              onChange={handleChange}
              required
            >
              <option value="">Select Ticket Type</option>
              <option value="regular">Regular - $35</option>
            </select>
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="1"
              required
            />
          </label>
          <label>
            Currency:
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
            >
              {Object.keys(currencyRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <p className="total-price">Total Price: {formData.currency} {totalPrice.toFixed(2)}</p>
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Proceed to Payment'}
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      ) : (
        <div className="payment">
          <h2>Complete Your Payment</h2>
          <p>Please scan the QR code or visit the payment link:</p>
          <img src={img1} alt="Payment QR Code" className="payment-image" />
          <p>Total Price: {formData.currency} {totalPrice.toFixed(2)}</p>
          <button onClick={handleConfirmPayment} className="approve-button">Confirm Payment</button>
          <div className="payment-notes">
            <h3>Payment Instructions:</h3>
            <p>If you're using Google Pay and encounter issues while scanning, please ensure that your country allows Google Pay. If not, you can send the payment directly to our bank account.</p>
          </div>
          <div className="bank-details">
            <h3>Bank Details:</h3>
            <p>Bank Name: HDFC Bank</p>
            <p>Account Name: Akshay Goyal</p>
            <p>Account Number: 50100551061607</p>
            <p>SWIFT/BIC: HDFCINBBIDR</p>
            <p>Branch: Indore Main</p>
            <p>UPI ID : akshaysinghrajput702-1@okhdfcabank</p>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
};

export default TicketPurchaseCenter;
