import React, { useState, useEffect } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState({});

  // Data do próximo tapa (modifique para qualquer data futura)
  const nextSlapDate = new Date("2024-12-31T00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = nextSlapDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Parar o timer quando atingir o tempo
      if (timeDifference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <h1>Próximo Tapa em:</h1>
      <div className="time">
        <div>
          {timeLeft.days || 0} <span>dias</span>
        </div>
        <div>
          {timeLeft.hours || 0} <span>horas</span>
        </div>
        <div>
          {timeLeft.minutes || 0} <span>minutos</span>
        </div>
        <div>
          {timeLeft.seconds || 0} <span>segundos</span>
        </div>
      </div>
    </div>
  );
}

export default App;
