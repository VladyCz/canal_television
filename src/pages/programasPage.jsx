import React from 'react';
import Navbar from '../components/navbar';
import Lista from '../components/programas';
import Footer from '../components/footer';

const SchedulePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Programacion Unitel</h1>
        <Lista />
      </div>
      <Footer/>
    </div>
  );
};

export default SchedulePage;
