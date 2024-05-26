import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND || 'http://localhost:5000/api';

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
