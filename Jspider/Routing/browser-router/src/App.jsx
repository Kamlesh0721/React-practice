import React from "react";
import Navbar from "../../Routing/browser-router/src/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Routing/browser-router/src/pages/Home";
import About from "../../Routing/browser-router/src/pages/About";
import Login from "../../Routing/browser-router/src/pages/Login";
import Register from "../../Routing/browser-router/src/pages/Register";
import PrivateRoute from "../../Routing/browser-router/src/components/PrivateRoute";
import { Toaster } from "react-hot-toast";
import Profile from "../../Routing/browser-router/src/pages/Profile";
import UpdateProfile from "../../Routing/browser-router/src/pages/UpdateProfile";
import Admin from "../../Routing/browser-router/src/pages/Admin";
const App = () => {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/updateprofile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
