import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter App</h1>
      <br />
      <h2>Count : {count}</h2>
      <br />
      <hr />
      <br />

      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Counter;
