// src/pages/UserProfile.jsx
import React, { useState } from 'react';
import axios from '../services/api';

const UserProfile = () => {
  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('Archivo subido exitosamente.');
    } catch (error) {
      setUploadError('Error al subir el archivo. Por favor, intenta de nuevo.');
    }
  };

  return (
    <div className="user-profile">
      <h2>Perfil de Usuario</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir Archivo</button>
      {uploadError && <p className="error">{uploadError}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default UserProfile;
