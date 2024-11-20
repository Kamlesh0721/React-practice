import React, { useMemo, useState } from "react";
const Memo = () => {
  let [add, setAdd] = useState(0);
  let [minus, setMinus] = useState(100);

  // function multiply() {
  //   console.log("*******************");
  //   return add * 10;
  // }
  let multiply = useMemo(() => {
    console.log("*******************");
    return add * 10;
  }, [add, minus]);
  return (
    <>
      <h1>Memo Example</h1>
      <h2>Multiply {multiply}</h2>

      <h2>
        Add {add}
        <button onClick={() => setAdd(add + 1)}>Add</button>
        <br />
        Minus{minus}
        <button onClick={() => setMinus(minus - 1)}>Minus</button>
      </h2>
    </>
  );
};

export default Memo;
