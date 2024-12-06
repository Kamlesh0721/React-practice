import React, { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const increment = () => {
    setCount(count + 1);
  };
  const updateData = (count) => {
    console.log(count);
    for (let i = 0; i < 1000000000; i++) {}
    return count;
  };

  const updatedData = useMemo(() => {
    return updateData(count);
  }, [count]);

  return (
    <div>
      <button onClick={increment}> Increment</button>
      <h1>{updatedData}</h1>
      <br />
      <br />
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "HI" : "Bye"}
      </button>
    </div>
  );
}

export default App;
