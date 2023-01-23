// import logo from './logo.svg';
import Title from './Components/Title';
import './App.css';
import Mascota from './Components/Mascota';
import Card from './Components/Card';

import Navegacion from './Components/Navegacion';

function App() {
  const numeros = [45, 78, 12, 787, 341];

  return (
    <div className="App">
    {numeros.map(numero => (
      <p>El numero es: {numero}</p>
    ))}
    
     {/* Llamamos al componente y le enviamos el parametro */}

      <Title 
        titulo={"Hola,como va"}
        subtitulo={ "Este es subtitulo del Title"}
      />
      <Card />
      <Mascota /> 
      <header className="App-header">
        <img src="images/gato.jpg" alt="Gato" />
       
      { /* <img src={logo} className="App-logo" alt="logo" /> */}
      { /* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

 /* <Navegacion /> */