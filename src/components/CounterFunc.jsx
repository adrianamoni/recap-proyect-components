import React, { useState } from "react";

const CounterFunc = () => {
  const initialCountState = 0;
  const [count, setCount] = useState(initialCountState);
  const [fruta, setFruta] = useState("Ninguna");

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleFruta = frutaRecibida => {
    setFruta(frutaRecibida);
  };

  return (
    <div>
      <div>
        <h1>Counter Class - You've pushed {count} time(s)</h1>
        <button onClick={() => handleDecrement()}>Decrement</button>
        <button onClick={() => handleIncrement()}>Increment</button>
        <hr />
      </div>

      <h2>Que fruta te gusta más? - {fruta}</h2>
      {fruta !== "fresas" && (
        <button
          class={fruta === "fresas" ? `rojo` : "azul"}
          onClick={() => handleFruta("fresas")}
        >
          Fresas
        </button>
      )}
      {fruta !== "mango" && (
        <button onClick={() => handleFruta("mango")}>Mango</button>
      )}
    </div>
  );
};

export default CounterFunc;
