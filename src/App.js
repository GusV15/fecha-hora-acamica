import React from 'react';
import './App.css';

function App() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  return (
    <div className="App">
      <h1>Practica guiada:</h1>
      <h2>¡Realicemos un reloj!</h2>
      <div className="clock">
        <h2>
          {hours}:{minutes}:{seconds}
        </h2>
      </div>
      <p>
        Hasta ahora, este componente toma la hora del broswer para renderizarla.
      </p>
      <p>
        ¿Que cambios debemos hacer en este componente para poder modificar la
        hora, segundo a segundo?
      </p>
    </div>
  );
}

export default App;
