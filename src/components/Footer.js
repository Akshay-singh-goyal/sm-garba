// src/Footer.js
import { FaHome, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./FooterStyle.css";
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            <div>
              <p>Indore</p>
              <p>Madhya Pradesh</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            <div>
              <p>+91 6263615262</p>
            </div>
          </div>
          <div className="email">
            <FaEnvelope size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            <div>
              <p>smgarbaevent@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <p>© 2024 SM Garba. All Rights Reserved.</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} style={{ color: "#fff", marginRight: "0.5rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
