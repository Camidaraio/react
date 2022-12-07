import "./Title.css"; 
// Exportamos nuestros componentes Title
// Los componentes son funciones

export default function Title () {
    return (
        // className es el equivalente a class en JSX
        <h1 className="title">
            Hola, te hablo desde el componente
        </h1>
    )
}

