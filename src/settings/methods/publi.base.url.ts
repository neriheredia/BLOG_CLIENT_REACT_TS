import axios from 'axios';

export const publicBaseURL = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access-token')}`,
  },
});
