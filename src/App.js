import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [timeCurrent, setTimeCurrent] = useState({
    seconds: "",
    minutes: "",
    hours: ""
  });

  setTimeout(() => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    setTimeCurrent({
      seconds: String(seconds).length === 1 ? `0${seconds}` : seconds,
      minutes,
      hours: String(hours).length === 1 ? `0${hours}` : hours
    });
  }, 1000);

  const { hours, minutes, seconds } = timeCurrent;

  return (
    <div className="App">
      <h2>Fecha y Hora</h2>
      <div className="clock">
        <h2>
          {hours}:{minutes}:{seconds}
        </h2>
      </div>
    </div>
  );
}
