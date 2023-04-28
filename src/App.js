import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activietes';
import Booking from "./components/Booking";
import Gallery from "./components/Gallery"
import Contact from './components/Contact';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Form />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
