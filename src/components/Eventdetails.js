import React from "react";
import backgroundImg from '../assets/img8.jpg'; // Adjust the path as necessary

const UpcomingEvents = () => {
  const eventDetails = {
    title: "Upcoming Events",
    artist: "SM Garba",
    date: "08 Oct to 12 Oct",
    startTime: "6:00 PM",
    lineup: "ALL NIGHT LONG",
    ticketLink: "/garba-ticket", // Replace with the actual ticket link
  };

  return (
    <div style={styles.container}>
      <div style={styles.eventContainer}>
        <h1 style={styles.title}>{eventDetails.title}</h1>
        <h2 style={styles.artist}>{eventDetails.artist}</h2>
        <p style={styles.date}>Date: {eventDetails.date}</p>
        <p style={styles.time}>Start Time: {eventDetails.startTime}</p>
        <p style={styles.lineup}>Line Up: {eventDetails.lineup}</p>
        <a href={eventDetails.ticketLink} style={styles.button}>
          Buy Ticket
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundImage: `url(${backgroundImg})`, // Set the background image
    backgroundSize: "cover", // Cover the entire container
    backgroundPosition: "center", // Center the background image
    padding: "20px",
    display: "flex",
    justifyContent: "flex-end", // Aligns text to the right
    height: "100vh", // Set a height to ensure the background is visible
  },
  eventContainer: {
    maxWidth: "1200px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "5em",
    color: "#fff    ",
    textAlign: "right",
    marginBottom:"-40px",
  },
  artist: {
    fontSize: "3.5em",
    color: "#FF0AEE",
    textAlign: "centre",
    marginBottom: "10px",
  },
  date: {
    fontSize: "2.2em",
    textAlign: "right",
    margin: "10px 0",
  },
  time: {
    fontSize: "2.2em",
    textAlign: "right",
    margin: "10px 0",
  },
  lineup: {
    fontSize: "2.2em",
    textAlign: "right",
    margin: "10px 0",
  },
  button: {
    display: "inline-block",
    padding: "10px 20px",
    marginTop: "20px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    textAlign: "center",
    transition: "background-color 0.3s",
  },
};

export default UpcomingEvents;
