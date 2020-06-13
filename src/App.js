import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [timeCurrent, setTimeCurrent] = useState({
    date: "",
    hour: ""
  });

  setTimeout(() => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const hour = now.toLocaleTimeString();
    setTimeCurrent({
      date,
      hours
    });
  }, 1000);

  const { date, hours } = timeCurrent;

  return (
    <div className="App">
      <h1>Fecha y Hora</h1>
      <div className="clock">
        <h2>{date}</h2>
        <h2>{hours}</h2>
      </div>
    </div>
  );
}
