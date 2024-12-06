import React, { useReducer } from "react";

function reducer(state, action) {
  console.log("State: ", state);
  console.log("Action: ", action);
  if (action === "Increment") {
    return state + 1;
  } else if (action === "Decrement") {
    return state - 1;
  } else if (action === "Reset") {
    return 0;
  }
}
function App() {
  const [count, dispath] = useReducer(reducer, 0);

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count : {`${count}`}</h2>
      <button
        onClick={() => {
          dispath("Increment");
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispath("Decrement");
        }}
      >
        Decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispath("Reset");
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App;
