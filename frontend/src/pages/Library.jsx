// src/pages/Library.jsx
import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const Library = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="library">
      <h2>Biblioteca de Proyectos de Titulación</h2>
      {projects.map(project => (
        <div key={project.id} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Autor: {project.author}</p>
          <p>Calificación: {project.rating}</p>
          <p>Año: {project.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Library;
