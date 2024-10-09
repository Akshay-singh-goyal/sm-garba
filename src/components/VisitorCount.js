// src/components/VisitorCount.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VisitorCount.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const VisitorCount = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                const response = await axios.get('https://sm-backend-bnsl.onrender.com/api/visitor-count');
                setVisitorCount(response.data.count);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            }
        };
        fetchVisitorCount();
    }, []);

    return (
        <div className="visitor-count-container"> {/* Apply the CSS class */}
            <h1>Happy Customers</h1>
            <h2>{visitorCount} People outside India also enjoy this fest</h2>
            <p>Join us to enjoy India's biggest festival. Book your passes now!</p>
            <Link to="/garba-ticket">
            <button className="buy-passes-button" >
                Buy Passes
            </button>
            </Link>
        </div>
    );
};

export default VisitorCount;
