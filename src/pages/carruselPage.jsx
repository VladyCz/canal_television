import React from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/carrusel';
import CommentForm from '../components/comentarios';
import Footer from '../components/footer';

const carruselPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Las mejores imagenes del día</h1>
        <Carousel />
        <h2 className="mt-4">Deja tu comentario</h2>
        <CommentForm />
      </div>      
      <Footer/>
    </div>
  );
};

export default carruselPage;
