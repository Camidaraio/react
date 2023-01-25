import CardWrapper from "../Components/CardWrapper"
import EjemploEvento from "../Components/EjemploEvento"

export default function Home () {
    return (
        <>
        <h1>Estas en la home</h1>
        <EjemploEvento />
        <CardWrapper 
           titulo={"Ofertas"}
        />
        </>
    )
    
}