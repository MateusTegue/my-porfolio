import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerFormacionId } from "../api/formacion.api";
import { motion } from "framer-motion";

export function FormacionDetail() {
    const { id } = useParams(); // Obtiene el ID de la URL
    const [formacion, setFormacion] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await obtenerFormacionId(id);
                setFormacion(res.data);
            } catch (error) {
                console.error("Error al obtener la formación:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    if (loading) return <p className="text-center text-white">Cargando...</p>;
    if (!formacion) return <p className="text-center text-red-500">No se encontró la formación</p>;

    return (
        <main className="min-h-screen flex items-center justify-center">
            <motion.div 
                className="container w-1/2 mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg justify-center "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
            <div className="container w-1/2 mx-auto bg-red-600">
                <img src={formacion.imagen || "https://via.placeholder.com/600x400"}  alt={formacion.title} className="w-full h-5/6    object-cover  mb-4"/>
            </div>
                <h2 className="text-3xl font-bold">{formacion.title}</h2>
                <p className="text-gray-300 mt-4">{formacion.description}</p>
                <a href="/formacion" rel="noopener noreferrer" className="block mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition">Atras</a>
        </motion.div>
        </main>
    );
}
