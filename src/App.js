import './App.css';
import Boton from './components/Boton.jsx';
import Contador from './components/Contador.jsx';
import { useState } from 'react';

function App() {
    const [numClics, setNumClics] = useState(0);

    const manejarClic = () => {
        setNumClics(numClics + 1);
    };

    const reiniciarContador = () => {
        setNumClics(0);
    };

    return (
        <div className="App">
            <div className="freecodecamp-logo-contenedor">
                <h1>Contador de Clics</h1>
            </div>
            <div className="contenedor-principal">
                <Contador numClics={numClics} />
                <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
                <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador} />
            </div>
        </div>
    );
}

export default App;
