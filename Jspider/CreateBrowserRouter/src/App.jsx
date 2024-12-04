import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Contacts from "./Pages/Contacts";

const App = () => {
  // let myRoutes = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  //   { path: "/contacts", element: <Contacts /> },
  //   { path: "/signup", element: <Signup /> },
  //   { path: "/login", element: <Login /> },
  // ]);
  return (
    <>
      <Navbar />
      {/* <Home />
      <Contacts />
      <Login />
      <Signup /> */}
    </>
  );
};

export default App;
