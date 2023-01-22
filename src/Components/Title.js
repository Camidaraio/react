import "./Title.css"; 

// Exportamos nuestros componentes Title
// Los componentes son funciones

export default function Title ({
    titulo,
    subtitulo
    }) {
    // const titulo = "contenido";
    return (
        // className es el equivalente a class en JSX
        <div>
            <h1 className="title">
                {titulo}
            </h1>
            {/*
            Opcion 1
             Pregunto si se recibio un subtitulo, si es asi creo el parrafo
            si no, muestro u texto predeterminado

            Ternary / condicional terario
            */}
                <p>{subtitulo ? subtitulo : "predeterminado"}</p>
            
            
             {/*
             Opcion 2:
             si el subtitulo se envio, lo muestro,sino no hago nada: 
             
             {subtitulo &&
                <p>{subtitulo}</p>
             } */}
            
        </div>    
    )
}
 /* 
    if (subtitulo) {
        mostrar subtitulo
    } else {
     mostrar "predeterminado"
    }
    */
   
