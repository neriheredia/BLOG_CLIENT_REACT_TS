import axios from 'axios';

export const publicBaseURL = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
