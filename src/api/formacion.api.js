import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;


export const obtenerFormacion =  () => {
   return axios.get(`${API_URL}/api/formacion/`)

}

// obtener formacion por id
export const obtenerFormacionId = (id) => {
   return axios.get(`${API_URL}/api/formacion/${id}`)
   }  // obtener formacion por id




