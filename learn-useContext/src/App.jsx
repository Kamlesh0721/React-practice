import Navbar_child from "./Navbar_child";
import React, { useState } from "react";
export const Context = React.createContext();
function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      <Context.Provider value={[signedIn, setSignedIn]}>
        <Navbar_child />
        <h1
          onClick={() => {
            setSignedIn(!signedIn);
          }}
        >
          {signedIn ? "Signed In" : "Signed Out"}
        </h1>
      </Context.Provider>
    </>
  );
}

export default App;
