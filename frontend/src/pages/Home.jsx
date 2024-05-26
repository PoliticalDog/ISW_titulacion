import React from 'react';
import '../estilos/estilos.css';
import imagen from '../imagenes/5528913.jpg'; // Asegúrate de usar la extensión correcta de la imagen

const Home = () => {
  return (
    <div className="home">
      <div className="grid-container">
        <div className="item1" style={{ backgroundImage: `url(${imagen})` }}>
          <div className="overlay">
            <h2>Texto para la imagen 1</h2>
          </div>
        </div>
        <div className="item2" style={{ backgroundImage: `url(${imagen})` }}>
          <div className="overlay">
            <h2>Texto para la imagen 2</h2>
          </div>
        </div>
        {/* Agrega más divisiones aquí si es necesario */}
      </div>
    </div>
  );
};

export default Home;
