import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export function FormacionCard({ formacion }) {
    const defaultImage = "https://via.placeholder.com/600x400";

    return (
        <motion.div 
            className=" container max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-2xl shadow-lg text-white bg-gray-700 mx-auto p-4"
            
            // 🎬 Animación al aparecer
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}

            // 🎭 Animación al pasar el mouse
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
        >
            {formacion.imagen && (
                <img src={formacion.imagen || defaultImage}  alt={formacion.title} className="w-full h-48 object-cover mb-4 rounded-xl" />)}
            <h2 className="text-xl font-bold m-4">
                {formacion.title.length > 10 ? formacion.title.substring(0, 15) + "..." : formacion.title}
            </h2>
            <p className="text-gray-300 text-sm m-4">
                {formacion.description.length > 10 ? formacion.description.substring(0, 20) + "..." : formacion.description}
            </p>
            <a href={formacion.url} target="_blank" className="m-4 text-blue-500 hover:text-red-500">Certificado</a>
   
            <Link to={`/formacion/${formacion.id}`} className="block mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition">Leer más...</Link>
        </motion.div>
    );
}
