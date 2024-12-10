import { useReducer } from "react";
function Counter() {
  const reducer = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
      case "Reset":
        return 0;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Counter</h1>
      <h2>Count : {count}</h2>
      <hr />
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch("Decrement");
        }}
      >
        Decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch("Reset");
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
