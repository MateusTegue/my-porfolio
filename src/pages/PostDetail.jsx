import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerPostId } from "../api/blog.api";
import { motion } from "framer-motion";

export function PostDetail() {
    const { id } = useParams(); // Obtiene el ID de la URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await obtenerPostId(id);
                setPost(res.data);
            } catch (error) {
                console.error("Error al obtener la formación:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    if (loading) return <p className="text-center text-white">Cargando...</p>;
    if (!post) return <p className="text-center text-red-500">No se encontró la formación</p>;

    return (
        <main className="min-h-screen flex items-center justify-center">
            <motion.div className="container mt-20 p-4  bg-gray-700  justify-center "
        
                // 🎬 Animación al aparecer
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, ease: "easeOut" }}

                // 🎭 Animación al pasar el mouse
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}>

                <div className="w-full md:w-2/3 mx-auto">
                    {post.image && (<img src={post.image || defaultImage}  alt={post.title} className="w-2/3 mx-auto object-cover mb-4 " />)}
                </div>
                <div className="w-full md:w-2/3 mx-auto">
                    <h2 className="text-xl font-bold m-4">{post.title}
                    </h2>
                    <p className="text-gray-300 text-sm m-4">{post.description}</p>
                    <p className="text-gray-300 text-sm m-4">{post.date}</p>
                    <a href="/blog" rel="noopener noreferrer" className="inline-block m-4 mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition">Atras</a>

                </div>

            </motion.div>
        </main>
    );
}
