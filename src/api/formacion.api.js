import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


export const obtenerFormacion =  () => {
   return axios.get(`${API_URL}/formacion/`)

}

// obtener formacion por id
export const obtenerFormacionId = (id) => {
   return axios.get(`${API_URL}/formacion/${id}`)
   }  // obtener formacion por id




