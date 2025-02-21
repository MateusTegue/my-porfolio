import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function PostCard({post}){
    const defaultImage = "https://via.placeholder.com/600x400";

    return (
        <motion.div className="container p-4 flex flex-col md:flex-row bg-gray-700  justify-center "
        
            // 🎬 Animación al aparecer
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}

            // 🎭 Animación al pasar el mouse
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}>

        <div className="w-full md:w-96 ">
            {post.image && (<img src={post.image || defaultImage}  alt={post.title} className="w-2/3 mx-auto object-cover mb-4 " />)}
        </div>
        <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold m-4">{post.title.length > 10 ? post.title.substring(0, 250) + "..." : post.title}
            </h2>
            <p className="text-gray-300 text-sm m-4">{post.description.length > 100 ? post.description.substring(0, 50) + "..." : post.description}</p>
            <p className="text-gray-300 text-sm m-4">{post.date}</p>
            <Link to={`/blog/${post.id}`} className="inline-block w-28 m-4  bg-blue-500 text-white font-semibold py-2 rounded-lg text-center hover:bg-blue-600 transition">Leer...</Link>
        </div>

    </motion.div>
        )
}