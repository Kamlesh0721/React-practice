import { useContext } from "react";
import { Context } from "./App";
const Button_grandC = () => {
  const [signedIn, setSignedIn] = useContext(Context);
  return (
    <>
      <button
        onClick={() => {
          setSignedIn(!signedIn);
        }}
      >
        {signedIn ? "Sign In" : "Sign Out"}
      </button>
    </>
  );
};
export default Button_grandC;
