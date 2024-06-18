import React from 'react';
import Navbar from '../components/navbar';
import Contacto from '../components/contacto';
import Footer from '../components/footer';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Contactanos</h1>
        <Contacto />
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
