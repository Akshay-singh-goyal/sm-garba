import React from "react"
import {Route,Routes} from "react-router-dom"
import "./index.css";
import Home from "./routes/Home"
import Aboutus from "./routes/AboutUs"
import GarbaTicket from "./routes/GarbaTicket"
import Gallery from "./routes/Gallery"
import Contact from "./routes/Contact"



function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<Aboutus/>}/>
      <Route path="/garba-ticket" element={<GarbaTicket/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
