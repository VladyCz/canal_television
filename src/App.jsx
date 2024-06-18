import React from 'react';
import Navbar from './components/navbar';
import CardList from './components/cardList';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1>Las noticias en un solo lugar</h1>
        <CardList/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
