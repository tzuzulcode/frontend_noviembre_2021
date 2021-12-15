import './App.css';
import Boton from './components/Boton';
import Peticion from './components/Peticion';
import EjemploAplicacion from './EjemploAplicacion';
import RickYMorty from './RickYMorty';
import {Routes,Route} from 'react-router-dom'
import Carrito from './pages/Carrito';
//Importar

function App() {
  //Escribir codigo de JavaScript
  // return (
  //   <div className="App">
  //     {/* Esto es un comentario de JSX */}
  //     {/* Esto es un comentario */}
  //     {/* <h1>Hola mundo</h1>
  //     <p>Hola, esto es un parrafo</p>
  //     <button>Esto es un boton</button>
  //     <Boton></Boton>
  //     <Boton/>
  //     <Peticion/> */}
  //   </div>
  // );

  return <div>
    <Routes>
      <Route path="/" element={<EjemploAplicacion/>}/>
      <Route path="/carrito" element={<Carrito/>}/>
      <Route path="/rickymorty" element={<RickYMorty/>}/>
      
    </Routes>
  </div>
}

export default App;
