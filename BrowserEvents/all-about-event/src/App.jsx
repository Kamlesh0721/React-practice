import { useState } from "react";
import FBCLifeCycle from "./Component/FBCLifeCycle";
function App() {
  let [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle ? <FBCLifeCycle /> : ""}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Delete Counter
      </button>
    </>
  );
}

export default App;
