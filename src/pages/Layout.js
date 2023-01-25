import { Outlet } from "react-router-dom"

import Navegacion from "../Components/Navegacion" 


export default function layout () {
    return (
        <>  
            <Navegacion />
            {/* El Outlet es el lugar donde se muestra el
             contenido de cada pagina
            */}
            <Outlet/>
            FOOTER
        </>
    )
}