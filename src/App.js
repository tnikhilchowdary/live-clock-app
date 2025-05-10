import React, { useState, useEffect } from "react";

import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);

  }, []);
  return (
    <div className="App">
      <h2>{time}</h2>
    </div>
  );
}

export default App;
