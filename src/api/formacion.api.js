import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


export const obtenerFormacion =  () => {
   return axios.get(`${import.meta.env.VITE_API_URL}/api/endpoint`);


}

// obtener formacion por id
export const obtenerFormacionId = (id) => {
   return axios.get(`${import.meta.env.VITE_API_URL}/api/endpoint`);

   }  // obtener formacion por id




