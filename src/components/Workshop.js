import React from "react";
import artist1 from '../assets/tglgarba.jpg'; // Replace with actual paths
import artist2 from '../assets/th.jpeg';
import artist3 from '../assets/dhol.jpg';

const Workshop = () => {
  const artists = [
    {
      name: "TGL Garba",
      image: artist1,
      details: "TGL Garba brings together dancers of all skill levels to promote community spirit and cultural heritage",
    },
    {
      name: "Abhivykti Garba",
      image: artist2,
      details: "Abhivyakti Garba Indore creates an inclusive environment where everyone can experience the joy and unity of this festive dance form.",
    },
    {
      name: "Dholina Thara",
      image: artist3,
      details: "A dynamic performer with a unique fusion of classical and contemporary Garba dance, captivating audiences worldwide.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Indore's Biggest Garba Group</h1>
      <div style={styles.artistContainer}>
        {artists.map((artist, index) => (
          <div key={index} style={styles.artistCard}>
            <img src={artist.image} alt={artist.name} style={styles.artistImage} />
            <h2 style={styles.artistName}>{artist.name}</h2>
            <p style={styles.artistDetails}>{artist.details}</p>
          </div>
        ))}
      </div>
      <div style={styles.groupDescription}>
        <h2 style={styles.groupTitle}>About the Group</h2>
        <p style={styles.groupDetails}>
          Our Garba group brings together passionate dancers who celebrate the rich traditions of Garba. 
          We aim to spread joy and cultural heritage through our performances and workshops. Join us to 
          experience the vibrant spirit of Garba!
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "3em",
    marginBottom: "20px",
    color: "#e74c3c",
  },
  artistContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  artistCard: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: "0px",
    margin: "20px",
    width: "250px",
    height: "250px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    position: "relative",
  },
  artistImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "5px solid #ffcc00", // Border around the image
    objectFit: "cover", // Ensures the image covers the circular area
  },
  artistName: {
    fontSize: "2.0em",
    color: "#e74c3c",
    margin: "10px 0 5px",
  },
  artistDetails: {
    fontSize: "1em",
    color: "#666",
  },
  groupDescription: {
    marginTop: "40px",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  groupTitle: {
    fontSize: "2em",
    color: "#e74c3c",
  },
  groupDetails: {
    fontSize: "1.2em",
    color: "#666",
    marginTop: "10px",
  },
};

export default Workshop;
