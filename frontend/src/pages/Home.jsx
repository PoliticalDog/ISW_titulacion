import React from 'react';
import '../estilos/estilos.css';
import imagen2 from '../imagenes/library-7720589_1280.jpg'; // Asegúrate de usar la extensión correcta de la imagen

const Home = () => {
  return (
    <div className="home">
      <div className="item1">
        <h1>Sobre nosotros</h1>
        <p>Este proyecto sirve como biblioteca para los proyectos de Titulación, 
          donde se podra buscar y acceder por medio de un perfil </p>
          <div class="fb-page" data-href="https://www.facebook.com/Catt.ESCOM.Oficial" data-tabs="timeline" data-width="500" data-height="300" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Catt.ESCOM.Oficial" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Catt.ESCOM.Oficial">CATT ESCOM</a></blockquote></div>
      </div>
      {/* Componente más pequeño al lado */}
      <div className="item2" style={{ backgroundImage: `url(${imagen2})` }}>
        <div className="overlay">
        </div>
      </div>
    </div>
  );
};

export default Home;
