import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/navbar.module.css";
function Navbar() {
  return (
    <div className={style.container}>
      <h1 className={style.logo}>LOGO</h1>
      <div className={style.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
