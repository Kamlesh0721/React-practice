import React from "react";
import style from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Navbar = () => {
  let userID = localStorage.getItem("userID");
  console.log(userID, "Navbar");

  let navigate = useNavigate();

  let logout = () => {
    localStorage.removeItem("userID");
    navigate("/login");
    toast.success("Logged Out");
  };

  return (
    <nav>
      <aside className={style.logo}>🤯</aside>
      <ul className={style.menu}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        {userID ? (
          <>
            <li className={style.drop}>
              <Link to="/profile">Profile</Link>
              <ul className={style.dropdown}>
                <li><Link to="/updateprofile">update</Link></li>
                <li>delete</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
