import { motion } from "framer-motion";


export function ProjectCard({ project }) {
   
    const defautImage = "https://via.placeholder.com/600x400";

    return (
        <motion.div 
            className="container max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl  shadow-lg text-white bg-gray-700 mx-auto p-2"
            
            // 🎬 Animación al aparecer
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}

            // 🎭 Animación al pasar el mouse
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
        >
          {project.image && (<img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 "/>)}
            <h2 className="text-xl font-bold m-4">{project.title.length > 10 ? project.title.substring(0, 15) + "..." : project.title}</h2>
            <p className="text-gray-300 text-sm m-4">{project.description.length > 10 ? project.description.substring(0, 40) + "..." : project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 hover:bg-blue-600 transition inline-block text-center ">Ver Proyecto</a>


        </motion.div>
           
        

    );
}