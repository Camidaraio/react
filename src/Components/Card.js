import "./Card.css";

//Card recibe un objeo con los datos. El objeto se llama  "card"
export default function Card ({card}) {
    //let imagen = "images/gato.jpg";
    //let titulo = "Telefono celular";
    let precio = 13662;
   // let precio_descuento = precio * 0.9; 
    let envio_gratis = true;
    
    return (
        <div className="card">
            {/* Podemos utilizar las propiedades como contenido
            de un atributo de HTML (src={imagen}) */}
           <img className="card-img" src={card.imagen} alt="" />
           <div>
                <h3>{card.titulo}</h3>
                <h4>{card.precio}</h4>

                {/* Si el precio es mayor a 2000 mostrar un parrafo que diga
                "OH POR DIOS" */}

               

                <p>${precio}</p>


                {/* {envio_gratis} esto puede no verse */}
                {/* Conditional rendering
                 && es un "entonces" 
                 Para más de una condición:
                  envio_gratis && precio < 200 &&
                No existe el else
                   Preguntamos el contrario 
                   ! para preguntar si es falso
                 */}

                {  /* {precio > 18 &&
                    <dmdmkls /> 
                } */}

                {precio > 20000 &&
                    <p>OH POR DIOS</p>
                }

                {envio_gratis &&
                     <p className="gratis" >¡Envío gratis!</p>
                }
                {!envio_gratis &&
                    <p>No es gratis</p>
                }
           </div>
        </div> 
    )
}

