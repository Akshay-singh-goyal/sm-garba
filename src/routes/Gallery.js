// src/Gallery.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import './Gallery.css';
import img1 from '../assets/img1.jpg'; // Replace with actual image paths
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/photo.jpg';
import Navbar from '../components/Navbar';

const albums = [
  { id: 1, title: 'Garba Nights', image: img1 },
  { id: 2, title: 'Festival of Joy', image: img2 },
  { id: 3, title: 'Dance Extravaganza', image: img3 },
  { id: 4, title: 'Excitement', image: img4 },
];

const Gallery = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div>
    <Navbar/>
    <div className="gallery">
      
      <h2>Photo Gallery</h2>
      <div className="albums">
        {albums.map(album => (
          <div key={album.id} className="album">
            <img src={album.image} alt={album.title} className="album-image" />
            <p className="album-title">{album.title}</p>
          </div>
        ))}
      </div>
      </div>
      <footer className='footer'>
        <Footer />
        <p>SM Garba - Where Tradition Meets Technology</p>
      </footer>
    </div>
  );
}

export default Gallery;
