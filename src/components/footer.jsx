import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebookLogo from '../assets/facebook.png'; // Asegúrate de que la ruta es correcta

const Footer = () => {
  return (
    <>
      <div className="mt-5"></div>
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Nosotros</h5>
              <p>¿Quieres tu marca en Unitel.bo?
                Envíe un correo electrónico a <a href="mailto:publicidad@unitel.com.bo" className="text-white">publicidad@unitel.com.bo</a>
              </p>
            </div>
            <div className="col-md-4">
              <h5>Contacto</h5>
              <ul className="list-unstyled">
              <li><a href="/contacto" className="text-white">Formulario de Contacto</a></li>
                <li><a href="mailto:publicidad@unitel.com.bo" className="text-white">publicidad@unitel.com.bo</a></li>
                <li>
                  <a href="https://www.facebook.com/unitelbolivia" className="text-white" target="_blank" rel="noopener noreferrer">
                    <img src={facebookLogo} alt="Facebook" style={{ width: '20px', marginRight: '8px' }} />
                    Página de Facebook de unitel
                  </a>
                </li>                
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Enlaces Útiles</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Política de Privacidad</a></li>
                <li><a href="#" className="text-white">Términos y Condiciones</a></li>
                <li><a href="#" className="text-white">Ayuda</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Unitel. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
