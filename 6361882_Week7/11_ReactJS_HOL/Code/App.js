import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyApp";

function EventExamplesApp() {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const increment = () => {
    alert("Hello Memeber 1");
  };

  const sayWelcome = () => {
    alert("Welcome");
  };

  const handleSyntheticClick = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  const handleClick = () => {
  handleIncrement();
  increment();
};


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>{count}</h2>

      <button onClick={handleClick}>Increment</button>
      <br></br>
      <button onClick={handleDecrement} style={{ marginTop: "5px" }}>Decrement</button>
      <br></br>
      <button onClick={sayWelcome} style={{ marginTop: "5px" }}>Say welcome</button>
      <br></br>
      <button onClick={handleSyntheticClick} style={{ marginTop: "5px" }}>Click on me</button>

      <CurrencyConvertor />
    </div>
  );
}

export default EventExamplesApp;
