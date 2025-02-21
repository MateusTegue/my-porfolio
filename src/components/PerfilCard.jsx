
export function PerfilCard({ perfil }) {  // 🔹 Extraer 'perfil' de 'props'
    return (
    <div className="flex items-center justify-center min-h-screen px-4 pt-20 ">
         <div className="container mx-auto text-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-5xl">
            
            {/* 📷 Sección de imagen */}
            <div className="w-full lg:w-1/4 flex justify-center items-center m-3">
            {perfil.imagen && (<img src={perfil.imagen} alt={perfil.nombre} className="max-w-[200px] w-full h-auto object-contain"/>)}
            </div>

            {/* 📝 Sección de texto */}
            <div className="w-full lg:w-1/1 p-6  flex flex-col justify-center text-center lg:text-left ">
            <h2 className="text-2xl text-start font-bold">{perfil.nombre}</h2>
            <h2 className="text-xl text-start text-white">{perfil.perfilOcupaciona}</h2>
            <p className="mt-2 text-start text-white">{perfil.descripcion}</p>
            <button className="bg-blue-500 text-white font-semibold py-2 m-1 px-4 rounded-lg hover:bg-blue-600 transition inline-block w-36">
                Dscargar CV
            </button>
            </div>
           
         </div>
    </div>

    );
}