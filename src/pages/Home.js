import CardWrapper from "../Components/CardWrapper"
import EjemploEvento from "../Components/EjemploEvento"
import EjemploState from "../Components/EjemploState"
import Contador from "../Components/Contador"

export default function Home () {
    return (
        <>
        <h1>Estas en la home</h1>

        <Contador />
        <EjemploState />
        <EjemploEvento />
        <CardWrapper 
           titulo={"Ofertas"}
        />
        </>
    )
    
}