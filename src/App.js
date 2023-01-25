import {Routes, Route} from "react-router-dom"

import './App.css';


// Importamos las paginas y el Layout 
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Layout from "./pages/Layout"; 
import MensajeError from "./pages/MensajeError";

// import Navegacion from './Components/Navegacion';


function App() {
  return (
<div className="App">
     {/*  <Navegacion />*/}

    <Routes>

      <Route path="/" element={<Layout />}>
      <Route index element= {<Home /> } />
      <Route path="nosotros" element={<Nosotros />} />

    {/* Si la ruta no coincide con ninguna de las anteriores, mostrar un 404 */}

      <Route path="*" element={<MensajeError />} />
    </Route>
  </ Routes>




</div>
  );
}

export default App;
