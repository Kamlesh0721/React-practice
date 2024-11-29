import { useState } from "react";
import { useEffect } from "react";

const FBCLifeCycle = () => {
  let [state, setState] = useState(0);

  useEffect(() => {
    console.log("Mounting");
  }, []);

  useEffect(() => {
    console.log(`Updating  ${state}`);
  }, [state]);

  return (
    <>
      <h1>Count : {state} </h1>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};
export default FBCLifeCycle;
