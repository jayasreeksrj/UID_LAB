import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Stylish Counter</h1>
      <h2 className="counter-display">{count}</h2>
      <div className="button-container">
        <button onClick={increment} className="counter-button increment">
          Increment
        </button>
        <button onClick={decrement} className="counter-button decrement">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
