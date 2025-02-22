import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const obtenerProjects =  () => {
   return axios.get(`${import.meta.env.VITE_API_URL}/api/endpoint`);


}