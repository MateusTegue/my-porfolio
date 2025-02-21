import { useEffect, useState } from "react";
import { obtenerFormacion } from "../api/formacion.api";
import { FormacionCard } from "./FormacionCard";
import bannerFormaciones from "../assets/bannerFormaciones.png";
import {ClipLoader } from "react-spinners";

export function FormacionList() { 
    const [formacion, setFormacion] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
       async function cargarFormacion(){
            try {
                const res = await obtenerFormacion();
                setFormacion(res.data);
            } catch (error) {
                console.error("Error cargando la formación:", error);
            } finally {
                setLoading(false);
                }
        }
        cargarFormacion();
    }, []);

    return (
        <main>
            <section className="container mx-auto mt-16 w-full flex justify-center items-center">
              <img src={bannerFormaciones}  alt="Ejemplo" className="w-full max-w-4xl m-9 h-auto object-contain rounded-xl shadow-lg"/>
            </section>

            <div className="container mx-auto px-4 py-8">
            {isLoading ? (
                
                <div className="flex justify-center items-center h-40">
                    <ClipLoader size={50} color={"#3B82F6"} loading={isLoading} />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
                    {formacion.map((item) => (
                        <FormacionCard key={item.id} formacion={item} />  
                    ))}
                </div>
            )}
        </div>
  
        </main>
    );
} 
