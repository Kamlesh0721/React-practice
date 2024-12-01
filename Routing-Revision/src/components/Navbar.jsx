import style from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const Navbar = () => {
  let userID = localStorage.getItem("userID");
  console.log(userID, "Navbar");

  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userID");
    navigate("/login");
    toast.success("Logged Out");
  };

  const deleteProfile = () => {
    let confirmVal = confirm("Are You Sure ?");
    if (confirmVal) {
      axios
        .delete(`http://localhost:5001/users/${userID}`)
        .then(() => {
          toast.success("Deleted");
          localStorage.removeItem("userID");
          navigate("/register");
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  };
  return (
    <nav>
      <aside>👻</aside>

      <ul className={style.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {userID ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
              <ul>
                <li>
                  <Link to="updateProfile">Update</Link>
                </li>
                <li onClick={deleteProfile}>Delete</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
