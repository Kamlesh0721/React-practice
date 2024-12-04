import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./Counter";

//Step 2
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      console.log(state, action);

      return state + 1;
    },
    decrement: (state, action) => {
      console.log(state, action);
      return state - 1;
    },
    reset: (state, action) => {
      console.log(state, action);
      return (state = 0);
    },
  },
});

export let { increment, decrement, reset } = counterSlice.actions;

//Step-1
const myStore = configureStore({
  reducer: counterSlice.reducer,
});

const App = () => {
  return (
    <div>
      <h1>Redux App</h1>
      {/* Step-3 */}
      <Provider store={myStore}>
        <Counter />
      </Provider>
    </div>
  );
};
export default App;
