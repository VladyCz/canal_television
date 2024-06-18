import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import CarruselPage from './pages/carruselPage.jsx';
import ListaPage from './pages/programasPage.jsx'
import ContactoPage from './pages/contactoPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/carrusel" element={<CarruselPage/>} />
        <Route path="/programas" element={<ListaPage/>} />
        <Route path="/contacto" element={<ContactoPage/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
