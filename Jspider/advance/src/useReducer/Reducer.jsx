import { act, useReducer } from "react";
const Reducer = () => {
  let initialState = { count: 0 };
  let reducerFunc = (state, action) => {
    console.log(state["count"], action);

    switch (action) {
      case "increment":
        return { count: state["count"] + 1 };

      case "decrement":
        if (state["count"] <= 0) {
          return { count: (state["count"] = 0) };
        }
        return { count: state["count"] - 1 };

      case "reset":
        return { count: 0 };
    }
  };

  let [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <>
      <h1>Increment using useReducer</h1>
      <h2>{state["count"]}</h2>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
};

export default Reducer;
