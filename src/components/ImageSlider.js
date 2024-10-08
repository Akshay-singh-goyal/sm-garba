import React, { useState } from 'react';
import './ImageSlider.css'; 
import img1 from '../assets/img1.jpg'; 
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img5.jpg';
import img5 from '../assets/img6.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/photo.jpg';

const albums = [
  { id: 1, title: 'Garba Nights', image: img1 },
  { id: 2, title: 'Festival of Joy', image: img2 },
  { id: 3, title: 'Dance Extravaganza', image: img3 },
  { id: 4, title: 'Excitement', image: img4 },
  { id: 5, title: 'Celebration', image: img5 },
  
  { id: 7, title: 'Joyful Moments', image: img7 },

];

const ImageSlider = () => { 
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const headingStyle = {
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
    color: '#ff5722',
  }

  return (
    <div className="gallerys">
      <h1 style={headingStyle}>Gallery</h1>
      <div className="slider">
        {albums.map((album) => (
          <div className="slide" key={album.id} onClick={() => openModal(album.image)}>
            <img src={album.image} alt={album.title} className="img" />
            <h3>{album.title}</h3>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img src={selectedImage} alt="Selected" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ImageSlider; 
