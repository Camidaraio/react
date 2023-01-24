import "./CardWrapper.css";
import tarjetas from "../data/tarjetas.json"; 
import Card from "./Card";



export default function CardWrapper ({titulo}) {
    console.log(tarjetas);
    // JSX fragments
    // React.Fragment> (requiere un import de react)
   return (
    <>
        <h2>{titulo}</h2>
        <div className="grilla">
        {/*  mostrar en un parrafo cada titulo
          recorrer con un .map tarjetas
          numeros[indice]
          */}

        {/* 
        cuando usamos un .map los elementos internos
        necesitan una propiiedad "key* con un valor unico. Podemos  utilizar un Id o rl indice 
        del array

         <p key={index}>
                {tarjeta.titulo}
                </p>

        */}

          {tarjetas.map((tarjeta, index) => (
            <Card 
                key={index}
                card={tarjeta}
            />
          ))} 

         {/* <Card/>
         <Card/>
         <Card/>
        <Card/> */}

        </div>
    </>
   ) 
}

