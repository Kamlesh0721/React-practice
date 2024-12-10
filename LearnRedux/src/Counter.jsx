import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./App";

const Counter = () => {
  let stateVal = useSelector((state) => state);
  let dispatch = useDispatch();
  console.log(dispatch);

  return (
    <div>
      <h3>Counter : {stateVal}</h3>
      <button onClick={() => dispatch(increment("Increment button "))}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement("Decrement button"))}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset("Reset button"))}>Reset</button>
      {/* increment button,decrement button,reset button will display in console payload */}
    </div>
  );
};

export default Counter;
