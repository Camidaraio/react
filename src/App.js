// import logo from './logo.svg';
import Title from './Components/Title';
import './App.css';
import Mascota from './Components/Mascota';
import Card from './Components/Card';


function App() {
  return (
    <div className="App">
      <Title />
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
