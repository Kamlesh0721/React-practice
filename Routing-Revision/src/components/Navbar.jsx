import style from "./style/navbar.module.css";
import logo from "../Assets/monitoring.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <aside className={style.logo}>
        <img src={logo} alt="src" />
      </aside>

      <ul className={style.menu}>
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
    </nav>
  );
};

export default Navbar;
