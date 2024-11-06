import { useState } from "react";
import IncrementCount from "./components/IncrementCount";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <IncrementCount buttonFunction={increment} text="Increment">
        <h1>Counter</h1>
        <p>{count}</p>
      </IncrementCount>
    </>
  );
}

export default App;
