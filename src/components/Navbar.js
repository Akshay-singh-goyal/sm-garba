// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import slogo from "../assets/smlogo.png";
import "./Navbarstyle.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/" className="logo">
                    <img src={slogo} alt="SM Garba Logo" />
                </Link>
            </div>
            <div 
                className="hamburger" 
                onClick={toggleMenu} 
                aria-label="Toggle menu" 
                role="button"
                tabIndex={0} 
                onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }} // Accessibility for keyboard users
            >
                {isMenuOpen ? <FaTimes size={20} color="#fff" /> : <FaBars size={20} color="#fff" />}
            </div>
            <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                </li>
                <li>
                    <Link to="/garba-ticket" onClick={() => setIsMenuOpen(false)}>Garba Ticket</Link>
                </li>
                <li>
                    <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
