import axios from 'axios';

export const publicBaseURL = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
});
