
import axios from "axios";

// Obtener la URL de la API desde el entorno
const API_URL = import.meta.env.VITE_API_URL;

// Función para obtener todos los posts
export const obtenerPosts = async () => {
    return axios.get(`${import.meta.env.VITE_API_URL}/api/endpoint`);

}

// Función para obtener un post por ID
export const obtenerPostId = async (id) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/api/endpoint`);

}
