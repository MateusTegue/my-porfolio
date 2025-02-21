import { useEffect, useState } from "react"
import { obtenerPerfil } from "../api/perfil.api"
import { PerfilCard } from "./PerfilCard"


// componente para listar la informacion del perfil, la cual se encuentra en el backend
export function PerfilList(){
    
    const [perfil, setPerfil] = useState([])

    useEffect(() => {
       async function cargarPerfil(){
            const res = await obtenerPerfil([])
            setPerfil(res.data)
        }
        cargarPerfil()
    }, [])

    return <div>
        {perfil.map((perfil) =>(
          <PerfilCard  perfil={perfil} />
        ))}
    </div> ;
        
}