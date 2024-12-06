import ErrorBoundry from "./ErrorBoundry";
import MyComponent from "./MyComponent";

function App() {
  return (
    <ErrorBoundry>
      <MyComponent />
    </ErrorBoundry>
  );
}

export default App;
