import React, { useState } from "react";

function MyComponent() {
  const [state, setState] = useState({ value: 0 });
  if (state.value > 10) {
    throw new Error("State can not be greater than 10");
  }
  return (
    <>
      <div>My Component Value : {state.value}</div>
      <button
        onClick={() => {
          setState({ value: state.value + 1 });
        }}
      >
        Increment
      </button>
    </>
  );
}

export default MyComponent;
