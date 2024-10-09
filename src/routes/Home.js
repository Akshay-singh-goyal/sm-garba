// Home.js
import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Eventdetails from "../components/Eventdetails"
import Workshop from "../components/Workshop";
import VisitorCount from "../components/VisitorCount";

const albums = [
  { id: 1, title: 'Garba Nights', image: '../assets/img1.jpg' },
  { id: 2, title: 'Festival of Joy', image: '../assets/img2.jpg' },
  { id: 3, title: 'Dance Extravaganza', image: '../assets/img3.jpg' },
  { id: 4, title: 'Excitement', image: '../assets/img5.jpg' },
  { id: 5, title: 'Celebration', image: '../assets/img6.jpg' },
  { id: 6, title: 'Memories', image: '../assets/img9.jpg' },
  { id: 7, title: 'Joyful Moments', image: '../assets/photo.jpg' },
];

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <Navbar />
      <Slider />
      
      <div style={styles.aboutUs}>
        <h1 style={styles.heading}>About SM Garba</h1>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>Welcome to SM Garba!</h2>
          <p>
            At SM Garba, we are passionate about bringing the vibrant spirit of Garba to the online world.
            Our platform connects Garba enthusiasts from around the globe, allowing them to participate in
            this rich cultural dance form, no matter where they are. We leverage technology to provide a
            seamless and interactive experience for users to enjoy Garba events, workshops, and classes online.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>Join Us</h2>
          <p>
            Whether you're a seasoned dancer or a curious beginner, we invite you to join our community.
            Sign up for our newsletter to stay updated on upcoming classes, events, and special offers.
            Together, let’s keep the Garba spirit alive!
          </p>
        </section>
      </div>
      
      <ImageSlider />
              <VisitorCount/>
      <Eventdetails/>
      <Workshop/>
      <Footer />
      
     
      
    </div>
  );
};

const styles = {
  homeContainer: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    padding: '0',
    margin: '0',
  },
  aboutUs: {
    padding: '20px',
    maxWidth: '800px',
    margin: '20px auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
    color: '#ff5722',
  },
  section: {
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  subHeading: {
    color: '#e74c3c', // Accent color
    margin: '40px 0 20px',
    fontSize: '2em', // Larger title
  },
  galleryHeading: {
    textAlign: 'center',
    margin: '60px 0 30px',
    fontSize: '2.5em',
    color: '#e74c3c', // Accent color
  },
  albums: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '20px',
  },
  album: {
    backgroundColor: '#252525', // Darker section for albums
    borderRadius: '8px',
    margin: '15px',
    overflow: 'hidden', // To ensure images fit within bounds
    transition: 'transform 0.3s', // Transition for hover effect
    flex: '0 1 calc(25% - 30px)', // Four albums in a row with space
  },
  albumImage: {
    width: '100%', // Full width of the album container
    height: 'auto', // Maintain aspect ratio
  },
  albumTitle: {
    padding: '10px',
    fontSize: '1.2em',
    color: '#eaeaea', // Light text color
  },
};

export default Home;
