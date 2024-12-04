import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import ProfilesPage from "./components/ProfilesPage";
import ProfilePage from "./components/ProfilePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/profiles",
      element: <ProfilesPage />,
      children: [
        {
          path: "/profiles/:profileId",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
