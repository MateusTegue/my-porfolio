import { useEffect, useState } from "react";
import { obtenerProjects } from "../api/projects.api";
import { ProjectCard } from "./ProjectCard";
import bannerProjects from "../assets/BannerProyectos.png";


export function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function cargarProjects() {
            const res = await obtenerProjects();
            setProjects(res.data);
        }
        cargarProjects();
    }, []);

    return (
        <main>
           <section className="container mt-30 mx-auto  w-full h-96 flex justify-center items-center">
              <img src={bannerProjects}  alt="Ejemplo"  className="w-full max-w-md h-auto object-contain rounded-xl"/>
            </section>


            <div className="container mx-auto  px-4 py-8">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center justify-center">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </main>
        
    );
}
