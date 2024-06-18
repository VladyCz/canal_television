import React from 'react';
import franciaAustria from '../assets/francia.jpg';
import lunin from '../assets/lunin.jpg';
import mbappe from '../assets/mbappe.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  // Asegúrate de importar los estilos de Bootstrap

const Carrusel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={franciaAustria} className="d-block w-100" alt="Francia vs Austria" />
        </div>
        <div className="carousel-item">
          <img src={lunin} className="d-block w-100" alt="Lunin" />
        </div>
        <div className="carousel-item">
          <img src={mbappe} className="d-block w-100" alt="Mbappe" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrusel;
