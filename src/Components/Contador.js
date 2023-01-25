import { useState } from "react"

export default function Contador() {
    // Primer paso: setear la cantidad y mostrarla en el parrafo
    const [cantidad, setCantidad] = useState(0);
    
    const [total, setTotal] = useState(0);

    const precioUnitario = 500;

    // 2do paso: Hacer andar el +
    // 3er paso: Hacer andar el -
function restar() {
    if (cantidad > 0){
         setCantidad(cantidad - 1);
    }
}

    return (
       <>
            <button onClick={restar}>-</button>
            <p> {cantidad} </p>
            <button onClick={() => setCantidad(cantidad + 1 )}>+</button> 
            <p>Total: $ {precioUnitario * cantidad} </p>
      </> 
    )
}