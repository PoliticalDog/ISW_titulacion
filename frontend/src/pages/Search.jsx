// src/pages/Search.jsx
import React, { useState } from 'react';
import axios from '../services/api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/projects/search?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching projects:', error);
    }
  };

  return (
    <div className="search">
      <h2>Búsqueda de Proyectos de Titulación</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar por título, autor, etc."
      />
      <button onClick={handleSearch}>Buscar</button>
      {results.map(result => (
        <div key={result.id} className="project">
          <h3>{result.title}</h3>
          <p>{result.description}</p>
          <p>Autor: {result.author}</p>
          <p>Calificación: {result.rating}</p>
          <p>Año: {result.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;
